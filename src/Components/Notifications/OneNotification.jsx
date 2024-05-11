import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import PostProfil from '../Post/PostProfil/PostProfil'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { MoreHorizOutlined } from '@mui/icons-material';
import './oneNotificationStyle.css'

const OneNotification = () => {
  return (
<Stack direction={"row"} className='oneNotification'>
    <LocalFireDepartmentIcon className='logoOneoneNotification'>
    </LocalFireDepartmentIcon>
    <Stack direction={"column"} sx={{
        width:"100%", gap:'10px',
    }} >
    <Stack direction={"row"} justifyContent={"space-between"} >
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
        <Typography variant='body2' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, inventore quae corrupti ut repellendus
            doloribus veniam animi iure quaerat corporis perspiciatis alias consequuntur,
            vero officia voluptatibus laborum, perferendis nihil recusandae.
        </Typography>
    </Stack>
    </Stack>

</Stack>
  )
}

export default OneNotification
