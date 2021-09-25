import React, { Component } from 'react';
export default class A_Request extends Component {
    render() {
            const getLocalItems=()=>{
        let list =localStorage.getItem('leave');
        if(list){
            return JSON.parse(localStorage.getItem('leave'));
        }
        else{
            return [];
        }
    }
    
    const arr= getLocalItems(); 
        return (
            <div>
            {
                arr.map( (curEle)=>{
                    if(curEle.Approval=="Approved"){
                 return(
                    <div class="card" style={{margin:"20px",maxWidth:"500px"}}>
                    <h5 class="card-header"><span>Uesr Id: </span>{curEle.user}</h5>
                    <div class="card-body">
                    <p><span>Start date: </span>{curEle.Idate}</p>
                                          <p><span>End Date: </span>{curEle.Fdate}</p>
                                          <h5 class="card-text"><span>Subject: </span>{curEle.Subject}</h5>
                      <p class="card-text"><span>Message: </span>{curEle.Message}</p>
                    </div>
                    <h5 class="card-footer"><span>Status: </span>{curEle.Approval}</h5>
                  </div>
                                 
                 )
                    }
                })
            }
             </div>
        );
    }
}
