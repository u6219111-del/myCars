import React from 'react'
import Header from '../components/papks/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/papks/Footer'

function Layout() {
  return (
    <div className='app-container'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout