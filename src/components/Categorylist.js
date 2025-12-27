import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendCategoryData } from "../redux/slices/dataTransferSlice";

export default function Categorylist() {

  let dispatch = useDispatch();

    var[cat,setCat] = useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_API + "/category")
        .then(res=>res.json())
        .then(val=>{
            // console.log(val);
            // console.log(val.data);
            setCat(val.data)
        })
    } , []);

    function shareCatData(ev,id){
      ev.preventDefault();
      // alert(id);
      dispatch(sendCategoryData(id))
    }

  return (
    <>
      <h2>Category</h2>
      <div class="panel-group category-products" id="accordian">
        <div class="panel panel-default">
            {
                cat && cat.map(value=>

                    <div class="panel-heading">
                        <h4 class="panel-title">
                        <a href="#" onClick={(ev)=>{ shareCatData(ev,value._id) }}>{value.name}</a>
                        </h4>
                    </div>

                )
            }
          
        </div>
      </div>
    </>
  );
}
