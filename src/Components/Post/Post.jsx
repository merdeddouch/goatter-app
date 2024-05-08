import React from 'react'
import './postStyle.css'
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material'
import PostProfil from './PostProfil/PostProfil'
const Post = () => {
  return (
<div>
    <Card>
    <CardContent>
    <Stack direction={'row'}>
        <Box display={"flex"} gap={2} alignItems={"center"}>
            <PostProfil></PostProfil>
            <div className="post_header_info">
            <Typography className='name' variant='subtitle1'>
                Monkey Dee Loofi
            </Typography>
            <p className='userName' >
                @lofi
            </p>
            </div>
        </Box>
        </Stack>       
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
