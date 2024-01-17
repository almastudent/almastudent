 import React, {  useState } from 'react'
import logo from "../src/logo/bank.png"

const App = () => {
  const[num,setNum] =useState(0)
 
   const inCrement=()=>{
    setNum(num+1)
   }


   const deCrement=()=>{
    setNum(num-1)
   }

  return (
    <div className=' flex items-center justify-center bg-slate-500 h-screen '>
       <div className=' w-80 h-96 bg-slate-300 text-center rounded-2xl'>
       {num === 3? (<img className='mt-[20px] ml-28 h-20 w-20 mix-blend-darken' src={logo} alt="Not Found" />) : null}

          <h2 className=' bg-[#4c9ce2b8] mt-20 h-12 p-2 text-xl border-2 border-dotted border-blue-500'>{num}</h2>
         <div className=' flex justify-around mt-12 '>
         <button onClick={inCrement} className=' bg-black text-white w-24 h-9 rounded-md uppercase hover:scale-125 duration-300'>increase</button>
         <button onClick={deCrement} className=' bg-black text-white w-24 h-9 rounded-md uppercase hover:scale-125 duration-300'>decrease</button>
         </div>
      
       </div>
    </div>
  )
}

export default App

