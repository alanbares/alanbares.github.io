import React, { Component } from 'react';

function Profile() {
  return (
    <div className="container">
      <div className="jumbotron company">
        <h2 id="top" className="text-center">Alan Bares</h2>
          <p className="text-center">
            Software Engineer
          </p>
          <hr className="heading-line" />
          <div className="row text-center">
              <div className="col-md-3">
                  <a className="btn btn-primary btn-lg social-icon" href="https://alanbares.wordpress.com/" target="_blank">
                  <i className="fa fa-wordpress"></i>Blog
                  </a>
              </div>
              <div className="col-md-3">
                  <a className="btn btn-primary btn-lg social-icon" href="https://www.linkedin.com/in/alanbares" target="_blank">
                  <i className="fa fa-linkedin"></i>Linkedin
                  </a>
              </div>
              <div className="col-md-3">
                  <a className="btn btn-primary btn-lg social-icon" href="https://github.com/alanbares" target="_blank">
                  <i className="fa fa-github"></i>GitHub
                  </a>
              </div>
              <div className="col-md-3">
                  <a className="btn btn-primary btn-lg social-icon" href="http://freecodecamp.com/alanbares" target="_blank">
                  <i className="fa fa-fire"></i>Free Code Camp
                  </a>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Profile;
