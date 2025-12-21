import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

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