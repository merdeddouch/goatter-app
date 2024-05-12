import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AllNotificationPage from './AllNotificationPage'
import VerifiedNotificationPage from './VerifiedNotificationPage'
import MentionsNotificationsPage from './MentionsNotificationsPage'
import NotificationHeader from '../Components/Header/NotificationHeader'

const NotifiacationPage = () => {
  return (
    <>
    <NotificationHeader></NotificationHeader>
    <Routes>
    <Route path='' element={<AllNotificationPage></AllNotificationPage>}></Route>
    <Route path='/all_notification' element={<AllNotificationPage></AllNotificationPage>}></Route>
    <Route path='/verified_notification' element={<VerifiedNotificationPage></VerifiedNotificationPage>}></Route>
    <Route path='/mentions_notification' element={<MentionsNotificationsPage></MentionsNotificationsPage>}></Route> 
    </Routes>
    </>
  )
}

export default NotifiacationPage
