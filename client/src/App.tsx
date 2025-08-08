import { Routes , Route} from "react-router-dom"
import Landing from "./component/Landing"
import Lobby from "./screen/Lobby"
import Room from "./screen/Room"



import './App.css'

function App() {
  
  return (

    <Routes>
      <Route path="/home" element={<Landing></Landing>} />
      <Route path='/lobby' element={<Lobby></Lobby>} />
      <Route path='/room/:id'  element={<Room/>}/>
    </Routes>
  )
}

export default App
