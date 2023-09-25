import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Header/Nav'

const Root = () => {
  return (
    <>
<Nav />
 <Outlet />
 </>
 )
}

export default Root
