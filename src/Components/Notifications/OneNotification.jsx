import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import PostProfil from '../Post/PostProfil/PostProfil'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { MoreHorizOutlined } from '@mui/icons-material';
import './oneNotificationStyle.css'

const OneNotification = () => {
  return (
<Stack direction={"row"} className='oneNotification'>
    <div>
    <LocalFireDepartmentIcon sx={{
        height:"30px",
        width:"30px",
    }}>
    </LocalFireDepartmentIcon>
    </div>
    <Stack direction={"column"} sx={{
        width:"100%",
    }} >
    <Stack direction={"row"} justifyContent={"space-between"}>
        <PostProfil></PostProfil>
        <IconButton size='small' color='primary'>
            <MoreHorizOutlined>
            </MoreHorizOutlined>
        </IconButton>
    </Stack>
    <Stack direction={"column"}>
        <Typography variant='body1' gutterBottom>
            Recent post from <strong>Lofi</strong>
        </Typography>
        <Typography variant='body2' color='sconedry'>
            HCKJDSHFKJDSHKJGDSFJHG SDFKHDSFJHGJ GJHFDS
            HFSDHKHJSFD KJHSDFLKJHDSF LSHDFKJHFDSKJHSDFKJH 
            FDSLLSDHDSKJH JKHSDFKJHDSF FDS JHKSDFHKSDJFH KJSHFDKJHDSF
        </Typography>
    </Stack>
    </Stack>

</Stack>
  )
}

export default OneNotification
