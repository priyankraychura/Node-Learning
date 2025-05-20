import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginRegister from './LoginRegister.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginRegister />
  </StrictMode>,
)
