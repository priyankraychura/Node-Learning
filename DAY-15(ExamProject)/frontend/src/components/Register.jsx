import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    const [email, setEmail] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1008/register", formData).then((res) => {
            alert(res.data.msg)
            navigate('/')
        })
        setFormData({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form action="" onSubmit={handleOnSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={formData.name} onChange={handleOnChange} placeholder='Enter name' />
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={formData.email} onChange={handleOnChange} placeholder='Enter email id' />
                <label htmlFor="">Password</label>
                <input type="text" name='password' value={formData.password} onChange={handleOnChange} placeholder='Enter password' />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
