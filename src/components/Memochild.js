import React, { memo } from 'react'

function Memochild({p1}) {

    console.log('Memochild comp called' , Math.random());
    
  return (
    <div>Memochild , {p1}</div>
  )
}


export default memo(Memochild);