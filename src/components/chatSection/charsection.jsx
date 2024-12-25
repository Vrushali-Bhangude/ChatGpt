import React, { useContext } from 'react'
import "./chatSection.css"
import { MdSend } from "react-icons/md";
import Darkmode from '../Darkmode/Darkmode'
import { dataContext } from '../../context/usercontext';
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"

function chatsection() {
  let {sent,input,setInput,showResult,resultData,recentPrompt,loading} =useContext(dataContext)
  return (
    <div className="chatsection">
      <div className="topsection">
        {!showResult?<div className="heading">
            <span>HELLO</span>
             <span>I'M Your Own Assistant</span>
             <span>What Can I Help You...?</span>
            </div>:<div className='result'>
                      <div className="userbox">
                      <img src={user} width="50px" style={{ borderRadius: "50px" }} />
                      <p>{recentPrompt}</p>
                      </div>
                     <div className="aibox">
                        <img src={ai} width="50px" style={{ borderRadius: "50px" }}/>
                        {loading? <div className='loader'>
                          <hr />
                          <hr />
                          <hr />
                        </div>
                        :<p>{resultData}</p>}
                        
                     </div>
                  </div>}
      </div>
      <div className="bottomsection">
             <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter a Prompt...' value={input} />
             <button id="sendbtn" onClick={()=>{
              sent(input)
             }}><MdSend /></button>
             <Darkmode/>

      </div>
     
    </div>
  )
}

export default chatsection
