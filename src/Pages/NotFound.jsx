import { Alert, Button,AlertTitle, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { buttonBackToHomeContext } from '../Context/buttonHomeContext';


const NotFound = () => {
  const {setActiveButton} = useContext(buttonBackToHomeContext);

  const handleClick = () => {
    setActiveButton(0);
  }

  return (
<Stack  alignItems={"center"} gap={3}>
  <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  Opps Page Not Found
  </Alert>
      <Button onClick={handleClick} component={Link} to={"/"} marginTop={3} color='primary' variant='outlined'>
        Go to Home
      </Button>
</Stack>
  );
};

export default NotFound;
