import { useRouter } from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";

function SimpleSlider() {
 const [arr, setArr] = useState(['TrackPic1.jpeg',"TrackPic2.jpeg","TrackPic3.jpeg",'TrackPic4.jpeg',"TrackPic5.jpeg","TrackPic6.jpeg"])
 const router = useRouter() 
 function Next(){
    arr.push(arr.shift()) 
    router.push('/') 
 }
 function Prev(){
  arr.unshift(arr.pop())
 }
  return (
    <div>
      <div style={{height:"100vh"}} className="center column">
          <div className="center" >
            <img style={{width:"20vw"}} src={arr[arr.length-1]} ></img>
            <img style={{width:"40vw",margin:"20px"}} src={arr[0]} ></img>
            <img style={{width:"20vw"}} src={arr[1]} ></img>
          </div>
        <div>
          <button onClick={Prev} >Prev</button> 
          <button onClick={Next} >Next</button>
        </div>
      </div>
    </div>
  );
}

export default SimpleSlider;