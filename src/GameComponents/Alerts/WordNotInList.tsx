import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import Grow, { GrowProps } from '@mui/material/Grow';
import { useState, useEffect } from 'react'
import { SnackbarContent } from '@mui/material';

const WordNotInList = ({isOpen, setIsOpen} : {isOpen: boolean, setIsOpen: any}) => {

  const SECONDS = 2 * 1000

  const handleClose = () => {
    setIsOpen(false)
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={SECONDS}
      onClose={handleClose}
      TransitionComponent={Grow}
      >
    <SnackbarContent style={{
        width: "150",
        backgroundColor: 'white',
        justifyContent: 'center',
        color: "black",
        fontSize: "18px",
        fontWeight: "bold"
      }}
      message={<span id="client-snackbar">Parola non in lista</span>}
    />
    </Snackbar>
  );
}
 
export default WordNotInList;