import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Privacy from './components/Privacy/Privacy';

// source here: https://github.com/maisano/react-router-transition
import RouteWrapper from './components/AnimatedSwitch/AnimatedSwitch';

import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appOuterStyles: { paddingBottom: '0' },
      appInnerStyles: {},
    };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    // TODO: resize, debounce, etc
  }

  render() {
    return (
      <div className="App" style={this.state.appOuterStyles}>
        <div className="App-inner" style={this.state.appInnerStyles}>
          <Header />
          <Nav />
          <RouteWrapper
            atEnter={{
              x: 100,
              opacity: 1,
            }}
            atLeave={{
              x: -100,
              opacity: 0,
            }}
            atActive={{
              x: 0,
              opacity: 1,
            }}
            mapStyles={style => {
              return {
                opacity: style.opacity,
                transform: `translateX(${style.x}vw)`,
              };
            }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/privacy"
              render={props => (
                <Privacy
                  {...props}
                  /**
                   * Example of prop passing in Route#render:
                   * somePropName={this.someMemberValue}
                   */
                />
              )}
            />
          </RouteWrapper>
        </div>
      </div>
    );
  }
}

export default App;
