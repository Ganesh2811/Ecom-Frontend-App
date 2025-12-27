import React, { useEffect, useState } from 'react';

function useFetch(path){

    var[data,setData] = useState([]);

    useEffect(()=>{

        fetch(process.env.REACT_APP_API + path)
        .then(res=>res.json())
        .then(val=>{
            // console.log(val);
            // console.log(val.data);
            setData(val.data)
        })

    },[])

    return data;
}

export default useFetch;