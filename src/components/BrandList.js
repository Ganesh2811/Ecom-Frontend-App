import React, { useEffect, useState } from 'react'

export default function BrandList() {
    var[brand,setBrand] = useState([]);
        useEffect(()=>{
            fetch(process.env.REACT_APP_API + "/brand")
            .then(res=>res.json())
            .then(val=>{
                console.log(val);
                // console.log(val.data);
                setBrand(val.data)
            })
        } , []);

  return (
    <>
    <div class="brands_products">
							<h2>Brands</h2>
							<div class="brands-name">
								<ul class="nav nav-pills nav-stacked">
                                    {
                                        brand && brand.map(value=>
                                            <li><a href="#"> <span class="pull-right"></span>{value.name}</a></li>

                                        )
                                    }
									
								</ul>
							</div>
						</div>
    </>
  )
}
