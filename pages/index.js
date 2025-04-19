import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="center">
        <img style={{width:"20vw"}} src="TrackPic1.jpeg" ></img>
       <img style={{width:"20vw"}} src="TrackPic2.jpeg" ></img>
       <img style={{width:"20vw"}} src="TrackPic3.jpeg" ></img>
    </div>
  );
}

export default SimpleSlider;