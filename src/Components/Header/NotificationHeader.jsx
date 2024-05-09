
import { Button, ButtonGroup, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';

const NotificationHeader = () => {
    const [activeHomeButton,setActiveHomeButton] = useState("All");
    const handlClickHommeButton = (e) => {
        const currentHomeButtonActive = e.target.id;
       //lah ykhti 3lina console.log() console.log(currentHomeButtonActive)
        setActiveHomeButton(currentHomeButtonActive);
    }
    return (
    <Stack direction={"column"}  sx={{
        borderBottom: '2px solid #E1E8ED',
        borderRight: '2px solid #E1E8ED',
        opacity:"97%",
        backgroundColor:"white",
        position:'sticky',
        top:0,
        zIndex: 1000, 
    }}>
        <Stack direction={"row"}  justifyContent={"space-between"}>
        <Button variant='text' sx={{
            backgroundColor:"white"
        }}>
            <Typography variant='h6'>
                Notifications
            </Typography>
        </Button>
        <IconButton  sx={{
            borderRadius:"0"
        }} color='primary'>
        <SettingsIcon></SettingsIcon>
      </IconButton>
        </Stack>
    <Stack direction={"row"} 
    justifyContent={"center"}>
    <ButtonGroup fullWidth>
    <Button id='All' variant='text' 
    sx={{
        color:"#1DA1F0",
        paddingY:"10px",
        fontWeight:"700",
        ...(activeHomeButton === 'All') &&{
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
    All
    </Button>
      <Button id='Verified' variant='text'
      sx={{
        color:"#1DA1F0",
        paddingY:"10px",
        fontWeight:"700",
        ...(activeHomeButton === 'Verified' ) &&{
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
            Verified 
      </Button>
      <Button id='Mentions' variant='text'
      sx={{
        color:"#1DA1F0",
        paddingY:"10px",
        fontWeight:"700",
        ...(activeHomeButton === 'Mentions' ) &&{
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
            Mentions 
      </Button>
    </ButtonGroup>
    </Stack>
    </Stack>
    )
    }

export default NotificationHeader







