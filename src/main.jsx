import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {LoggedUser } from "./assets/Components/LoggedUser";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoggedUser>
    <App />
    </LoggedUser>
  </StrictMode>,
)
