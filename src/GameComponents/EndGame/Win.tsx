import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import { Theme } from '@mui/material/styles';
import { useState } from 'react';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
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
        onClick={setWonLost}
      >
      <Grow in={hasPlayerWon}>{icon}</Grow>
      </Backdrop>
    </>
  );
}
 
export default Win;