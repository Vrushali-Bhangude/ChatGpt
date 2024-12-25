import React, { createContext, useState } from 'react'
import run from "../gemini"
import { use } from 'react'
export const dataContext = createContext()

function UserContext({children}) {
    const [input ,setInput]=useState("")
    const [showResult, setShowResult]=useState(false)
    const [loading, setLoading]=useState(false)
    const [resultData, setResultData]=useState("")
    const [recentPrompt,setRecentPrompt]=useState("")
    const [prevPrompt,setPrevPrompt]=useState([])

     function newChat(){
        setShowResult(false)
        setLoading(false)
     }

    async function sent(input){
        setResultData("")
        setShowResult(true)
        setRecentPrompt(input)
        setLoading(true)
        setPrevPrompt(prev=>[...prev,input])
 let response=await run(input)
        setResultData(response.split("**") && response.split("*"))
        setLoading(false)
        setInput("")

    }

    const data ={
        input,
        setInput,
        sent,
        loading,
        setLoading,
        showResult,
        setShowResult,
        resultData,
        setResultData,
        recentPrompt,
        prevPrompt,
        setRecentPrompt,
        newChat
    }
  return (
    <>
     <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
    </>
  )
}

export default UserContext