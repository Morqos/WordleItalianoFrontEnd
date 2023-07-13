import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';

const Lose = (
  {hasPlayerLost, setWonLost} :
    {hasPlayerLost: boolean, setWonLost: any}
  ) => {

  return (
    <>
     <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={hasPlayerLost}
        onClick={setWonLost}
      >
      </Backdrop>
    </>
  );
}
 
export default Lose;