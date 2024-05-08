import React from 'react'
import './postStyle.css'
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Stack, Typography,IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PostProfil from './PostProfil/PostProfil'
import GroupButton from '../GroupButton/GroupButton';
const Post = () => {
  return (
<div>
    <Card>
    <CardContent>
    <Stack  direction={'row'}>
        <Box display={"flex"} sx={{
            marginRight:"auto",
        }} gap={2} alignItems={"center"}>
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
        <IconButton color={"primary"} size={"small"}>
            <MoreHorizIcon>

            </MoreHorizIcon>
        </IconButton>
        </Stack>       
    </CardContent>
        <CardContent>
            <Typography variant='h5'>hiii wspfjh ghfhg sdhjgs dhj  jfdsjhgfds jhfdsjhgfs  jhsfdhgd sdjhgfsdgfdsj
            hkfgdshdsgf jhgdsf  hgdsf  gds  fdshg ghfds</Typography>
        </CardContent>
        <div className='cardImg'>
        <CardMedia component="img" 
        image="assets/static/images/lofi.jpg"
        alt="lofi" 
        
        sx={{
            borderRadius:"18px",
            height:"400px",
        }}
        />
        </div>
        <CardActions>
        <GroupButton></GroupButton>
        </CardActions>
    </Card>
</div>
  )
}

export default Post
