import React from 'react';
import { useState } from 'react';
import login from './login.json';
import Admin from './Admin';
import Employee from './Employee';


const Body=()=> {

            const [id, setId]=useState("");
            const [pass, setPass]=useState("");  
            var flag=0;
            const Login =(e)=>{
                e.preventDefault();
                login.map( (curEle)=>{
                        if(curEle.id==id && curEle.pass==pass){
                            flag=1;
                        }                        
                   
                })
                if(flag===1 && id==="admin"){
                    document.getElementById("login").style.display="none";
                    document.getElementById("admin").style.display="block";
                }
                else if(flag===1){
                    document.getElementById("login").style.display="none";
                    document.getElementById("user").style.display="block";
                }
                else{
                    alert("Invalid Credentials");
                }
                }
        return (
            <>
            <div id="login" style={{display:'flex',justifyContent:'center', marginTop:"50px"}}>
                <form action="" onSubmit={Login}>
                   
                <div style={{width:"600px"}}>
                    <div class="form-group">
                        <label for="formGroupExampleInput">User ID</label>
                        <input type="text" class="form-control" value={id} onChange={(e)=>setId(e.target.value)} id="formGrt" placeholder="Id" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Password</label>
                        <input type="password" class="form-control" value={pass} onChange={(e)=>setPass(e.target.value)} id="formGrt" placeholder="Password" />
                    </div>
                    </div>
                    <button class="btn btn-success"type="submit">Submit </button>
                </form >
                
            </div >
            <div id="admin" style={{display:"none"}}>
                <Admin />
            </div>
            <div id="user" style={{display:"none"}}>
                <Employee aid={id}/>
            </div>
            </>
        );
    
}
export default Body