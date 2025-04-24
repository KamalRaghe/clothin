import { useRouter } from "next/router";
import React, { useState } from "react";
import Previous from "@/comp/prev";

function SimpleSlider() {
 const [arr, setArr] = useState(['TrackPic1.jpeg',"TrackPic2.jpeg","TrackPic3.jpeg",'TrackPic4.jpeg',"TrackPic5.jpeg","TrackPic6.jpeg"])
 const router = useRouter() 

  return (
    <div>
      <div style={{height:"100vh",border:'1px solid black'}}>
        {arr.map(pic=>{
          return( 
          <div>
             <img style={{border:"5px solid black",width:'20vw',height:"20vw",margin:"20px",overflow:"hidden"}} src={pic}></img>  
          </div>)
        })} 
      </div>
    </div>
  );
}

export default SimpleSlider;