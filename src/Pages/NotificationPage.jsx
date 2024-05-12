import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import NotificationHeader from '../Components/Header/NotificationHeader'
import AllNotificationPage from './AllNotificationPage'
import VerifiedNotificationPage from './VerifiedNotificationPage'
import MentionsNotificationsPage from './MentionsNotificationsPage'
import NotFound from './NotFound'

const NotificationPage = () => {
  return (
        <>
                <NotificationHeader></NotificationHeader>
                <Routes>
                    <Route path='/all_notification' element={<AllNotificationPage></AllNotificationPage>}></Route>
                    <Route path='/verified_notification' element={<VerifiedNotificationPage></VerifiedNotificationPage>}></Route>
                    <Route path='/mentions_notification' element={<MentionsNotificationsPage></MentionsNotificationsPage>}></Route>
                    <Route path='*' element={<NotFound></NotFound>}></Route>
                </Routes>
        </>
  )
}

export default NotificationPage
