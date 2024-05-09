import { Grid } from '@mui/material';
import './App.css';
import Slidebar from './Components/Slidbar/Sidebar';
import Main from './Components/Main/Main';
import Home from './Pages/HomePage';

function App() {
  return (
    <Grid container  className="App">
       <Grid item md={2} sx={{ borderRight: '2px solid #E1E8ED', paddingRight: '10px',}}>
    {/*  slide bar  */}
    <Slidebar>
    </Slidebar>
    </Grid>
        {/*main*/}
    <Grid item md={7} sx={{ flex:1,}} >
        <Home></Home>
    </Grid>
        {/*widgets*/}
      
    </Grid>
  );
}
export default App;
