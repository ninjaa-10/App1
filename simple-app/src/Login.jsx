import { useState } from "react";
function Login()
{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const execute=async()=>{
        const res=await fetch("http://localhost:3000/Login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username,password})})
        const msg=await res.text()
        alert(msg)
    }
    return(
        <>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/> <br/> <br />
        <input type="password" placeholder="Username" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/> <br />
        <button onClick={execute}>Login</button>
        </>
    )
}
export default Login;