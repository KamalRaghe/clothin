import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

function Previous({pic,button,next}) {
  return (
    <div>
      <div className="center column" onClick={button} >
        <img style={{width:"20vw"}} src={pic} ></img>
        <div style={{margin:"20px"}} >Click to view</div>
      </div>
    </div>
  );
}

export default Previous;