import React from 'react'
import useFetch from '../utilities/useFetch'

export default function Comp2() {
    var ans = useFetch("/brand");
    console.log(ans);
    
  return (
    <div className='container'>
        <h1> Csutom Hook Example </h1>

    </div>
  )
}
