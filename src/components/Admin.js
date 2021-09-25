import React,{ Component } from 'react';
import A_Header from './A_Header';
import P_Request from  './P_Request';
import A_Request from  './A_Request';
import Logout from  './Logout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class Admin extends Component{
    render(){
        return(
            <>
            <Router>
                <A_Header />
     <div className="App">
     <Switch>
     <Route exact path="/">
       
       </Route>
       <Route exact path="/P_Request">
       <P_Request />
       </Route>
       <Route exact path="/A_Request">
       <A_Request />
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
