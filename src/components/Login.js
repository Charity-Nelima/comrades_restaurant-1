import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"


function Login() {
  let navigate =useNavigate()
  // const [token, setToken]=useState()
  const [username, setUsername]=useState()
  const [password, setPassword]= useState()

  const user={
      username,
      password
  }

  function HandleSubmit(e){
    e.preventDefault()
    useEffect(()=>{
      fetch('localhost:3000/post'),{
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }
      .then(res => res.json())
    },[])

  }

  return (
    <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12 h-96 flex flex-col mx-64">
      <form onSubmit={HandleSubmit}>
      <div className="mb-4 px-8 pt-12">
      <label className="block text-grey-darker text-sm font-serif font-bold mb-2" for="username">
        Username
      </label>
      <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" required onChange={e => setUsername(e.target.value)}></input>
      </div>
      <div className="mb-6 px-8">
      <label class="block text-grey-darker text-sm font-serif font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" required onChange={e => setPassword(e.target.value)}></input>
      </div>
      <div className="flex items-center justify-between px-8">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm font-serif hover:text-blue-600" onClick={()=>{ navigate("/register")}}>
        No account? Sign Up
      </a>
      </div>
      </form>
    </div>
  );
}

export default Login;
