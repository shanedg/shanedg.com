import React, { Component } from 'react';
import './Snippet.css';

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/default.css';

class Snippet extends Component {
  constructor(props) {
    super(props);
    hljs.registerLanguage('javascript', javascript);
  }

  componentDidMount() {
    hljs.initHighlighting();
  }

  render() {
    return (
      <div className="Snippet">
        <pre>
          <code>{this.props.snippet || "console.log('whoops');"}</code>
        </pre>
      </div>
    );
  }
}

export default Snippet;
