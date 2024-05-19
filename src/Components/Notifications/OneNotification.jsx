import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import PostProfil from '../Post/PostProfil/PostProfil'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { MoreHorizOutlined } from '@mui/icons-material';
import './oneNotificationStyle.css'

const OneNotification = ({FromWho,content}) => {
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
        <Typography variant='body2' gutterBottom>
            <span>Recent post from</span> <strong>Lofi</strong>
        </Typography>
        <Typography className='notification_Content' >
            { ((content.length) >= 100) ? content.substring(0, 140) +'...':
            content
            }
        </Typography>
    </Stack>
    </Stack>

</Stack>
  )
}

export default OneNotification
