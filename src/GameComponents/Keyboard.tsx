import React, {useEffect, useState} from "react";

import CheckMobileScreen from '../ViewChecks/CheckMobileScreen';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import BackspaceIcon from '@mui/icons-material/Backspace';
import { Button } from "@mui/material";
import { letterToPresence, mapPresenceToColor } from "./Common";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#818384",

  '&:hover': {
    cursor: "pointer"
  },

  padding: theme.spacing(1),
  
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  
  color: "white",

  fontWeight: 600,
}));

const Keyboard = (
    {lettersAttempted, submitWordAttempt, wordAttempt, setWordAttempt}:
      {lettersAttempted: letterToPresence, submitWordAttempt: any, wordAttempt: string, setWordAttempt: any}
  ) => {

  let isMobileScreen = CheckMobileScreen();

  const SIZE_ENTER_AND_BACK_KEY = 1.8
  const SIZE_LETTER_KEY_FIRST_ROW = 1.2
  const SIZE_LETTER_KEY_SECOND_ROW = 1.33333333
  const SIZE_LETTER_KEY_THIRD_ROW = 1.2

  const FIRST_ROW_WIDTH = "700px"
  const SECOND_ROW_WIDTH = "630px"
  const THIRD_ROW_WIDTH = "700px"

  const FIRST_ROW_WIDTH_MOBILE = "350px"
  const SECOND_ROW_WIDTH_MOBILE = "315px"
  const THIRD_ROW_WIDTH_MOBILE = "350px"

  const [firstRowWidth, setFirstRowWidth] = useState(FIRST_ROW_WIDTH);
  const [secondRowWidth, setSecondRowWidth] = useState(SECOND_ROW_WIDTH);
  const [thirdRowWidth, setThirdRowWidth] = useState(THIRD_ROW_WIDTH);


  const HEIGHT_LETTER = "65px"
  const WIDTH_LETTER = "45px"
  const WIDTH_ENTER_AND_BACK = "75px"

  const HEIGHT_LETTER_MOBILE = "35px"
  const WIDTH_LETTER_MOBILE = "15px"
  const WIDTH_ENTER_AND_BACK_MOBILE = "30px"

  const LETTER_FONT_SIZE = 28
  const LETTER_FONT_SIZE_MOBILE = 18

  const ENTER_FONT_SIZE = 18
  const ENTER_FONT_SIZE_MOBILE = 10

  const TOP_MARGIN = 5
  const TOP_MARGIN_MOBILE = 3

  const [heightLetter, setHeightLetter] = useState(HEIGHT_LETTER)
  const [widthLetter, setWidthLetter] = useState(WIDTH_LETTER)
  const [widthBackEnter, setWidthBackEnter] = useState(WIDTH_ENTER_AND_BACK)

  const [letterFontSize, setLetterFontSize] = useState(LETTER_FONT_SIZE)
  const [enterFontSize, setEnterFontSize] = useState(ENTER_FONT_SIZE)

  const [topMargin, setTopMargin] = useState(TOP_MARGIN)


  function getKeyFirstRow(_letter: string) {
    return (
      <Grid item xs={SIZE_LETTER_KEY_FIRST_ROW}>
        <Item
          onClick={() => letterClicked(_letter)}
          sx={{
            backgroundColor: mapPresenceToColor[lettersAttempted[_letter]],
            height: heightLetter,
            width: widthLetter,
            fontSize: letterFontSize
          }}>
            {_letter}
        </Item>
      </Grid>
    );
  }

  function getKeySecondRow(_letter: string) {
    return (
      <Grid item xs={SIZE_LETTER_KEY_SECOND_ROW}>
        <Item
          onClick={() => letterClicked(_letter)}
          sx={{
            backgroundColor: mapPresenceToColor[lettersAttempted[_letter]],
            height: heightLetter,
            width: widthLetter,
            fontSize: letterFontSize
          }}>
          {_letter}
        </Item>
      </Grid>
    );
  }

  function getKeyThirdRow(_letter: string) {
    return (
      <Grid item xs={SIZE_LETTER_KEY_THIRD_ROW}>
        <Item
          onClick={() => letterClicked(_letter)}
          sx={{
            backgroundColor: mapPresenceToColor[lettersAttempted[_letter]],
            height: heightLetter,
            width: widthLetter,
            fontSize: letterFontSize
          }}>
            {_letter}
        </Item>
      </Grid>
    );
  }

  function getKeyEnter(_widthEnterBack: string){
    return (
      <Grid item xs={SIZE_ENTER_AND_BACK_KEY}>
        <Item
          onClick={() => submitWordAttempt()}
          sx={{
            height: heightLetter,
            width: _widthEnterBack,
            fontSize: enterFontSize,
            alignItems: 'center'
          }}>
          ENTER
        </Item>
      </Grid>
    );
  }

  function getKeyBackspace(_widthEnterBack: string){
    return (
      <Grid item xs={SIZE_ENTER_AND_BACK_KEY}>
        <Item
          onClick={() => backClicked()}
          sx={{
            height: heightLetter,
            width: _widthEnterBack
          }}>
            <BackspaceIcon/>
        </Item>
      </Grid>
    );
  }

  function letterClicked(_letter: string)
  {
    if(wordAttempt.length >= 5){
      return;
    }
    setWordAttempt(wordAttempt + _letter)
  }

  function backClicked()
  {
    if(wordAttempt.length === 0){
      return
    }
    setWordAttempt(wordAttempt.slice(0, -1))
  }

  useEffect(() => {
    if(isMobileScreen) {
      setDimensionsForMobile()
    }
    else {
      setDimensionsForDesktop()
    }
  });

  function setDimensionsForMobile()
  {
    setFirstRowWidth(FIRST_ROW_WIDTH_MOBILE)
    setSecondRowWidth(SECOND_ROW_WIDTH_MOBILE)
    setThirdRowWidth(THIRD_ROW_WIDTH_MOBILE)

    setHeightLetter(HEIGHT_LETTER_MOBILE)
    setWidthLetter(WIDTH_LETTER_MOBILE)
    setWidthBackEnter(WIDTH_ENTER_AND_BACK_MOBILE)
    setEnterFontSize(ENTER_FONT_SIZE_MOBILE)
    setLetterFontSize(LETTER_FONT_SIZE_MOBILE)

    setTopMargin(TOP_MARGIN_MOBILE)
  }

  function setDimensionsForDesktop()
  {
    setFirstRowWidth(FIRST_ROW_WIDTH)
    setSecondRowWidth(SECOND_ROW_WIDTH)
    setThirdRowWidth(THIRD_ROW_WIDTH)

    setHeightLetter(HEIGHT_LETTER)
    setWidthLetter(WIDTH_LETTER)
    setWidthBackEnter(WIDTH_ENTER_AND_BACK)
    setEnterFontSize(ENTER_FONT_SIZE)
    setLetterFontSize(LETTER_FONT_SIZE)

    setTopMargin(TOP_MARGIN)
  }


  return (
    <>
    <Box sx={{ mt: topMargin, mx: 'auto', width: firstRowWidth}}>
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

    <Box sx={{ mt: 1, mx: 'auto', width: secondRowWidth}}>
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

    <Box sx={{ mt: 1, mx: 'auto', width: thirdRowWidth}}>
      <Grid
        container
        spacing={1}
        justifyContent='center'
      >
        {getKeyEnter(widthBackEnter)}
        {getKeyThirdRow("Z")}
        {getKeyThirdRow("X")}
        {getKeyThirdRow("C")}
        {getKeyThirdRow("V")}
        {getKeyThirdRow("B")}
        {getKeyThirdRow("N")}
        {getKeyThirdRow("M")}
        {getKeyBackspace(widthBackEnter)}
      </Grid>
    </Box>
    </>
  );
}
 
export default Keyboard;