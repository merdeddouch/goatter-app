import React from 'react'
import './postStyle.css'
import { Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material'
const Post = () => {
  return (
<div>
    <Card>
    <CardContent>
            am a card Content
        </CardContent>
        <CardMedia>
            am a card media
        </CardMedia>
        <CardContent>
            am a card Content
        </CardContent>
        <CardActions>
            am a card actions
        </CardActions>
    </Card>
</div>
  )
}

export default Post
