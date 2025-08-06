import { Routes , Route} from "react-router-dom"
import Landing from "./component/Landing"
import Lobby from "./screen/Lobby"


import './App.css'

function App() {
  
  return (

    <Routes>
      <Route path="/home" element={<Landing></Landing>} />
      <Route path='/lobby' element={<Lobby></Lobby>} />
    </Routes>
  )
}

export default App
