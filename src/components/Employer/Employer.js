import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import ReactMotion, { StaggeredMotion, spring } from 'react-motion';
// import { StaggeredMotion, spring } from 'react-motion';
import { Motion, StaggeredMotion, spring } from 'react-motion';

import './Employer.css';
import SimpleDateRange from './SimpleDateRange';
import { height } from 'window-size';

class Employer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.toggleRoleDetails = this.toggleRoleDetails.bind(this);
  }

  toggleRoleDetails() {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
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
            {/* <p className="p tldr"><strong className="strong tldr">tl;dr</strong> &mdash; {this.props.jobDetails.highlightsBlurb}</p> */}
            
          </span>

          {this.state.open &&
            this.props.jobDetails.responsibilities &&
            <StaggeredMotion
              // defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
              defaultStyles={[{ x: -100}, { x: -100}, { x: -100}]}
              styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                return i === 0
                  ? {x: spring(0)}
                  : {x: spring(prevInterpolatedStyles[i - 1].x)}
              })}>
              {interpolatingStyles =>
                <div>
                  {interpolatingStyles.map((style, i) => {
                    return (
                      <div key={i} style={{border: '1px solid', height: '20px', transform: `translateX(${style.x}vh`}} />
                    )})
                  }
                </div>
              }
            </StaggeredMotion>
          }

          {/* <ReactCSSTransitionGroup
            transitionName="role-details"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnterTimeout={750}
            transitionLeaveTimeout={750}>
              {this.state.open &&
                this.props.jobDetails.responsibilities &&
                <section className="section responsibilities">
                  <h5>responsibilities:</h5>
                  <ul>
                    {this.props.jobDetails.responsibilities.map((responsibilityDescription, index) => {
                      return <li key={index}>{responsibilityDescription}</li>
                    })}
                  </ul>
                </section>
              }

              {this.state.open &&
                this.props.jobDetails.projects &&
                <section className="section projects">
                  <h5>projects:</h5>
                  <ul>
                    {this.props.jobDetails.projects.map((projectDescription, index) => {
                      return <li key={index}>{projectDescription}</li>
                    })}
                  </ul>
                </section>
              }
            </ReactCSSTransitionGroup> */}
          
        </div>
      </section>
    );
  }
}

export default Employer;