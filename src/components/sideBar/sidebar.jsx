import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./sideBar.css"
import { dataContext } from '../../context/usercontext';


function sidebar() {
  const [extend,setExtend]= useState(false)
  const {sent,prevPrompt,newChat} =useContext(dataContext)

  async function loadPrevPrompt(prompt){
    sent(prompt)
  }
  return (
   <div className="sidebar">
       <GiHamburgerMenu  
         id="ham" 
         onClick={()=>{
          setExtend(prev=>!prev)
          console.log(extend);
          
         }} 
         
        />
     
       <div className="newchat" onClick={()=>{
          newChat()
       }}>
       <FaPlus />
       {extend?<p>New Chat</p>:null}
       </div>
       
       {prevPrompt .map((item,index)=>{
          return (
            <div className="recent" onClick={()=>{
              loadPrevPrompt(item)
            }}>
           <FaRegMessage />
            {extend?<p>{item.slice(0,10)+"..."}</p>:null}
            </div>
          );
       })}
       
   </div>
  )
}

export default sidebar