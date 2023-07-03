import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import BackspaceIcon from '@mui/icons-material/Backspace';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#818384",
  // border: '1px solid',
  // borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  color: "white",

  fontWeight: 600,
  fontSize: 42
}));

const Keyboard = () => {

  const SIZE_ENTER_AND_BACK_KEY = 1.8
  const SIZE_LETTER_KEY_FIRST_ROW = 1.2
  const SIZE_LETTER_KEY_SECOND_ROW = 1.33333333
  const SIZE_LETTER_KEY_THIRD_ROW = 1.2

  const HEIGHT_LETTER = "65px"
  const WIDTH_LETTER = "45px"
  const WIDTH_ENTER_AND_BACK = "75px"


  function getKeyFirstRow(_letter: string) {
    return (
      <Grid item xs={SIZE_LETTER_KEY_FIRST_ROW}>
        <Item sx={{height: HEIGHT_LETTER, width: WIDTH_LETTER}}>{_letter}</Item>
      </Grid>
    );
  }

  function getKeySecondRow(_letter: string) {
    return (
      <Grid item xs={SIZE_LETTER_KEY_SECOND_ROW}>
        <Item sx={{height: HEIGHT_LETTER, width: WIDTH_LETTER}}>{_letter}</Item>
      </Grid>
    );
  }

  function getKeyThirdRow(_letter:string, _widthEnterBack=WIDTH_LETTER, _xs=SIZE_LETTER_KEY_THIRD_ROW) {
    return (
      <Grid item xs={_xs}>
        <Item sx={{height: HEIGHT_LETTER, width: _widthEnterBack}}>
            {_letter}
        </Item>
      </Grid>
    );
  }

  function getKeyEnter(_widthEnterBack=WIDTH_LETTER, _xs=SIZE_LETTER_KEY_THIRD_ROW){
    return (
      <Grid item xs={_xs}>
        <Item
          sx={{
            height: HEIGHT_LETTER,
            width: _widthEnterBack,
            fontSize: 18,
            alignItems: 'center'
          }}>
          ENTER
        </Item>
      </Grid>
    );
  }

  function getKeyBackspace(_widthEnterBack=WIDTH_LETTER, _xs=SIZE_LETTER_KEY_THIRD_ROW){
    return (
      <Grid item xs={_xs}>
        <Item sx={{height: HEIGHT_LETTER, width: _widthEnterBack}}>
            <BackspaceIcon/>
        </Item>
      </Grid>
    );
  }

  return (
    <>
    <Box sx={{ mt: 2, mx: 'auto', width: '700px'}}>
      <Grid
        container
        spacing={1}
      >
        {getKeyFirstRow("Q")}
        {getKeyFirstRow("W")}
        {getKeyFirstRow("E")}
        {getKeyFirstRow("R")}
        {getKeyFirstRow("T")}
        {getKeyFirstRow("Y")}
        {getKeyFirstRow("U")}
        {getKeyFirstRow("I")}
        {getKeyFirstRow("O")}
        {getKeyFirstRow("P")}
      </Grid>
    </Box>

    <Box sx={{ mt: 1, mx: 'auto', width: '630px'}}>
      <Grid
        container
        spacing={1}
      >
        {getKeySecondRow("A")}
        {getKeySecondRow("S")}
        {getKeySecondRow("D")}
        {getKeySecondRow("F")}
        {getKeySecondRow("G")}
        {getKeySecondRow("H")}
        {getKeySecondRow("J")}
        {getKeySecondRow("K")}
        {getKeySecondRow("L")}
      </Grid>
    </Box>

    <Box sx={{ mt: 1, mx: 'auto', width: '700px'}}>
      <Grid
        container
        spacing={1}
        justifyContent='center'
      >
        {getKeyEnter(WIDTH_ENTER_AND_BACK, SIZE_ENTER_AND_BACK_KEY)}
        {getKeyThirdRow("Z")}
        {getKeyThirdRow("X")}
        {getKeyThirdRow("C")}
        {getKeyThirdRow("V")}
        {getKeyThirdRow("B")}
        {getKeyThirdRow("N")}
        {getKeyThirdRow("M")}
        {getKeyBackspace(WIDTH_ENTER_AND_BACK, SIZE_ENTER_AND_BACK_KEY)}
      </Grid>
    </Box>
    </>
  );
}
 
export default Keyboard;