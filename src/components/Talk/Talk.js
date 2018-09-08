import React, { Component } from 'react';
import './Talk.css';

class Talk extends Component {

  render() {
    return (
      <section className="Talk">
        <h2>talk to me</h2>
        <p>check out my <a href="https://github.com/shanedgarrity" target="_blank" rel="noopener noreferrer">github</a> or connect with me on <a href="https://www.linkedin.com/in/shane-garrity-ba915544" target="_blank" rel="noopener noreferrer">linkedin</a> or shoot me an <a href="mailto:shanedgarrity+website@gmail.com">email</a></p>
      </section>
    );
  }
}

export default Talk;