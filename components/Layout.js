import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()

  const [showFooter, setShowFooter] = useState(true)
  
  useEffect(()=>{
    if (router.pathname.includes('/profile')){
      setShowFooter(false)
    }
  },[router.pathname])

  return (
    <>
      <Navbar/>
      {children}
      {showFooter && <Footer/>}
    </>
  )
}

export default Layout