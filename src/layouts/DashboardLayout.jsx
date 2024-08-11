import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='container'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DashboardLayout
