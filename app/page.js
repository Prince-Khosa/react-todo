"use client"//we have to tell react that we are client side..
import React, { useState } from 'react'

function page() {
  //we use two way binding so react understand the value of input box..
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [main, setmain] = useState([])
  const submit = (e)=>{
    e.preventDefault(); //page reload hone se rokta h..
    setmain([...main,{title ,desc}]);
    console.log(title + desc);
    settitle("");
    setdesc("");
    console.log(main)
  }

  const dlt = (i) => {
    let copy = [...main];
    copy.splice(i,1);
    setmain(copy);
  }

  let task = <h2> No task added yet </h2>;
  if(main.length>0){
  task = main.map((t,i)=>{
    return <li className='flex justify-between ' key={i}><div className='flex justify-between w-2/3 '>
      <h2>{t.title}</h2>
      <p>{t.desc}</p>
      <button onClick={() => {dlt(i)}} className='border-1 px-2 mb-8 border-gray-950 rounded  bg-red-600 text-white '>delete</button>
    </div></li>
  })} 
  return (
    <>
      <h1 className='bg-black text-white text-center font-bold text-3xl py-3'>Prince To Do List</h1>
      <form onSubmit={submit} className=''>
        <input type='text' className='text-2xl border-gray-800 border-2 m-4 px-1 font-bold ' placeholder='Enter Task' value={title} onChange={(e)=>{
          //e is the value in input..
          settitle(e.target.value)
        }}></input>
        <input type='text' className='text-2xl border-gray-800 border-2 m-4 px-1' placeholder='Enter Description' value={desc} onChange={(e)=>{
          setdesc(e.target.value)
        }}></input>
        <button className='border-none m-4 p-2 text-center text-white bg-lime-600 rounded '>Add Task</button>
      </form>
      <hr/><br/>
      <div className='p-4 bg-slate-200 '>
        <ul>
          {task}
        </ul>
      </div>
    </>
  )
}

export default page
