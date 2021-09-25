import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Header() {
  let nav={
    backgroundColor: "rgb(24, 100, 100)",
  borderBottom: "1px solid white"
  }
  let white={
    color:"white"
}
  
  return (
    <div className="" >
      <ul className="nav" style={nav} >
        <li className="nav-item">
          <Link className="nav-link active" style={white} to="/" ><i className="fa fa-home" aria-hidden="true" style={{color:"white"}}></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={white} to="/Admin" >Admin</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={white} to="/Employee" >Employee</Link>
        </li>
       
      </ul>
    </div>
  )
}