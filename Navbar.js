import React from 'react'

export default function Navbar(props) {

  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="cn.jpg" alt="" width="100" height="120" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Contact
          </a>
        </li><li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Menu
          </a>
        </li><li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            123
          </a>
        </li>
        
      </ul>
      
    </div>
  </div>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault my-10" >DarkMode</label>
</div>
</nav>
<h1 style={{color:props.mode==='dark'?'white':'black'}}></h1>
   </>
  )
}