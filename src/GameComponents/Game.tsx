import Board from "./Board";
import Keyboard from "./Keyboard";
import mapLetterToPresence, {
  NOT_PRESENT,
  NOT_SELECTED,
  PRESENT_WRONG_PLACE,
  PRESENT_RIGHT_PLACE
} from "./Common";

import words5Letters from "../Dictionaries/words_5_letters.json"
import { useEffect, useState } from "react";

const Game = () => {

  const [gameWord, setGameWord] = useState("");
  const [mapLetters, setMapLetters] = useState({})
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
    setMapLetters(mapLetterToPresence);
  }

  function getGameWord()
  {
    const sizeDictionary5Letters = words5Letters["words"].length;
    const indexWord = Math.floor(Math.random() * sizeDictionary5Letters);
    return words5Letters["words"][indexWord];
  }

  function submitWordAttempt()
  {
    let tmpAttempts = attempts
    tmpAttempts.push(wordAttempt)
    setAttempts(tmpAttempts)

    setAttemptNumber(attemptNumber + 1)
    setWordAttempt("")
  }

  return ( 
    <>
      <Board
        attemptNumber={attemptNumber}
        attempts={attempts}
        wordAttempt={wordAttempt}
        setWordAttempt={setWordAttempt}
      />
      <Keyboard submitWordAttempt={submitWordAttempt} wordAttempt={wordAttempt} setWordAttempt={setWordAttempt}/>
    </>
  );
}
 
export default Game;