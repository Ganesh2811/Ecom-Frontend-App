import React, { useEffect } from 'react'

export default function Receipt() {
    useEffect(()=>{
        localStorage.removeItem('')
    },[])
  return (
    <div>Receipt</div>
  )
}
