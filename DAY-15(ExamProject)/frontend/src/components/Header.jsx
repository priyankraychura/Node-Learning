import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  }
  
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={'/dashboard'}>Home</Link></li>
          <li><Link to={'/'}>Login</Link></li>
          <li><Link to={'/register'}>Register</Link></li>
          <button onClick={handleLogout}>Logout</button>

        </ul>
      </nav>
    </div>
  )
}
