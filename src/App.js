import { Grid } from '@mui/material';
import './App.css';
import Slidebar from './Components/Slidbar/Slidebar';

function App() {
  return (
    <Grid container  className="App">
      <Grid item md={3}>
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
