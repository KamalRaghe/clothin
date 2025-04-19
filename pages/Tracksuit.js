import { useRouter } from "next/router";
import React, { useState } from "react";
import Previous from "@/comp/prev";

function SimpleSlider() {
 const [arr, setArr] = useState(['TrackPic1.jpeg',"TrackPic2.jpeg","TrackPic3.jpeg",'TrackPic4.jpeg',"TrackPic5.jpeg","TrackPic6.jpeg"])
 const router = useRouter() 

  return (
    <div>
      <div style={{height:"100vh"}} className="center column">
        {arr.map(pic=>{
          return( 
          <div>
              <img style={{width:"40vw"}} src= {pic} ></img>
          </div>)
        })}
      </div>
    </div>
  );
}

export default SimpleSlider;