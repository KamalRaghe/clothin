import { useRouter } from "next/router";
import React, { useState } from "react";
import Previous from "@/comp/prev";

function SimpleSlider() {
 const [arr, setArr] = useState(['TrackPic1.jpeg',"TrackPic2.jpeg","TrackPic3.jpeg",'TrackPic4.jpeg',"TrackPic5.jpeg","TrackPic6.jpeg"])
 const router = useRouter() 

  return (
    <div>
      <div className="center" style={{height:"100vh",border:'1px solid black'}}>
        {arr.map(pic=>{
          return( 
          <div>
              <img style={{border:"1px solid black",margin:"10px",width:"20vw",flexWrap:"wrap"}} src= {pic} ></img>
          </div>)
        })}
      </div>
    </div>
  );
}

export default SimpleSlider;