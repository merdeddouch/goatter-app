import React from 'react'
import HomeHeader from '../Header/HomeHeader'
import NotificationHeader from '../Header/NotificationHeader'
import "./main.css"
import Post from '../Post/Post'
import ListNotifications from '../Notifications/ListNotifications'
import AllNotificationPage from '../../Pages/AllNotificationPage'
import VerifiedNotificationPage from '../../Pages/VerifiedNotificationPage'
const Main = () => {
  return (
    <>
    <div className='main'> 
    {/* <HomeHeader ></HomeHeader>
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
    <Post></Post> */}
{/* <AllNotificationPage></AllNotificationPage> */}
<VerifiedNotificationPage></VerifiedNotificationPage>
    </div>
    </>
  )
}

export default Main
