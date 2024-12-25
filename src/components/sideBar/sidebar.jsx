import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./sideBar.css"


function sidebar() {
  const [extend,setExtend]= useState(false)
  return (
   <div className="sidebar">
       <GiHamburgerMenu  
         id="ham" 
         onClick={()=>{
          setExtend(prev=>!prev)
          console.log(extend);
          
         }} 
         
        />

       <div className="newchat">
       <FaPlus />
       {extend?<p>New Chat</p>:null}
       </div>

       <div className="recent">
       <FaRegMessage />
       {extend?<p>Who Are You</p>:null}
       </div>
   </div>
  )
}

export default sidebar