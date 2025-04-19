import React from "react";
import Slider from "react-slick";

function SimpleSlider() {

  return (
    <div>
      <div style={{height:"100vh"}} className="center column">
          <div className="center" >
            <img style={{width:"20vw"}} src="TrackPic1.jpeg" ></img>
            <img style={{width:"40vw",margin:"20px"}} src="TrackPic2.jpeg" ></img>
            <img style={{width:"20vw"}} src="TrackPic3.jpeg" ></img>
          </div>
        <div><button>Prev</button> <button>Next</button></div>
      </div>
    </div>
  );
}

export default SimpleSlider;