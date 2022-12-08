import { useForm } from "react-hook-form";
import {useState} from 'react'
export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isLoading, setIsLoading]=useState(false)

  function submitReview(data){
    console.log(data)
    setIsLoading(true)
    fetch('http://localhost:3000/reviews',{
      method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
    } 
  ).then(res=>{console.log(res.json())
  setIsLoading(false)
  })
.catch((error)=>{console.log(error); setIsLoading(false)}) }
  

  return (
    <form onSubmit={handleSubmit(submitReview)}>
        <label className="block font-extrabold text-lg">Post Review</label>
      <input type="textarea" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"  required {...register("comment", {required: "Comment cannot be Empty!"})}/>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full mt-8 rounded" type="submit" disabled={isLoading}>
       {isLoading ? "Loading...": "Post"}
      </button>
      </form>
  )
  }