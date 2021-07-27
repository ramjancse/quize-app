import React, {useState, useContext}  from 'react'
import {Questions} from '../Helpers/QuestionBank'
import {QuizeContext} from '../Helpers/Context'



function EndScreen() {
const {gameState, setgameState, score, setScore}= useContext(QuizeContext)
    
    return (
        <>
              <h1> Quize Finished</h1>
              <h3> Your Score is  {score} / {Questions.length}</h3>
              <button  
              className="btn"
              onClick={ ()=>{
                setgameState("quize");
              }}
              > Restart the Game </button>
               
        </>
    )
}

export default EndScreen
