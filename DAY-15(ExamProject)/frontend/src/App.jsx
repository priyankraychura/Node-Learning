import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/dashboard' Component={Dashboard}></Route>
        <Route path='/' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
      </Routes>
    </>
  )
}

export default App
