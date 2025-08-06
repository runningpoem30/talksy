import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter ,  Routes , Route} from "react-router-dom"
import SocketProvider from "./context/SocketProvider"


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <SocketProvider>
        <App />
  </SocketProvider>

  </BrowserRouter>,
)
