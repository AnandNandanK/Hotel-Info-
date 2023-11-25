
import { useState } from 'react';
// import './App.css';

function Counter() {


 const [count,setCount]=useState(0);

 function de() {

  setCount(count-1);
  
 }
 function ac() {

  setCount(count+1);
  
 }

 function re(){
  setCount('0');
 }



  return (
    <div className="w-[100vw] h-[100vh] bg-slate-800 flex justify-center items-center flex-col"> 
      <h1 className='text-sky-400 font-bold'>Increment and Decrement</h1>

      <div className='flex bg-white  gap-7 mt-3 justify-center'>
        <button className='font-bold text-7xl pb-3 pl-3' onClick={de}>-</button>
          <p className='font-bold text-7xl pb-3'>|  {count}  |</p>
        <button className='font-bold text-7xl pr-3' onClick={ac}> +</button>
      </div>

      <button className='bg-sky-500/100 pt-3 pb-3 pr-5 pl-5 rounded-md mt-3' onClick={re}>Reset</button>
    </div>
  );
}

export default Counter;
