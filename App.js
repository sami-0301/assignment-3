import './App.css';
import React, { useState } from 'react';
function App (){
  const [count, setCount]=useState(0);

  function decrement(){
    setCount(count>0? count-1:0)
  }
  function increment(){
    setCount(count>9? 10:count+1)
  }
 
  return (
    <div className='container'>
      <div className='container 2'>
        <div className='app'>
        <h1>COUNTER</h1>
        <h1>{count}</h1>
        <br></br>
        <button className='btn' onClick={increment}>Increment</button>
        <button className='btn' onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
  }

export default App;
