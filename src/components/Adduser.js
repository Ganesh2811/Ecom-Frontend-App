import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Adduser() {

    let navigate = useNavigate();
    var x1 = useRef();
    var x2 = useRef();
    var x3 = useRef();
    function myfunc(){
        var record = {
            name:x1.current.value,
            age:x2.current.value
        }

        fetch(process.env.REACT_APP_API + '/crudmysql' , {
            body:JSON.stringify(record),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            if(val['status']){
                x3.current.innerText = val['message'];
                navigate("/showuser");
            }
        })
    }

  return (
    <div className='container'>
        <h1>Add user mysql</h1>

        <input ref={x1} type='text' className='form-control' placeholder='Name' /> <br />
        <input ref={x2} type='text' className='form-control' placeholder='Age' /> <br />
        <button onClick={myfunc}>Add</button>

        <p ref={x3}>....</p>
    </div>
  )
}
