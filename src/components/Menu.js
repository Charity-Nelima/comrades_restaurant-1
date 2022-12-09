import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import Menuitem from './Menuitem'


function Menu(props) {
  const navigate =useNavigate()

  const [menu, setMenu]= useState([])
  const [itemId, setItemId]=useState()

  useEffect(() => {
    fetch('http://localhost:3000/menus')
    .then(response => response.json())
    .then(menu => setMenu(menu))
  },[])
 


  return (
    <div className='flex flex-col'>
      
       <h1 className='ml-12 font-mono font-bold tracking-wider'>MENU ......................</h1>
      <h1 className='ml-12 mt-8 font-serif font-bold text-orange-500'>CHECK OUR TASTY MENU</h1>

      <div className='mx-8 mt-12'>

      <ul className="flex flex-row mx-8">
        {/* {menu.filter((menu)=>(

        ))} */}
        <a className='hover:text-red-600'>
        <li className='mx-4 font-bold'>All</li>
        </a>
        <a className='hover:text-red-600'>
        <li className='mx-4 font-bold'>Breakfast</li>
        </a>
        <a className='hover:text-red-600'>
        <li className='mx-4 font-bold'>Lunch</li>
        </a>
        <a className='hover:text-red-600'>
        <li className='mx-4 font-bold'>Dinner</li>
        </a> 
      </ul>
      </div>
      
    <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12 h-full flex flex-col mx-24">
    <table className="border-collapse border border-slate-400 ...">
  <thead>
    <tr className='pb-12'>
    <th className="border border-slate-300">Number</th>
      <th className="border border-slate-300">Image</th>
      <th className="border border-slate-300">Name</th>
      <th className="border border-slate-300">Description</th>
      <th className="border border-slate-300">Price (Kshs)</th>
      <th className="border border-slate-300">Order</th>
      <th className="border border-slate-300">Comments</th>
    </tr>
  </thead>
  <tbody>
     {menu.map((item) =>(
          <tr onClick={(e)=>setItemId(item.id)} key={item.id}>
          <td className="border border-slate-300">{item.id}</td>
          <td className="border border-slate-300 pr-12"><img src={item.image} alt="Food" className="h-12 w-24"/></td>
          <td className="border border-slate-300 pr-12">{item.name}</td>
          <td className="border border-slate-300 ">{item.description}</td>
          <td className="border border-slate-300">{item.price}</td>
          <td className="border border-slate-300 pr-12">Order</td>
          <td className="border border-slate-300"><a className="text-blue-600" onClick={()=>{navigate("/menuitem",{state: {food: item}})}}>Review</a></td>
        </tr>
     ))}
         
    
  </tbody>
</table>
</div>
<h1 className="ml-12 font-bold tracking-wider">ENJOY!</h1>
</div>
  );}

export default Menu;
