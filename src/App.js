import { Grid } from '@mui/material';
import './App.css';
import Slidebar from './Components/Slidbar/Sidebar';

function App() {
  return (
    <Grid container  className="App">
      <Grid item m={3} md={3}>
    {/*  slide bar  */}
    <Slidebar>
    </Slidebar>
    </Grid>
        {/*main*/}
        {/*widgets*/}
      
    </Grid>
  );
}
export default App;
