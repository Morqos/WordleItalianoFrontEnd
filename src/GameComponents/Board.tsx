import React, {useEffect, useState} from "react";

import CheckMobileScreen from '../ViewChecks/CheckMobileScreen';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import {
  NOT_PRESENT,
  PRESENT_WRONG_PLACE,
  PRESENT_RIGHT_PLACE,
  mapPresenceToColor
} from './Common';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',

  padding: theme.spacing(1),

  fontWeight: 500,
  fontSize: 42,

  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  
  color: "white",
}));

const Board = (
    {
      animation0Triggered,
      animation1Triggered,
      animation2Triggered,
      animation3Triggered,
      animation4Triggered,

      gameWord,
      attemptNumber,
      attempts,
      wordAttempt,
      setWordAttempt
    }:
      {
        animation0Triggered: boolean,
        animation1Triggered: boolean,
        animation2Triggered: boolean,
        animation3Triggered: boolean,
        animation4Triggered: boolean,

        gameWord: string,
        attemptNumber: number,
        attempts: string[],
        wordAttempt: string,
        setWordAttempt: any
      }
  ) => {

  const TOP_MARGIN = 5
  const WIDTH_BOARD = 350
  const LENGTH_SIDE_CELL = 47
  const FONT_SIZE = 42
  const SPACING_ROWS = 1
  
  const TOP_MARGIN_MOBILE = 3
  const WIDTH_BOARD_MOBILE = 300
  const LENGTH_SIDE_CELL_MOBILE = 38
  const FONT_SIZE_MOBILE = 35
  const SPACING_ROWS_MOBILE = 0.5

  let isMobileScreen = CheckMobileScreen();

  const [lengthSideCell, setLengthSideCell] = useState(LENGTH_SIDE_CELL)
  const [widthBoard, setWidthBoard] = useState(WIDTH_BOARD)
  const [letterFontSize, setLetterFontSize] = useState(FONT_SIZE)
  const [spacingRows, setSpacingRows] = useState(SPACING_ROWS)
  const [topMargin, setTopMargin] = useState(TOP_MARGIN)


  function getCell(_row: number, _position: number) {

    let animationTriggered = false
    if(_row === attemptNumber - 1)
    {
      switch (_position) {
        case 0:
          animationTriggered = animation0Triggered
          break;
        case 1:
          animationTriggered = animation1Triggered
          break;
        case 2:
          animationTriggered = animation2Triggered
          break;
        case 3:
          animationTriggered = animation3Triggered
          break;
        case 4:
          animationTriggered = animation4Triggered
          break;
        default:
          break;
      }
    }

    let colorBackground = "transparent"
    let wordToDisplay = "     "
    if(_row === attemptNumber){
      wordToDisplay = wordAttempt
    }
    else if(_row < attemptNumber) {
      wordToDisplay = attempts[_row]
      const colorsWordToDisplay = getColorsWord(wordToDisplay);
      switch (colorsWordToDisplay[_position]) {
        case NOT_PRESENT:
          colorBackground = mapPresenceToColor[NOT_PRESENT]
          break;
        case PRESENT_RIGHT_PLACE:
          colorBackground = mapPresenceToColor[PRESENT_RIGHT_PLACE]
          break;
        case PRESENT_WRONG_PLACE:
          colorBackground = mapPresenceToColor[PRESENT_WRONG_PLACE]
          break;
        default:
          break;
      }
    }

    return (
      <Grid item xs={2.4} md={2.4}>
        <Item
          sx={{
            animation: animationTriggered ? "spin 0.5s ease 1" : "",
            "@keyframes spin": {
              "0%": {
                transform: "rotateX(0deg)",
              },
              "50%": {
                transform: "rotateX(90deg)"
              },
              "100%": {
                transform: "rotate(0deg)",
              },
            },
            backgroundColor: colorBackground,
            height: lengthSideCell,
            width: lengthSideCell,
            fontSize: letterFontSize
          }}  
        >
          <div className="card-normal">
            {wordToDisplay[_position]}
          </div>
        </Item>
      </Grid>
    );
  }

  function getColorsWord(wordRow: string): number[]{

    const arrayColorsWord = Array(gameWord.length).fill(NOT_PRESENT)    

    const letterToOccurrences = new Map<string, number>();
    for (let i = 0; i < gameWord.length; i++) {
      const letter = gameWord[i]
      
      letterToOccurrences.set(
        letter,
          letterToOccurrences.has(letter) ?
            letterToOccurrences.get(letter)! + 1 :
            1
      )
    }

    for (let i = 0; i < wordRow.length; i++) {
      const currentLetter = wordRow[i]
      if(currentLetter === gameWord[i]) {
        arrayColorsWord[i] = PRESENT_RIGHT_PLACE
        letterToOccurrences.set(
          currentLetter,
          letterToOccurrences.has(currentLetter) ?
            letterToOccurrences.get(currentLetter)! - 1 :
            1
        )
      }
    }

    for (let i = 0; i < wordRow.length; i++) {
      const currentLetter = wordRow[i]
      if((currentLetter !== gameWord[i]) &&
          gameWord.includes(currentLetter) &&
          letterToOccurrences.has(currentLetter) &&
          letterToOccurrences.get(currentLetter)! > 0) {
        arrayColorsWord[i] = PRESENT_WRONG_PLACE
        letterToOccurrences.set(
          currentLetter,
          letterToOccurrences.get(currentLetter)! - 1)
      }
    }

    return arrayColorsWord
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
    setLengthSideCell(LENGTH_SIDE_CELL_MOBILE)
    setWidthBoard(WIDTH_BOARD_MOBILE)
    setLetterFontSize(FONT_SIZE_MOBILE)
    setSpacingRows(SPACING_ROWS_MOBILE)
    setTopMargin(TOP_MARGIN_MOBILE)
  }
  
  function setDimensionsForDesktop()
  {
    setLengthSideCell(LENGTH_SIDE_CELL)
    setWidthBoard(WIDTH_BOARD)
    setLetterFontSize(FONT_SIZE)
    setSpacingRows(SPACING_ROWS)
    setTopMargin(TOP_MARGIN)
  }


  return (
    <Box sx={{ mt: topMargin, mx: 'auto', width: widthBoard}}>
      <Grid
        container
        spacing={spacingRows}
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