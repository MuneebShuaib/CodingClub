import React from 'react'
import logo from './assets/borderless.png'
import './Navbar.css'


function Navbar() {


  // get props from app


  // display conditionally header or footer with specific info from app

  // style to look gud



  return (
    <>


      <nav className="navbar cont is-dark" role="navigation" aria-label="main navigation">
        <div className="cont navbar-brand">

          <img src={logo} alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" className='logo' />

          <h1 id='title'>The Coding Club at Northern Virginia Community College </h1>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>


          {/* link to notion */}
          <div className="end navbar-end">

            <a href="https://cypress-pixie-354.notion.site/Home-b632fa70517646c9bca0dea8e63e5ad8"><button className="button-nav button is-info">Notion</button></a>
            <a href="https://www.linkedin.com/company/nvcc-coding-club/
"><button className="button-nav button is-success">LinkedIn</button></a>
          </div>


        </div>
      </nav></>
  )
}

export default Navbar