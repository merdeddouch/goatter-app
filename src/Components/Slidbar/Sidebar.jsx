import React, { useState } from 'react';
import {Box, Button, IconButton, Stack} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SlidebarOption_v2 from '../SidebarOption/SidebarOption_v2';
import '../../helper/options'
import { options } from '../../helper/options';
function Slidebar(props) {

    const [activeButton,setActiveButton] = useState(0);
    const handlClick = (e) => {
        //to check console.log(e.target.id);
        const currentActive = e.target.id
        setActiveButton(currentActive);
    }

    return (
        <Stack spacing={2} justifyContent={"center"} alignItems={"start"}>
            <Box >
            <IconButton id={0} size='large' color='primary' onClick={handlClick}>
                <TwitterIcon></TwitterIcon>
            </IconButton>
            </Box>
            
            {/*slideBarOptions*/}
            {
                options.map((op,index) => {
                    return <SlidebarOption_v2 handlClick={handlClick} activeButton={activeButton} option={op} key={index} id={index}>
                    </SlidebarOption_v2>
                })
            }

            <Button size='large' variant='contained'
                sx={{
                    borderRadius:"25px",
                    width:"11em",
                    backgroundColor:"#1DA1F0"
                }}
            >
                POST
            </Button>
            {/*slideBarOptions*/}
            {/*MainButtonToAddNewGoat_thread*/}
        </Stack>
    );
}

export default Slidebar;