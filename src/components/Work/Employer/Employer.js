import React, { Component } from 'react';
import {
  TransitionMotion,
  StaggeredMotion,
  spring,
  presets,
} from 'react-motion';
import range from 'lodash.range';

import './Employer.scss';
import SimpleDateRange from './SimpleDateRange';

class Employer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      items: [],
    };

    this.toggleRoleDetails = this.toggleRoleDetails.bind(this);
  }

  toggleRoleDetails() {
    this.setState(prevState => {
      if (prevState.items.length > 0) {
        return {
          items: [],
          open: false,
        };
      } else {
        return {
          items: [
            {
              key: 'ask-me-about',
            },
          ],
          open: true,
        };
      }
    });
  }

  willLeave() {
    return {
      transform: spring(0, presets.noWobble),
      maxHeight: spring(0, presets.noWobble),
    };
  }

  willEnter() {
    return {
      transform: 0,
      maxHeight: 0,
    };
  }

  getDefaultStyles = () => {
    return this.state.items.map(item => ({
      ...item,
      style: {
        transform: 0,
        maxHeight: 0,
      },
    }));
  };

  getStyles = () => {
    const { items } = this.state;

    return items.map((item, i) => {
      return {
        ...item,
        style: {
          transform: spring(1, presets.stiff),
          maxHeight: 200,
        },
      };
    });
  };

  render() {
    return (
      <section className="Employer">
        <div className="employer-heading">
          <h3 className="h3 employer-name">
            {this.props.jobDetails.employerName}
          </h3>
          <SimpleDateRange dates={this.props.jobDetails.dates} />
        </div>

        <div className="role-body">
          <span className="role-heading">
            <button
              className={`button toggle-role-details${
                this.state.open ? ' toggle-open' : ''
              }`}
              onClick={this.toggleRoleDetails}
            >
              <span>{this.state.open ? '-' : '+'}</span>
            </button>
            <h4 className="h4 role-title">{this.props.jobDetails.roleTitle}</h4>
          </span>

          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
            styles={this.getStyles()}
          >
            {interpolatedStyles => (
              <div>
                {interpolatedStyles.map((config, i) => {
                  return (
                    <div
                      key={config.key}
                      style={{
                        transform: `scaleY(${config.style.transform})`,
                        maxHeight: config.style.maxHeight + 'px',
                        overflow: 'hidden',
                      }}
                    >
                      {this.props.jobDetails.askMeAbout && (
                        <StaggeredMotion
                          defaultStyles={range(
                            this.props.jobDetails.askMeAbout.length
                          ).map(() => ({
                            x: -100,
                          }))}
                          styles={prevInterpolatedStyles =>
                            prevInterpolatedStyles.map((_, i) => {
                              return i === 0
                                ? { x: spring(0) }
                                : {
                                    x: spring(
                                      prevInterpolatedStyles[i - 1].x,
                                      presets.stiff
                                    ),
                                  };
                            })
                          }
                        >
                          {interpolatingStyles => (
                            <section className="section responsibilities">
                              <ul>
                                {interpolatingStyles.map((style, i) => {
                                  return (
                                    <li
                                      key={i}
                                      style={{
                                        transform: `translateX(${style.x}vw`,
                                      }}
                                    >
                                      {this.props.jobDetails.askMeAbout[i]}
                                    </li>
                                  );
                                })}
                              </ul>
                            </section>
                          )}
                        </StaggeredMotion>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </TransitionMotion>
        </div>
      </section>
    );
  }
}

export default Employer;
