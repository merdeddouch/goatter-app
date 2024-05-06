import { Grid } from '@mui/material';
import './App.css';
import Slidebar from './Components/Slidbar/Sidebar';
import Main from './Components/Main/Main';

function App() {
  return (
    <Grid container  className="App">
      <Grid item m={3} md={2} sx={{ borderRight: '2px solid #E1E8ED', paddingLeft: '10px', width:"400px" }}>
    {/*  slide bar  */}
    <Slidebar>
    </Slidebar>
    </Grid>
        {/*main*/}
    <Grid item md={6}> 
        <Main></Main>
    </Grid>
        {/*widgets*/}
      
    </Grid>
  );
}
export default App;
