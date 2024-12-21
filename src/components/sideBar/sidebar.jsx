import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./sideBar.css"

function sidebar() {
  return (
   <div className="sidebar">
       <GiHamburgerMenu  id="ham"/>

       <div className="newchat">
       <FaPlus />
       <p>New Chat</p>
       </div>

       <div className="recent">
       <FaRegMessage />
       <p>Who are you?</p>
       </div>
   </div>
  )
}

export default sidebar