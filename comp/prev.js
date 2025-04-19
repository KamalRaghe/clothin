import { useRouter } from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";

function Previous({pic,button}) {
  return (
    <div>
      <div>
        <img style={{width:"20vw"}} src={pic} ></img>
      </div>
    </div>
  );
}

export default Previous;