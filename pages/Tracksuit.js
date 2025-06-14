import { useRouter } from "next/router";
import React, { useState } from "react";
import Previous from "@/comp/prev";

function SimpleSlider() {
 const [arr, setArr] = useState(['TrackPic1.jpeg',"TrackPic2.jpeg","TrackPic3.jpeg",'TrackPic4.jpeg',"TrackPic5.jpeg","TrackPic6.jpeg"])
 const [FirstHalf, setFirst] = useState([])
 const [LastHalf, setLast] = useState([])
 const router = useRouter() 

 for(let i = 0; i < arr.length/2; i++){
  if(FirstHalf.length < arr.length/2){
  FirstHalf.push(arr[i])}
 }

 
 for(let i = arr.length-1; i > arr.length/2-1; i--){
  if(LastHalf.length < arr.length/2){
    LastHalf.push(arr[i])
  }
}

if(LastHalf[0] === arr[arr.length-1]){
  LastHalf.reverse()
}

 console.log(arr[arr.length-1],LastHalf[0],LastHalf)

  return (
    <div>
      <div className="center column" style={{height:"300vh",border:"5px solid black",flexWrap:"wrap"}} >
        {arr.map(pic=>{
          return( 
          <div key={pic}  className="center">
                  <img style={{width:'50vw',flexWrap:"wrap",
                  height:"50vw",margin:"20px",overflow:"hidden"}} src={pic}></img>
          </div>)
        })} 
      </div>
    </div>
  );
}

export default SimpleSlider;