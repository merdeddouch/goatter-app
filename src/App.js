import { Grid } from '@mui/material';
import './App.css';
import Slidebar from './Components/Slidbar/Sidebar';
import Main from './Components/Main/Main';

function App() {
  return (
    <Grid container  className="App">
      <Grid item sx={{ borderRight: '2px solid #E1E8ED', paddingRight: '10px', minWidth:"250px" }}>
    {/*  slide bar  */}
    <Slidebar>
    </Slidebar>
    </Grid>
        {/*main*/}
    <Grid item md={5} >
        <Main></Main>
    </Grid>
        {/*widgets*/}
      
    </Grid>
  );
}
export default App;
