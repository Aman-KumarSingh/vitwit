import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function A_Header() {
  return (
      <>
    
    <div>
        
    <ul className="nav" style={{backgroundColor: "rgb(24, 100, 100)",  borderBottom: "1px solid white"}} >
        <li className="nav-item">
          <Link className="nav-link active" style={{color:"white"}} to="/" ><i className="fa fa-home" aria-hidden="true" style={{color:"white"}}></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:"white"}} to="/Admin" >Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color:"white"}} to="/P_Request" >Pending Request</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color:"white"}} to="/A_Request" >Approved Request</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color:"white"}} to="/Logout" >Logout</Link>
        </li>
       
      </ul>
    </div>
    </>
  )
}