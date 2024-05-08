import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SlidebarOption_v2 from '../SidebarOption/SidebarOption_v2';
import { options } from '../../helper/options';
import './SlidebarStyle.css';

function Slidebar(props) {
    const [activeButton, setActiveButton] = useState(0);
    const [screenWidth, setScreenWidth] = useState();

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlClick = (e) => {
        const currentActive = e.target.id;
        setActiveButton(currentActive);
    };

    const isSlimSidebar = screenWidth < 1300; // Remove quotes around 900px

    return (
        <div className={isSlimSidebar ? "slimSideBar" : "sideBar"}>
            <Box>
                <IconButton id={0} color='primary' onClick={handlClick}>
                    <TwitterIcon />
                </IconButton>
            </Box>

            {/*slideBarOptions*/}
            {options.map((op, index) => (
                <SlidebarOption_v2
                    handlClick={handlClick}
                    activeButton={activeButton}
                    option={op}
                    key={index}
                    id={index}
                />
            ))}

            <Button
                className={"tweetButton"}
                variant='contained'
                sx={{
                    borderRadius: "25px",
                    width: "11rem",
                    backgroundColor: "#1DA1F0"
                }}
            >
                POST
            </Button>
        </div>
    );
}

export default Slidebar;
