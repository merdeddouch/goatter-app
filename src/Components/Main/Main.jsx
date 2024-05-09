import React from 'react'
import HomeHeader from '../Header/HomeHeader'
import NotificationHeader from '../Header/NotificationHeader'
import "./main.css"
import Post from '../Post/Post'

const Main = () => {
  return (
    <>
    <div className='main'> 
    <NotificationHeader></NotificationHeader>
    {/* <Header ></Header> */}
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    </div>
    </>
  )
}

export default Main
