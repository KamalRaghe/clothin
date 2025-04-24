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
              <div>
                <img style={{border:"5px solid black",width:'50px',height:"50px",margin:"20px"}} src={pic}></img>
              </div>
          </div>)
        })} 
      </div>
    </div>
  );
}

export default SimpleSlider;