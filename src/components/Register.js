import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"

function Register() {
  let navigate =useNavigate()

  const [username, setUsername]= useState()
  const [mobile, setMobile]=useState()
  const [email, setEmail]= useState()
  const [password, setPassword]= useState()

  const User = {
    username,
    mobile,
    email,
    password
  } 

  function handleSubmit(e){
    e.preventDefault()
    // console.log(username,mobile, email,password)
    fetch('http://localhost:3000/users',{
      method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(User)
    } 
  ).then(res=>console.log(res.json()))}

  return (
    <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12 h-full flex flex-col mx-64" onSubmit={handleSubmit}>
    <div className="mb-4 px-8">
    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input type="text" id="username"  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  required onChange={e => setUsername(e.target.value)}/>
    </div>
    <div className="mb-4 px-8">
    <label className="block text-grey-darker text-sm font-bold mb-2" for="mobile">
      Mobile Number
    </label>
    <input type="number" id="mobile"  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" onChange={e => setMobile(e.target.value)}/>
    </div>
    <div className="mb-6 px-8">
    <label className="block text-grey-darker text-sm font-bold mb-2" for="email">
    Email
    </label>
    <input type="text"  id="email" className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" onChange={e => setEmail(e.target.value)}/>
    </div>
    <div className="mb-6 px-8">
    <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" onChange={e => setPassword(e.target.value)}/>
    </div>
    <div className="flex items-center justify-between px-8">
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
      Sign Up
    </button>
    <a className="inline-block align-baseline font-bold text-sm font-serif hover:text-blue-600" onClick={()=>{ navigate("/login")}}>
      Sign In
    </a>
    </div>
  </form>
  );
}

export default Register;
