import React, { Component } from 'react';
import './Privacy.css';

class Privacy extends Component {

  render() {
   return (
     <section className="Privacy">
        <h2>privacy</h2>
        <p>for information about what personal data this site collects:&nbsp;
          {/* <!-- Begin iubenda generated privacy policy --> */}
          <a href="https://www.iubenda.com/privacy-policy/68672540" className="iubenda-black iubenda-embed " title="Privacy Policy">privacy policy</a>
          {/* <!-- End iubenda generated privacy policy --> */}
        </p>

        {/* <!-- Begin iubenda generated privacy policy embed script --> */}
        {/* <script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script> */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`
        }} />
        {/* <!-- End iubenda generated privacy policy embed script --> */}
      </section>
    );
  }
}

export default Privacy;
