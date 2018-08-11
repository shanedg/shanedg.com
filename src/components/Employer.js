import React, { Component } from 'react';

class Employer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <section className="section employer">
        <h3 className="h3 employer-name">{this.props.jobDetails.employerName}</h3>
        <h4 className="h4 role-title">{this.props.jobDetails.roleTitle}</h4>
        <p>highlights: {this.props.jobDetails.highlightsCopy}</p>

        {/* RESPONSIBILITIES */}
        {this.props.jobDetails.responsibilities &&
          <section className="section responsibilities">
            <p>responsibilities:</p>
            <ul>
              {this.props.jobDetails.responsibilities.map((responsibilityDescription, index) => {
                return <li key={index}>{responsibilityDescription}</li>
              })}
            </ul>
          </section>
        }
        
        {/* PROJECTS */}
        {this.props.jobDetails.projects &&
          <section className="section projects">
            <p>projects:</p>
            <ul>
              {this.props.jobDetails.projects.map((projectDescription, index) => {
                return <li key={index}>{projectDescription}</li>
              })}
            </ul>
          </section>
        }
      </section>
    );
  }
}

export default Employer;