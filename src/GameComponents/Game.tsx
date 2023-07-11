import Board from "./Board";
import Keyboard from "./Keyboard";
import mapLetterToPresence, {
  NOT_PRESENT,
  NOT_SELECTED,
  PRESENT_WRONG_PLACE,
  PRESENT_RIGHT_PLACE,
  letterToPresence
} from "./Common";

import words5Letters from "../Dictionaries/words_5_letters.json"
import { useEffect, useState } from "react";

const Game = () => {

  const [gameWord, setGameWord] = useState("");
  const [lettersAttempted, setLettersAttempted] = useState<letterToPresence>({})
  const [wordAttempt, setWordAttempt] = useState("")

  const [attempts, setAttempts] = useState<string[]>([])
  const [attemptNumber, setAttemptNumber] = useState(0)

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

  function getGameWord()
  {
    const sizeDictionary5Letters = words5Letters["words"].length;
    const indexWord = Math.floor(Math.random() * sizeDictionary5Letters);
    return words5Letters["words"][indexWord].toUpperCase();
  }

  function submitWordAttempt()
  {
    if(wordAttempt.length !== 5){
      return
    }

    if(hasWon()){
      launchGame();
      return;
    }

    let tmpAttempts = attempts
    tmpAttempts.push(wordAttempt)
    setAttempts(tmpAttempts)

    updateLettersAttempted()
    setAttemptNumber(attemptNumber + 1)
    setWordAttempt("")
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

  console.log(gameWord)

  return ( 
    <>
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
    </>
  );
}
 
export default Game;