import React, { Component, useEffect } from 'react';
import { useState } from 'react';

const getLocalItems=()=>{
    let list =localStorage.getItem('leave');
    if(list){
        return JSON.parse(localStorage.getItem('leave'));
    }
    else{
        return [];
    }
}

function NewLeave(props) {
            const id=new Date().getTime().toString();
            const user=props.user;
            const [iDate, setIDate]=useState("");
            const [fDate, setFDate]=useState("");
            const [subject, setSubject]=useState("");
            const [message, setMessage]=useState("");
            const approval="Pending";
            const [leave,setLeave]= useState(getLocalItems());   
        const addItem =(e)=>{
            e.preventDefault();
            const newLeave={id:id,user:user,Idate:iDate,Fdate:fDate,Subject:subject,Message:message,Approval:approval};
          
                setLeave([... leave, newLeave]);
        }
        
        useEffect(()=>{
            localStorage.setItem('leave',JSON.stringify(leave))
        },[leave]);
        return (
            <div>
                <form action="" onSubmit={addItem}>
              
                        
                           
                <div style={{width:"600px"}}>
                <span>Start date: </span>
                <input type="date" class="datepicker" data-date-format="mm/dd/yyyy" value={iDate} onChange={(e)=>setIDate(e.target.value)} autoComplete="off"/>
                        
                        
                        <h6>To</h6>
                        <span>End date: </span>
                        <input type="date" class="datepicker" data-date-format="mm/dd/yyyy" value={fDate} onChange={(e)=>setFDate(e.target.value)}/>
                    
                
                    <div class="form-group">
                        <label for="formGroupExampleInput">Subject</label>
                        <input type="text" class="form-control" value={subject} onChange={(e)=>setSubject(e.target.value)} id="formGrt" placeholder="Subject" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Application</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    </div>
                    </div>
                    <button class="btn btn-success"type="submit">Submit </button>
                </form >
                
            </div >
        );
    
}
export default NewLeave