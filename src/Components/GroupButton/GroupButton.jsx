import {ButtonGroup, IconButton, Typography } from '@mui/material'
import React from 'react'
import "./groupBtn.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
const GroupButton = () => {
  return (
    <ButtonGroup fullWidth className='groupBtn'>
        <div className='container_btn'>
        <IconButton variant='text' color='primary'><ModeCommentOutlinedIcon/></IconButton>
        <Typography className='nbrOfinteraction'>20</Typography>
        </div>
        <div className='container_btn'>
        <IconButton variant='text' color='primary'>
            <FavoriteBorderIcon></FavoriteBorderIcon>
        </IconButton>
        <Typography className='nbrOfinteraction'>20</Typography>
        </div>
        <div className='container_btn'>
        <IconButton variant='text' color='primary'>
        <RemoveRedEyeIcon></RemoveRedEyeIcon>
        </IconButton>
        <Typography className='nbrOfinteraction'>20</Typography>
        </div>
        <div className='container_btn'>
        <IconButton variant='text' color='primary'>
            <ReplyOutlinedIcon></ReplyOutlinedIcon>
        </IconButton>
        <Typography className='nbrOfinteraction' >20</Typography>
        </div>
    </ButtonGroup>
  )
}

export default GroupButton
