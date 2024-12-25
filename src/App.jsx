import { useContext } from "react"
import Chatsection from "./components/chatSection/charsection.jsx"
import Seperation from "./components/Sepration/Seperation.jsx"
import Sidebar from "./components/sideBar/sidebar.jsx"
import { dataContext } from "./context/usercontext.jsx"
function App() {
 return (
    <>
      <Sidebar/>
      <Seperation/>
      <Chatsection/>
    </>
  )
}

export default App
