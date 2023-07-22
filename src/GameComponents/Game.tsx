import Board from "./Board";
import Keyboard from "./Keyboard";
import Win from "./EndGame/Win";
import mapLetterToPresence, {
  NOT_PRESENT,
  NOT_SELECTED,
  PRESENT_WRONG_PLACE,
  PRESENT_RIGHT_PLACE,
  letterToPresence
} from "./Common";

import { Words5Letters } from "../Dictionaries/WordsList"
import { useEffect, useState } from "react";
import Lose from "./EndGame/Lose";
import WordNotInList from "./Alerts/WordNotInList";

const Game = () => {

  const [gameWord, setGameWord] = useState("");
  const [lettersAttempted, setLettersAttempted] = useState<letterToPresence>({})
  const [wordAttempt, setWordAttempt] = useState("")

  const [attempts, setAttempts] = useState<string[]>([])
  const [attemptNumber, setAttemptNumber] = useState(0)
  const [hasPlayerWon, setHasPlayerWon] = useState(false)
  const [hasPlayerLost, setHasPlayerLost] = useState(false)

  const [wordAttemptedNotInList, setWordAttemptedNotInList] = useState(false)

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
        
    let tmpAttempts = attempts
    tmpAttempts.push(wordAttempt)
    setAttempts(tmpAttempts)
    
    updateLettersAttempted()
    setAttemptNumber(attemptNumber + 1)
    setWordAttempt("")

    if(hasLost()) {
      setHasPlayerLost(true)
      return;
    }
    
    if(hasWon()){
      setHasPlayerWon(true)
      return;
    }
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