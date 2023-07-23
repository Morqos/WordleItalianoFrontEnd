import Board from "./Board";
import Keyboard from "./Keyboard";
import Win from "./EndGame/Win";
import mapLetterToPresence, {
  NOT_PRESENT,
  NOT_SELECTED,
  PRESENT_WRONG_PLACE,
  PRESENT_RIGHT_PLACE,
  letterToPresence,
  boardColors
} from "./Common";

import { Words5Letters } from "../Dictionaries/WordsList"
import { useEffect, useState } from "react";
import Lose from "./EndGame/Lose";
import WordNotInList from "./Alerts/WordNotInList";

const Game = () => {

  const [gameWord, setGameWord] = useState("");
  const [lettersAttempted, setLettersAttempted] = useState<letterToPresence>({})
  const [boardColorsMatrix, setBoardColorsMatrix] = useState<number[][]>(boardColors)
  const [wordAttempt, setWordAttempt] = useState("")

  const [attempts, setAttempts] = useState<string[]>([])
  const [attemptNumber, setAttemptNumber] = useState(0)
  const [hasPlayerWon, setHasPlayerWon] = useState(false)
  const [hasPlayerLost, setHasPlayerLost] = useState(false)

  const [wordAttemptedNotInList, setWordAttemptedNotInList] = useState(false)

  const [animation0Triggered, setAnimation0Triggered] = useState(false)
  const [animation1Triggered, setAnimation1Triggered] = useState(false)
  const [animation2Triggered, setAnimation2Triggered] = useState(false)
  const [animation3Triggered, setAnimation3Triggered] = useState(false)
  const [animation4Triggered, setAnimation4Triggered] = useState(false)

  useEffect(() => {
    launchGame();
  }, []);

  function launchGame()
  {
    const gameWord = getGameWord();
    setGameWord(gameWord);
    setWordAttempt("")
    setAttemptNumber(0)
    setAttempts([])
    setLettersAttempted(structuredClone(mapLetterToPresence))
    setBoardColorsMatrix(structuredClone(boardColors))
  }

  function setWonLost()
  {
    setHasPlayerLost(false)
    setHasPlayerWon(false)
    launchGame();
  }

  function getGameWord()
  {
    const sizeDictionary5Letters = Words5Letters.length;
    const indexWord = Math.floor(Math.random() * sizeDictionary5Letters);
    return Words5Letters[indexWord].toUpperCase();
  }

  function submitWordAttempt()
  {
    if(wordAttempt.length !== 5){
      return
    }
    
    if(!isAttemptAcceptable()) {
      setWordAttemptedNotInList(true);
      setTimeout(() => {
        setWordAttemptedNotInList(false);
      }, 1500);
      return;
    }

    triggerCellAnimations()

    let tmpAttempts = attempts
    tmpAttempts.push(wordAttempt)
    setAttempts(tmpAttempts)

    fillBoardColors()
    
    setTimeout(() => {
      updateLettersAttempted()
    }, 1500);

    setAttemptNumber(attemptNumber + 1)
    setWordAttempt("")

    if(hasLost()) {
      setTimeout(() => {
        setHasPlayerLost(true)
      }, 1500);
      return;
    }
    
    if(hasWon()){
      setTimeout(() => {
        setHasPlayerWon(true)
      }, 1500);
      return;
    }
  }

  function fillBoardColors()
  {
    const wordToDisplay = attempts[attemptNumber]
    const colorsWordToDisplay = getColorsWord(wordToDisplay);
    const _boardColors = boardColorsMatrix
    setTimeout(() => {
      _boardColors[attemptNumber][0] = colorsWordToDisplay[0]
      setBoardColorsMatrix(_boardColors)
    }, 200);
    setTimeout(() => {
      _boardColors[attemptNumber][1] = colorsWordToDisplay[1]
      setBoardColorsMatrix(_boardColors)
    }, 500);
    setTimeout(() => {
      _boardColors[attemptNumber][2] = colorsWordToDisplay[2]
      setBoardColorsMatrix(_boardColors)
    }, 800);
    setTimeout(() => {
      _boardColors[attemptNumber][3] = colorsWordToDisplay[3]
      setBoardColorsMatrix(_boardColors)
    }, 1100);
    setTimeout(() => {
      _boardColors[attemptNumber][4] = colorsWordToDisplay[4]
      setBoardColorsMatrix(_boardColors)
    }, 1400);
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

  function triggerCellAnimations()
  {
    setAnimation0Triggered(true);
    setTimeout(() => {
      setAnimation1Triggered(true);
    }, 300);
    setTimeout(() => {
      setAnimation2Triggered(true);
    }, 600);
    setTimeout(() => {
      setAnimation3Triggered(true);
    }, 900);
    setTimeout(() => {
      setAnimation4Triggered(true);
    }, 1200);
    setTimeout(() => {
      setAnimation0Triggered(false);
      setAnimation1Triggered(false);
      setAnimation2Triggered(false);
      setAnimation3Triggered(false);
      setAnimation4Triggered(false);
    }, 1800);
  }

  function isAttemptAcceptable(){
    return Words5Letters.includes(wordAttempt.toLocaleLowerCase())
  }

  function hasWon(){
    let hasWon = true
    for(let i = 0; i < wordAttempt.length; i++)
    {
      if(wordAttempt[i] !== gameWord[i]) {
        hasWon = false
        break
      }
    }
    return hasWon
  }

  function hasLost() {
    return attemptNumber >= 5
  }

  function updateLettersAttempted() {
    for(let i = 0; i < wordAttempt.length; i++){
      const letter = wordAttempt[i]
      if(letter === gameWord[i]) {
        lettersAttempted[letter] = PRESENT_RIGHT_PLACE
      }
      else if(gameWord.includes(letter)) {
        if (lettersAttempted[letter] !== PRESENT_RIGHT_PLACE) {
          lettersAttempted[letter] = PRESENT_WRONG_PLACE
        }
      }
      else {
        lettersAttempted[letter] = NOT_PRESENT
      }
    }
    setLettersAttempted(lettersAttempted)
  }

  return ( 
    <>
      <WordNotInList 
        isOpen={wordAttemptedNotInList}
        setIsOpen={setWordAttemptedNotInList}
      />
      <Board
        animation0Triggered={animation0Triggered}
        animation1Triggered={animation1Triggered}
        animation2Triggered={animation2Triggered}
        animation3Triggered={animation3Triggered}
        animation4Triggered={animation4Triggered}

        boardColorsMatrix={boardColorsMatrix}

        gameWord={gameWord}
        attemptNumber={attemptNumber}
        attempts={attempts}
        wordAttempt={wordAttempt}
        setWordAttempt={setWordAttempt}
      />
      <Keyboard
        lettersAttempted={lettersAttempted}
        submitWordAttempt={submitWordAttempt}
        wordAttempt={wordAttempt}
        setWordAttempt={setWordAttempt}/>
      <Win
        hasPlayerWon={hasPlayerWon}
        setWonLost={setWonLost}
      />
      <Lose
        gameWord={gameWord}
        hasPlayerLost={hasPlayerLost}
        setWonLost={setWonLost}
      />
    </>
  );
}
 
export default Game;