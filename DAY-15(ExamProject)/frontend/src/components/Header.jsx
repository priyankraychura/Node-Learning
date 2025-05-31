import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to={'/dashboard'}>Home</Link></li>
            <li><Link to={'/'}>Login</Link></li>
            <li><Link to={'/register'}>Register</Link></li>
        </ul>
      </nav>
    </div>
  )
}
