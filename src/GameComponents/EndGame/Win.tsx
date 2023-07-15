import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import { useState } from 'react';
import { DARKER_GREEN, GREEN } from '../Common';

const WinningIcon = (setWonLost: any) => (
  <Paper sx={{ m: 1, backgroundColor: '#1a1a1b', color: 'white'}} elevation={4}>
    <Box sx={{ width: 300, height: 200,  mx: 'auto'}}>

          <Typography
            sx={{
              justifyContent: 'center',
              display: 'flex',
              fontSize: 36,
              mt: 5
            }}
          >
          <Box sx={{ fontWeight: 'bold', m: 1 }}>
            HAI VINTO!
          </Box>
          </Typography>

          <Button
            size="large"
            variant="contained"
            disableRipple
            onClick={setWonLost}
            sx={{
              color: "white",
              backgroundColor: GREEN,
              justifyContent: 'center',
              display: 'flex',
              mt: 4,
              mx: 'auto',
              '&:hover': {
                backgroundColor: DARKER_GREEN,
                borderColor: 'white',
                boxShadow: 'none',
              }
            }}
            >
            Continua a Giocare
          </Button>
    </Box>
  </Paper>
);

const Win = (
  {hasPlayerWon, setWonLost} : 
    {hasPlayerWon: boolean, setWonLost: any}
  ) => {

  return (
    <>
     <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={hasPlayerWon}
      >
      <Grow in={hasPlayerWon}>{WinningIcon(setWonLost)}</Grow>
    </Backdrop>
    </>
  );
}
 
export default Win;