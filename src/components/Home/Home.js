import React, { Component } from 'react';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <section className="Home">
        <h2>home</h2>
        <p>shane is a professional web developer with a background in:</p>
        <ul>
          <li>front end dev</li>
          <li>generalist work</li>
        </ul>
        <p>
          as well as experience in both enterprise and startup environments. he
          is currently based in nyc.
        </p>
      </section>
    );
  }
}

export default Home;
