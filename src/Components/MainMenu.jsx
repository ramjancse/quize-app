import React, { useContext } from "react";
import { QuizeContext } from "../Helpers/Context";

function MainMenu() {
  const { gameState, setgameState } = useContext(QuizeContext);
  return (
    <>
      <h1> Welcome to Knowledge World </h1>
      <div className="btnCenter">
        <button
          onClick={() => {
            setgameState("quize");
          }}
          className="btn"
        >
          Start the Quize
        </button>
      </div>
    </>
  );
}

export default MainMenu;
