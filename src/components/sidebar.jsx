import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Rayna K. Williams</a></h1>
              <span className="email"><i className="icon-mail"></i> raynawilliams123@gmail.com</span>
            </div>
        
            <nav id="colorlib-main-menu">
              <ul>
               

                <li><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer">LinkedIn Profile<i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer"> Github Profile<i className="icon-github"></i></a></li>

              </ul>
            </nav>
            <div className="colorlib-footer">

              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}