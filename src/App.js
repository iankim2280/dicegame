import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import "./App.css";
import Logo from "./Logo";

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  function random(n) {
    return Math.ceil(Math.random() * n);
  }

  const handleRollClick = () => {
    const nextMyNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);

    const nextOtherNum = random(6);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <Logo />
        <h1 className="App-title">Dice Game</h1>
        <Button className="App-button" color="blue" onClick={handleRollClick}>
          Throw a dice
        </Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>
          Play again
        </Button>
      </div>
      <div className="App-boards">
        <Board name="Me" color="blue" gameHistory={myHistory} />
        <Board name="Other" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
