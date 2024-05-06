
import { Box, Button } from '@mui/material'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ListIcon from '@mui/icons-material/List';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const SlidebarOption_v2 = ({option,key}) => {
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
    case 'PersonOutlineIcon':
      IconComponent = PersonOutlineIcon;
        break;
    case 'HistoryEduIcon':
      IconComponent = HistoryEduIcon;
    break; 
    case 'WorkspacePremiumIcon':
      IconComponent = WorkspacePremiumIcon;
    break;
    case 'PeopleAltIcon':
      IconComponent = PeopleAltIcon;
    break;   
    case 'TurnedInNotIcon':
      IconComponent = TurnedInNotIcon;
    break;
    case 'ListIcon':
      IconComponent = ListIcon;
    case 'MoreHorizIcon':
        IconComponent = MoreHorizIcon;
    break;      
    default:
      // Default to HomeIcon if no valid icon is provided
      IconComponent = HomeIcon;
  }
  return (
      <Button key={key} size='medium' variant='text' 
      sx={{
        borderRadius:"25px",
        color:"black",
        '&:hover':{
          backgroundColor:"#E8F5FD",
          color:"#1DA1F2"
      }
      }}
      startIcon={<IconComponent size="medium" ></IconComponent>}
      >
        {option.name}
      </Button>
  )
}

export default SlidebarOption_v2
