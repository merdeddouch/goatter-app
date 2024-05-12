import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPost from '../Components/Post/ListPost'
import NotFound from './NotFound'

const HomePage = () => {
  return (
        <div>
          <Routes>
          <Route path='/'>
            <Route index element={<ListPost></ListPost>}></Route>
            <Route path='for_you' element={<ListPost></ListPost>}></Route>
            <Route path='following' element={<ListPost></ListPost>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Route>
          </Routes>
        </div>
  )
}

export default HomePage
