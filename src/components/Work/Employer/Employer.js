import React, { Component } from 'react';
import { TransitionMotion, StaggeredMotion, spring, presets } from 'react-motion';
import range from 'lodash.range';

import './Employer.css';
import SimpleDateRange from './SimpleDateRange';

class Employer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      items: []
    };

    this.toggleRoleDetails = this.toggleRoleDetails.bind(this);
  }

  toggleRoleDetails() {
    this.setState((prevState) => {

      if (prevState.items.length > 0) {
        return ({
          items: [],
          open: false
        });
      } else {
        return ({
          items: [{
            key: 'responsibilities',
            size: 1000
          }],
          open: true
        })
      }

    });
  }

  willLeave() {
    return {
      maxHeight: spring(0, presets.noWobble),
    };
  }

  willEnter() {
    return {
      maxHeight: 0
    }
  }

  getDefaultStyles = () => {
    return this.state.items.map(item => ({
      ...item,
      style: {
        maxHeight: 0
      }
    }));
  }

  getStyles = () => {
    const {items} = this.state;

    return items.map((item, i) => {
      return {
        ...item,
        style: {
          maxHeight: spring(2000, presets.stiff)
        }
      };
    });
  }

  render() {
    return (
      <section className="Employer">
        <div className="employer-heading">
          <h3 className="h3 employer-name">{this.props.jobDetails.employerName}</h3>
          <SimpleDateRange dates={this.props.jobDetails.dates} />
        </div>
        
        <div className="role-body">
          <span className="role-heading">
            <button className={`button toggle-role-details${this.state.open ? ' toggle-open' : ''}`} onClick={this.toggleRoleDetails}>
              <span>
              {/* {this.state.open ? '<' : '>'} */}
                +
              </span>
            </button>&nbsp;
            <h4 className="h4 role-title">{this.props.jobDetails.roleTitle}</h4>
          </span>

          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
            styles={this.getStyles()}
            >
            {interpolatedStyles => 
              <div>
                {interpolatedStyles.map((config, i) => {
                  return <div key={config.key} style={{
                    ...config.style,
                    overflow: 'hidden'
                  }}>
                    {this.props.jobDetails.responsibilities &&
                      <ul>
                        <StaggeredMotion
                          defaultStyles={range(this.props.jobDetails.responsibilities.length).map(() => ({ x: -100}))}
                          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                            return i === 0
                              ? {x: spring(0)}
                              : {x: spring(prevInterpolatedStyles[i - 1].x, presets.stiff)}
                          })}>
                          {interpolatingStyles =>
                            <section className="section responsibilities">
                              <h5>responsibilities:</h5>
                              <ul>
                                {interpolatingStyles.map((style, i) => {
                                  return (
                                    <li key={i} style={{transform: `translateX(${style.x}vw`}}>
                                      {this.props.jobDetails.responsibilities[i]}
                                    </li>
                                  )})
                                }
                              </ul>
                            </section>
                          }
                        </StaggeredMotion>
                      </ul>
                    }

                    {this.props.jobDetails.projects &&
                      <ul>
                        <StaggeredMotion
                          defaultStyles={range(this.props.jobDetails.projects.length).map(() => ({ x: -100}))}
                          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                            return i === 0
                              ? {x: spring(0)}
                              : {x: spring(prevInterpolatedStyles[i - 1].x, presets.stiff)}
                          })}>
                          {interpolatingStyles =>
                            <section className="section projects">
                              <h5>projects:</h5>
                              <ul>
                                {interpolatingStyles.map((style, i) => {
                                  return (
                                    <li key={i} style={{transform: `translateX(${style.x}vw`}}>
                                      {this.props.jobDetails.projects[i]}
                                    </li>
                                  )})
                                }
                              </ul>
                            </section>
                          }
                        </StaggeredMotion>
                      </ul>
                    }
                  </div>
                })}
              </div>
            }
          </TransitionMotion>
        </div>
      </section>
    );
  }
}

export default Employer;