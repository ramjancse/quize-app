import "./App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quize from "./Components/Quize";
import EndScreen from "./Components/EndScreen";
import { QuizeContext } from "./Helpers/Context";

function App() {
  const [gameState, setgameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="header">
            {" "}
            <h1>Quize app </h1>{" "}
          </div>
          <div className="quizeArea">
            <div className="quizeContent">
              <QuizeContext.Provider
                value={{ gameState, setgameState, score, setScore }}
              >
                {gameState === "menu" && <MainMenu />}
                {gameState === "quize" && <Quize />}
                {gameState === "endscreen" && <EndScreen />}
              </QuizeContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
