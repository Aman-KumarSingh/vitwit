import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function E_Header() {
  function Logout(){
    window.location.href=window.location.href;
  }
  return (
      <>
    
    <div>
        
    <ul className="nav" style={{backgroundColor: "rgb(24, 100, 100)",  borderBottom: "1px solid white"}} >
        <li className="nav-item">
          <Link className="nav-link active" style={{color:"white"}} to="/" ><i className="fa fa-home" aria-hidden="true" style={{color:"white"}}></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:"white"}} to="/MyLeave" >My Leave</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color:"white"}} to="/NewLeave" >New Leave</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" onClick={Logout} style={{color:"white"}}  >Logout</Link>
        </li>
       
      </ul>
    </div>
    </>
  )
}