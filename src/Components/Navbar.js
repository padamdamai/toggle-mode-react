import React from "react";
import logo from'../logo.svg'

export default function Navbar(props){

    return <>
    <nav className={props.darkmode ? "dark" : ''} >
    <img src={logo} className="logo" width="100px" height="50px" alt="img"/>
    <h3>React Course</h3>
    <h3>Practice</h3>



    <div className="form-check form-switch" className="form-switch">
    <label className="form-check-label"  className= "lightMode" htmlFor="flexSwitchCheckDefault">Light</label>
    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
     onClick={props.toggleDarkMode}
     />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
    </div>



    </nav>    
    </>
}