import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import matchPath from 'react-router-dom/matchPath';
import PropTypes from 'prop-types';

// import RouteTransition from './RouteTransition';
import { RouteTransition } from 'react-router-transition';

const NO_MATCH = {
  key: 'no-match',
};

/**
 * Not every location object has a `key` property (e.g. HashHistory).
 */
function getLocationKey(location) {
  return typeof location.key === 'string' ? location.key : '';
}

/**
 * Some superfluous work, but something we need to do in order
 * to persist matches/allow for nesting/etc.
 */
function getMatchedRoute(children, pathname) {
  return React.Children.toArray(children).find(child => {
    return matchPath(pathname, {
      exact: child.props.exact,
      path: child.props.path,
    });
  }) || NO_MATCH;
}

class MyAnimatedSwitch extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      key: PropTypes.string,
      pathname: PropTypes.string,
    }),
  };

  state = {
    key: getLocationKey(this.props.location),
    match: getMatchedRoute(this.props.children, this.props.location.pathname),
  };

  matches = 0;

  componentWillReceiveProps(nextProps) {
    const nextMatch = getMatchedRoute(
      nextProps.children,
      nextProps.location.pathname,
    );

    if (this.state.match.key !== nextMatch.key) {
      this.setState({
        match: nextMatch,
        key: getLocationKey(nextProps.location) + ++this.matches,
      });
    }
  }

  componentDidUpdate() {
    console.log('new ref:', this.props.forwardedRef.current.props.children);
  }

  render() {
    const { children, location, match, ...routeTransitionProps } = this.props;

    return (
      <RouteTransition ref={this.props.forwardedRef} {...routeTransitionProps}>
        <Switch key={this.state.key} location={location}>
          {children}
        </Switch>
      </RouteTransition>
    );
  }
}

// inject location as a prop so we can listen for changes
const RouteWrapper = props => (
  <Route
    children={({ location }) => (
      <MyAnimatedSwitch location={location} {...props} />
    )}
  />
);

// export default RouteWrapper;
export default React.forwardRef((props, ref) => {
  return <RouteWrapper
    {...props}
    forwardedRef={ref}
  />;
});