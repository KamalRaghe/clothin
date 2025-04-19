import React, { useState } from "react";


function Previous({pic,button}) {
  return (
    <div>
      <div onClick={button} >
        <img style={{width:"20vw"}} src={pic} ></img>
      </div>
    </div>
  );
}

export default Previous;