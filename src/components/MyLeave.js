import React,{ Component } from 'react';

export default class MyLeave extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const user=this.props.user;
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
        return(
            <>
           
            <div>
           {
               arr.map( (curEle)=>{
                   if(curEle.user==user){
                return(
                    <div class="card" style={{margin:"20px",maxWidth:"500px"}}>
  <h5 class="card-header"><span>Subject: </span>{curEle.Subject}</h5>
  <div class="card-body">
  <p><span>Start date: </span>{curEle.Idate}</p>
                        <p><span>End Date: </span>{curEle.Fdate}</p>
    <p class="card-text"><span>Message: </span>{curEle.Message}</p>
    
  </div>
  <h5 class="card-footer"><span>Status: </span>{curEle.Approval}</h5>
</div>
                   
                )
                   }
               })
           }
            </div>
            </>
        );
    }
}
