import React,{ Component } from 'react';
import E_Header from './E_Header';
import MyLeave from  './MyLeave';
import NewLeave from  './NewLeave';
import Logout from  './Logout';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class Employee extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props.aid);
        return(
            <>
           <Router>
               <E_Header />
    <div className="App">
    <Switch>
    <Route exact path="/MyLeave">
      <MyLeave user={this.props.aid}/>
      </Route>
      <Route exact path="/NewLeave">
      <NewLeave user={this.props.aid}/>
      </Route>
      <Route exact path="/Logout" >
      <Logout />
      </Route>
    </Switch>
    </div>
    </Router>
            </>
        );
    }
}
