import { useRouter } from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";

function SimpleSlider({pic}) {
 const router = useRouter() 
 function Prev(){
  arr.unshift(arr.pop())
  router.push('/') 
 }
  return (
    <div>
      <div>
        <img onClick={Prev} style={{width:"20vw"}} src={pic} ></img>
      </div>
    </div>
  );
}

export default SimpleSlider;