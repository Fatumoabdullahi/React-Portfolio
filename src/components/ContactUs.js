import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">Feel free to contact me on my email</p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Email Address: {resumeData.emailId}</h4>
              <h4>GitHub: {resumeData.imagebaseurl}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
