import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Dashboard.css'

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

  return (
    <div>
      <h1>Dashboard</h1>
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text" />
        <label htmlFor="">Image</label>
        <input type="file" name="" id="" />
        <label htmlFor="">Description</label>
        <input type="text" />
        <label htmlFor="">Price</label>
        <input type="text" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}
