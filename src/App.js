import { Button, Grid, IconButton } from '@mui/material';
import './App.css';
import Slidebar from './Components/Slidbar/Sidebar';
import Main from './Components/Main/Main';
import Home from './Pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { buttonBackToHomeContext } from './Context/buttonHomeContext';
import { popupContext } from './Context/popup';
import { useState } from 'react';
import TestEmoji from './TestComponents/TestEmoji';
import Popup_media from './Components/Popup_media';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
  const [activeButton, setActiveButton] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupUrl, setPopupUrl] = useState('');
  return (
    // <TestEmoji></TestEmoji>
    <BrowserRouter>
      <Grid container  className="App">
      <popupContext.Provider value={{
        popupOpen:popupOpen,
        setPopupOpen:setPopupOpen,
        popupUrl:popupUrl,
        setPopupUrl:setPopupUrl
      }}>
      <buttonBackToHomeContext.Provider value={{
        activeButton:activeButton,
        setActiveButton:setActiveButton

      }}>
      <Grid item md={2} sx={{ borderRight: '2px solid #E1E8ED', paddingRight: '10px',}}>
    {/*  slide bar  */}
    <Slidebar>
    </Slidebar>
    </Grid>
        {/*main*/}
    <Grid item md={6} sx={{ flex:1,}} >
        <Main></Main>
    </Grid>
    </buttonBackToHomeContext.Provider>
        {/*widgets*/}
        {
          popupOpen && <div  className="popup" >
          <IconButton sx={{
            position:"absolute",
            top:0,
            right:"10px",
            color:"white",
          }}  size='large' onClick={() => setPopupOpen(false)}>
            <ClearIcon sx={{
              fontSize:'40px'
            }}> </ClearIcon>
          </IconButton>
          <Popup_media url={popupUrl} />
          </div>
        }
    </popupContext.Provider>
    </Grid>
    </BrowserRouter>
  );
}
export default App;
