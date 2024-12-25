import React, { useEffect, useState } from 'react'
import { IoSunnySharp } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import "./Darkmode.css"

function Darkmode() {
  const[mode,setMode]=useState("darkmode")
  function toggle(){
    if(mode==="darkmode"){
       setMode("lightmode")
    }else{
    setMode("darkmode")
    }
  }
  useEffect(()=>{
   document.body.className=mode
  },[mode])
  return (
    <button className='darkmodebtn' onClick={()=>{
        toggle()
        console.log(mode);
        
      }}
    > {mode === 'darkmode' ? <IoSunnySharp /> : <FiMoon />}</button>
  )
}

export default Darkmode