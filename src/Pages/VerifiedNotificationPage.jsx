import { Typography } from '@mui/material'
import React from 'react'
import NotificationHeader from '../Components/Header/NotificationHeader'

const VerifiedNotificationPage = () => {
  return (
    <>
    <NotificationHeader></NotificationHeader>
    
      <Typography textAlign={'center'} marginTop={10} variant='h4' fontWeight={"bold"}>
         There is no verified Notification yet ...
      </Typography>

    </>
  )
}

export default VerifiedNotificationPage
