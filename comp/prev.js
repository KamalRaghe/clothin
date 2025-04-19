import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

function Previous({pic,button,next}) {
  return (
    <div>
      <div className="center" onClick={button} >
        {!next && <div style={{rotate:"180deg",fontSize:"100px",color:"grey"}} ><MdNavigateNext /></div>}
        <img style={{width:"20vw"}} src={pic} ></img>
        {next && <div style={{fontSize:"100px",color:"grey"}} ><MdNavigateNext /></div>}
      </div>
    </div>
  );
}

export default Previous;