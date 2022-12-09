import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from "react-router-dom"
import Form from './Form'

function Menuitem() {
  const navigate =useNavigate()
  const location = useLocation()
  const {food} = location.state
  const [reviews, setReviews]= useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/reviews`)
    .then(response => response.json())
    .then(reviews => setReviews(reviews))
  },[])

  
  return (
    <div className='flex flex-col px-8 mt-12'>
      <div className='w-1/2 mx-auto '>
      <img src={food.image} className='w-full rounded px-8'/>
      <div className="pl-8 space-y-5">
      <h2 className='pt-4 text-lg font-extrabold'>{food.name}</h2>
      <p>{food.description}</p>
      <p>Kshs {food.price}</p>
      <h1 className="text-lg font-extrabold">Reviews</h1>
      {reviews?.map((review)=>(
        <div className="bg-white shandow-lg py-5"  key={review.id}>
        <p className='text-normal leading-7'>{review.comment}</p>
        </div>
      ))}
      <p>All reviews</p>
      </div>
     
      </div>
      <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12  flex flex-col w-1/2 mx-auto">
       <Form />
      </div>
      <div className="flex items-center justify-between px-8 mb-12">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={()=>{ navigate("/menu")}}>
        Back to Menu
      </button>
      </div>
    </div>
  );
}

export default Menuitem;
