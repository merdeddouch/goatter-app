import React, { useState, useEffect,useContext } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SlidebarOption_v2 from '../SidebarOption/SidebarOption_v2';
import { options } from '../../helper/options';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import './SlidebarStyle.css';
import { buttonBackToHomeContext } from '../../Context/buttonHomeContext';


function Slidebar(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const {activeButton,setActiveButton} = useContext(buttonBackToHomeContext)
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
                    isSlimSidebar={isSlimSidebar}
                />
            ))}

            {(isSlimSidebar) ? <IconButton color='primary'> 
                <HistoryEduOutlinedIcon  sx={{
                    height:"30px",
                    width:"30px",
                    padding:"5px",
                    borderRadius:'50%',
                }} >
                </HistoryEduOutlinedIcon>
            </IconButton> : <Button
                className={"tweetButton"}
                variant='contained'
                sx={{
                    borderRadius: "25px",
                    width: "11rem",
                    backgroundColor: "#1DA1F0"
                }}
            >
                POST
            </Button>}
            
        </div>
    );
}

export default Slidebar;
