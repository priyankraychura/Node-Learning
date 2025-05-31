import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1008/login", formData).then((res) => {
      alert(res.data.msg);

      if(res.data.code) {
        navigate('/register')
      } else {
        localStorage.setItem("token", res.data.token)
        navigate('/dashboard')
      }

      setFormData({
        email: "",
        password: ""
      })
    })
  }
  

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="">Email</label>
        <input type="text" name='email' onChange={handleOnChange} value={formData.email} placeholder='Enter email id'/>
        <label htmlFor="">Password</label>
        <input type="text" name='password' onChange={handleOnChange} value={formData.password} placeholder='Enter password'/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
