import React, { useEffect, useState } from 'react'

export default function Showuser() {

    var[mysqldata,setData] = useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_API + '/crudmysql')
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            if(val['status']){
                setData(val['data'])
            }
        })
    },[])

  return (
    <div className='container'>
        <h1> Show user MySql </h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
            {
                mysqldata && mysqldata.map(obj=>

                    <tr>
                        <th>{obj.name}</th>
                        <th>{obj.age}</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>

                )
            }
            </tbody>
        </table>
    </div>
  )
}
