import { Routes , Route} from "react-router-dom"
import Landing from "./component/Landing"

import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path="/home" element={<Landing></Landing>} />
    </Routes>
  )
}

export default App
