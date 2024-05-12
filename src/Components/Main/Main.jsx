import React from 'react'
import "./main.css"
import { Route, Routes } from 'react-router-dom'
import NotifiacationPage from '../../Pages/NotifiacationPage'
import HomePage from '../../Pages/HomePage'
import NotFound from '../../Pages/NotFound'
const Main = () => {
  return (
    <>
    <div className='main'> 
    <Routes>
      <Route path='/*' element={<HomePage></HomePage>}></Route>
      <Route path='/notifications/*' element={<NotifiacationPage></NotifiacationPage>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
    </>
  )
}

export default Main
