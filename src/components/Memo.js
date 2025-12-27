import React, { useState } from 'react'
import Memochild from './Memochild'

export default function Memo() {

    var[count,setCount] = useState(0);
    var[count1,setCount1] = useState(1000);
  return (
    <div className='container'>
        <h1> Memo Example</h1>
        <hr />

        <button onClick={()=>{ setCount(count+20) }}>Enter</button>
        <p>{count}</p>
        <button onClick={()=>{ setCount1(count+20) }}>Enter</button>
        <p>{count1}</p>
        
        <Memochild p1={count} />
    </div>
  )
}
