import { Typography,Box } from '@mui/material'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SlidebarOption = ({option,key}) => {
  let IconComponent;

  // Determine which icon component to use based on the option
  switch (option.icon) {
    case 'NotificationsNoneIcon':
      IconComponent = NotificationsNoneIcon;
      break;
    case 'SearchIcon':
      IconComponent = SearchIcon;
      break;
    case 'HomeIcon':
      IconComponent = HomeIcon;
      break;
    case 'MailOutlineIcon':
        IconComponent = MailOutlineIcon;
        break;
    default:
      // Default to HomeIcon if no valid icon is provided
      IconComponent = HomeIcon;
  }
  return (
    <Box key={key} spacing={2} display={"flex"} justifyContent={"start"}  alignItems={"center"}>
    <IconComponent/>
    <Typography variant='subtitle2'>
      {option.name}
    </Typography>
    </Box>
  )
}

export default SlidebarOption
