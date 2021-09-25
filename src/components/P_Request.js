import React,{ Component, useEffect } from 'react';
import { useState } from 'react';
function P_Request(){

   
        const getLocalItems=()=>{
    let list =localStorage.getItem('leave');
    if(list){
        return JSON.parse(localStorage.getItem('leave'));
    }
    else{
        return [];
    }
}
const status="Approved";
const arr= getLocalItems(); 
const [leave,setLeave]= useState(getLocalItems());   
const editItem =(id)=>{
    
    arr.find((curEle)=>{
        if(curEle.id==id){
            setLeave(
                leave.map((elem)=>{
                    if(elem.id==id){
                        return { ...elem, Approval:status}
                    }
                    return elem;
                })
            )
        }
    });
}
useEffect(()=>{
    localStorage.setItem('leave',JSON.stringify(leave))
},[leave]);
    return (
        <div>
        {
            arr.map( (curEle)=>{
                if(curEle.Approval=="Pending"){
             return(
                 <>
               
                <div class="card" style={{margin:"20px",maxWidth:"500px"}} key={curEle.id}>
                <h5 class="card-header"><span>Uesr Id: </span>{curEle.user}</h5>
                <div class="card-body">
                <p><span>Start date: </span>{curEle.Idate}</p>
                <p><span>End Date: </span>{curEle.Fdate}</p>
                <h5 class="card-text"><span>Subject: </span>{curEle.Subject}</h5>
                <p class="card-text"><span>Message: </span>{curEle.Message}</p>
                  
                </div>
                <h5 class="card-footer"><span>Status: </span>{curEle.Approval}</h5>
                <button type="submit" id="status" class="btn btn-success" onClick={()=>editItem(curEle.id)} value="Approved">Approved </button>
              </div>
              
              </>         
             )
                }
            })
        }
         </div>
    );
}
export default P_Request;
