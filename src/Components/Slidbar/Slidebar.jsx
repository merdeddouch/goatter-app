import React from 'react';
import {Box, Grid, IconButton, Stack} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SlidebarOption_v2 from '../SlidebarOption/SlidebarOption_v2';
function Slidebar(props) {
    const options = [
        {name:"Home",
        icon:"HomeIcon"
        },
        
        {name:"Notofications",
        icon:"NotificationsNoneIcon"
        },
        
        {name:"Explore",
        icon:"SearchIcon"
        },
        
        {name:"Messages",
        icon:"MailOutlineIcon"
        },
        {name:"Lists",
        icon:"ListIcon"
        },
        {name:"Bookmarks",
        icon:"TurnedInNotIcon"
        },
        {name:"Communities",
        icon:"PeopleAltIcon"
        },
        {name:"Premuim",
        icon:"WorkspacePremiumIcon"
        },
        {name:"Profil",
        icon:"PersonOutlineIcon"
        },
        
        {name:"more",
        icon:"MoreHorizIcon"
        }
    ]
    return (
        <Stack spacing={2} justifyContent={"center"} alignItems={"start"}>
            <Box mb={3}>
            <IconButton size='large' color='primary'>
                <TwitterIcon></TwitterIcon>
            </IconButton>
            </Box>
            
            {/*slideBarOptions*/}
            {
                options.map((op,key) => {
                    return <SlidebarOption_v2 option={op} key={key}>
                    </SlidebarOption_v2>
                })
            }
            {/*slideBarOptions*/}
            {/*MainButtonToAddNewGoat_thread*/}
        </Stack>
    );
}

export default Slidebar;