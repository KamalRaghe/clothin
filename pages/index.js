import React, { useState } from "react";
import Slider from "react-slick";

function SimpleSlider() {
 const [arr, setArr] = useState(['TrackPic1.jpeg',"TrackPic2.jpeg","TrackPic3.jpeg"]) 
  return (
    <div>
      <div style={{height:"100vh"}} className="center column">
          <div className="center" >
            <img style={{width:"20vw"}} src={arr[0]} ></img>
            <img style={{width:"40vw",margin:"20px"}} src={arr[1]} ></img>
            <img style={{width:"20vw"}} src={arr[2]} ></img>
          </div>
        <div><button>Prev</button> <button>Next</button></div>
      </div>
    </div>
  );
}

export default SimpleSlider;