import * as React from 'react';
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
    {gameWord, attemptNumber, attempts, wordAttempt, setWordAttempt}:
      {
        gameWord: string,
        attemptNumber: number,
        attempts: string[],
        wordAttempt: string,
        setWordAttempt: any
      }
  ) => {

  function getCell(_row: number, _position: number) {

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
            backgroundColor: colorBackground
          }}  
        >
          {wordToDisplay[_position]}
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