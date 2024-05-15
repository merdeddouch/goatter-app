import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
const ProfileHeader = () => {
  return (
    <Stack direction={"row"} >
        <Box>
            <IconButton component={Link} to={'/'} size='medium' color='primary'>
                <ArrowBackIcon>
                </ArrowBackIcon>
            </IconButton>
        </Box>
        <Box>
        <Typography variant='h4' color={"inherit"}>profil Name</Typography>
        <Typography variant='caption' className='nbrPost'>15 post</Typography>
        </Box>
    </Stack>
  )
}

export default ProfileHeader
