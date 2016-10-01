import React, { Component } from 'react';


function Nav () {
  return (
      <div id="background">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="col-md-12">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand highlight" href="#">Alan Bares</a>
            </div>
            <div className="collapse navbar-collapse navHeaderCollapse">
              <ul className="nav navbar-nav navbar-right highlight">
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Nav;
