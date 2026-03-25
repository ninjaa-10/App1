import React, { useState } from "react";
function Register(){
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const registerUser=async()=>{
        const res=await fetch("http://localhost:3000/register/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username,password})
        });
        const msg=await res.text();
        alert(msg);
    };
    return(
        <div>
           <h2>Register</h2> 
           <input
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
            /><br></br>
            <input
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            /><br></br>
            <button onClick={registerUser}>Register</button>
        </div>
    )
}
export default Register;