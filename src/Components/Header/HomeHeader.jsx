import { Button, ButtonGroup, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
const HomeHeader = () => {
    const [activeHomeButton,setActiveHomeButton] = useState("for_you");
    const handlClickHommeButton = (e) => {
        const currentHomeButtonActive = e.target.id;
       //lah ykhti 3lina console.log() console.log(currentHomeButtonActive)
        setActiveHomeButton(currentHomeButtonActive);
    }
  return (

    <Stack direction={"row"} 
    sx={{
        borderBottom: '2px solid #E1E8ED',
        borderRight: '2px solid #E1E8ED',
        opacity:"90%",
        backgroundColor:"white",
        position:'sticky',
        top:0,
        zIndex: 1000, 
    }}
    justifyContent={"center"}>
    <ButtonGroup fullWidth>
    
    <Button component={Link} to={'/for_you'} id='for_you' variant='text' 
    sx={{
        color:"#1DA1F0",
        paddingY:"10px",
        fontWeight:"700",
        ...(activeHomeButton === 'for_you') &&{
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
                content: '""',
                position: 'absolute',
                borderRadius:"30px",
                left: '50%',
                bottom: 0,
                width: '30%',
                height: '4px',
                backgroundColor: "#1DA1F0",
                transform: 'translateX(-50%)', 
            }
        }
    }}
    onClick={handlClickHommeButton}
>
    For You
</Button>
      <Button component={Link} to={'/following'} id='following' variant='text'
      sx={{
        color:"#1DA1F0",
        paddingY:"10px",
        fontWeight:"700",
        ...(activeHomeButton === 'following' ) &&{
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
                content: '""',
                position: 'absolute',
                borderRadius:"30px",
                left: '50%',
                bottom: 0,
                width: '30%',
                height: '4px',
                backgroundColor: "#1DA1F0",
                transform: 'translateX(-50%)', 
            }
        }
    }}

    onClick={handlClickHommeButton}
      >
            Following 
      </Button>
      <IconButton  sx={{
            borderRadius:"0"
        }} color='primary'>
        <SettingsIcon></SettingsIcon>
      </IconButton>
    </ButtonGroup>
    </Stack>
  )
}

export default HomeHeader



