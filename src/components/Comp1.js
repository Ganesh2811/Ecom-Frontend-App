import React from 'react'
import useFetch from '../utilities/useFetch'

export default function Comp1() {
    var ans = useFetch("/category");
    console.log(ans);

  return (
    <div className='container'>
        <h1> Csutom Hook Example </h1>

    </div>
  )
}
