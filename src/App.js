import { Grid } from '@mui/material';
import './App.css';
import Slidebar from './Components/Slidbar/Sidebar';
import Main from './Components/Main/Main';
import Home from './Pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { buttonBackToHomeContext } from './Context/buttonHomeContext';
import { useState } from 'react';

function App() {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <BrowserRouter>
      <Grid container  className="App">
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
    </Grid>
    </BrowserRouter>
  );
}
export default App;
