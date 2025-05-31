import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")) {
      navigate('/')
    } else {
      fetchAllData();
    }
  }, [])

  const fetchAllData = async () => {
    await axios.get("http://localhost:1008/getAllData", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res);
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
