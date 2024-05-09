import React from 'react'
import HomeHeader from '../Header/HomeHeader'
import NotificationHeader from '../Header/NotificationHeader'
import "./main.css"
import Post from '../Post/Post'
import ListNotifications from '../Notifications/ListNotifications'

const Main = () => {
  return (
    <>
    <div className='main'> 
    <NotificationHeader></NotificationHeader>
    {/* <Header ></Header> */}
    {/* <Post></Post>
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
    <Post></Post> */}
    <ListNotifications></ListNotifications>
    </div>
    </>
  )
}

export default Main
