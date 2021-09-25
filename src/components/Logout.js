import React,{ Component } from 'react';
import { useHistory } from 'react-router-dom'

function Logout(){
    const history=useHistory();
    history.push('/');
}
export default Logout;
