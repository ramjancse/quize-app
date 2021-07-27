import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizeContext } from "../Helpers/Context";

function Quize() {
  const [currentQuestions, setcurrentQuestions] = useState(0);
  const { gameState, setgameState, score, setScore } = useContext(QuizeContext);
  const [optionChosen, setoptionChosen] = useState("");
  const nextQuestion = () => {
    if (Questions[currentQuestions].answer === optionChosen) {
      setScore(score + 1);
      console.log(score);
    }
    setcurrentQuestions(currentQuestions + 1);
  };
  const playAgain = () => {
    if (Questions[currentQuestions].answer === optionChosen) {
      setScore(score + 1);
      console.log(score);
    }
    setgameState("endscreen");
  };

  return (
    <>
      <div>
        <div className="question"> {Questions[currentQuestions].prompt} </div>
        <div>
          <button
            className="btn"
            style={{ backgroundColor: "" }}
            onClick={(e) => {
              setoptionChosen("A");
            }}
          >
            {Questions[currentQuestions].optionA}
          </button>
          <button
            className="btn"
            onClick={() => {
              setoptionChosen("B");
            }}
          >
            {Questions[currentQuestions].optionB}
          </button>
          <button
            className="btn"
            onClick={() => {
              setoptionChosen("C");
            }}
          >
            {Questions[currentQuestions].optionC}
          </button>
          <button
            className="btn"
            onClick={() => {
              setoptionChosen("D");
            }}
          >
            {Questions[currentQuestions].optionD}
          </button>
        </div>
        {currentQuestions === Questions.length - 1 ? (
          <button className="btn" onClick={playAgain}>
            Finished
          </button>
        ) : (
          <button className="btn" onClick={nextQuestion}>
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Quize;
