import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',

  padding: theme.spacing(1),

  fontSize: 36,

  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  
  color: "white",

  height: 45,
  width: 45
}));

const Board = (
    {attemptNumber, attempts, wordAttempt, setWordAttempt}:
      {
        attemptNumber: number,
        attempts: string[],
        wordAttempt: string,
        setWordAttempt: any
      }
  ) => {

  function getCell(_row: number, _position: number) {
    
    let wordToDisplay = "     "
    if(_row === attemptNumber){
      wordToDisplay = wordAttempt
    }
    else if(_row < attemptNumber) {
      wordToDisplay = attempts[_row]
    }

    return (
      <Grid item xs={2.4} md={2.4}>
        <Item>{wordToDisplay[_position]}</Item>
      </Grid>
    );
  }

  return (
    <Box sx={{ mt: 5, mx: 'auto', width: 350}}>
      <Grid
        container
        spacing={1}
      >
        {getCell(0, 0)}
        {getCell(0, 1)}
        {getCell(0, 2)}
        {getCell(0, 3)}
        {getCell(0, 4)}

        {getCell(1, 0)}
        {getCell(1, 1)}
        {getCell(1, 2)}
        {getCell(1, 3)}
        {getCell(1, 4)}

        {getCell(2, 0)}
        {getCell(2, 1)}
        {getCell(2, 2)}
        {getCell(2, 3)}
        {getCell(2, 4)}

        {getCell(3, 0)}
        {getCell(3, 1)}
        {getCell(3, 2)}
        {getCell(3, 3)}
        {getCell(3, 4)}

        {getCell(4, 0)}
        {getCell(4, 1)}
        {getCell(4, 2)}
        {getCell(4, 3)}
        {getCell(4, 4)}

        {getCell(5, 0)}
        {getCell(5, 1)}
        {getCell(5, 2)}
        {getCell(5, 3)}
        {getCell(5, 4)}
      </Grid>
    </Box>
  );
}
 
export default Board;