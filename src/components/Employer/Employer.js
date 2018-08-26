import React, { Component } from 'react';
// import { StaggeredMotion, spring, presets } from 'react-motion';
import { TransitionMotion, StaggeredMotion, spring, presets } from 'react-motion';
import range from 'lodash.range';

import './Employer.css';
import SimpleDateRange from './SimpleDateRange';

class Employer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

      // items: [{
      //   key: 'a', size: 100
      // }, {
      //   key: 'b', size: 100
      // }, {
      //   key: 'c', size: 100
      // }]

      // items: [{
      //   key: 'a', size: 100
      // }]

      items: []

    };

    this.toggleRoleDetails = this.toggleRoleDetails.bind(this);
    this.test = this.test.bind(this);
  }

  toggleRoleDetails() {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  }

  willLeave() {
    return {
      height: spring(0, presets.stiff)
    };
  }

  willEnter() {
    return {
      height: 0
    }
  }

  getDefaultStyles = () => {
    return this.state.items.map(item => ({
      ...item,
      style: {
        height: 0
      }
    }));
  }

  getStyles = () => {
    const {items} = this.state;

    return items.map((item, i) => {
      return {
        ...item,
        style: {
          // height: spring(100, presets.stiff)
          height: spring(item.size, presets.stiff)
        }
      };
    });
  }

  test() {
    this.setState({
      items: [{
        key: 'responsibilities', size: 100
      }, {
        key: 'projects', size: 100
      }]
    });
  }

  componentDidMount() {
    this.test();
  }

  render() {
    return (
      <section className="section employer">
        <h3 className="h3 employer-name">{this.props.jobDetails.employerName}</h3>
        
        <SimpleDateRange dates={this.props.jobDetails.dates} />
        
        <div className="role-body">
          <span className="role-heading">
            <button className="button toggle-role-details" onClick={this.toggleRoleDetails}>{this.state.open ? '<' : '>'}</button>
            <h4 className="h4 role-title">{this.props.jobDetails.roleTitle}</h4>
          </span>

          <button onClick={this.test}>duh</button>
          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
            styles={this.getStyles()}
            >
            {interpolatedStyles => 
              <div>
                {interpolatedStyles.map((config, i) => {
                  return <div key={config.key} style={{...config.style, border: '1px solid'}}>
                    {config.key}
                  </div>
                })}
              </div>
            }
          </TransitionMotion>

          {/* {this.state.open && */}
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

          {/* {this.state.open && */}
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
      </section>
    );
  }
}

export default Employer;