import { useRouter } from "next/router";
import React, { useState } from "react";
import Previous from "@/comp/prev";

function SimpleSlider() {
 const [arr, setArr] = useState(['TrackPic1.jpeg',"TrackPic2.jpeg","TrackPic3.jpeg",'TrackPic4.jpeg',"TrackPic5.jpeg","TrackPic6.jpeg"])
 const router = useRouter() 
 function Next(){
    arr.push(arr.shift()) 
    router.push('/') 
 }
 function Prev(){
  arr.unshift(arr.pop())
  router.push('/') 
 }
  return (
    <div>
      <div style={{height:"100vh"}} className="center column">
          <div className="center" >
            <Previous button={Prev} pic={arr[arr.length-1]} />
            <img style={{width:"40vw",margin:"20px"}} src={arr[0]} ></img>
            <Previous button={Next} next={true} pic={arr[1]}/>
          </div>
        <div> 
          <button>See all</button>
        </div>
      </div>
    </div>
  );
}

export default SimpleSlider;