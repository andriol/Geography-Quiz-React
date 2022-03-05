import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./QuestionCard.css";

const QuestionCard = (props) => {
  const [trueVal, setTrueVal] = useState(false);
  const answerList = props.response.answers;

  const checkAnswer = (e) => {
    const clickedValue = e.target.value;
    const valueBoolean = props.response.correct_answer === clickedValue;
    setTrueVal(valueBoolean);
  };
  const handleClick = (e) => {
    if (trueVal === true) {
      return e.currentTarget.classList.add("true");
    } else if (trueVal === false) {
      return e.currentTarget.classList.add("false");
    } else {
      return;
    }
  };

  const answerItem = answerList.map((answer) => {
    return (
      <div key={uuidv4()}>
        <div className="input__radio-text" onClick={handleClick}>
          <input
            type="radio"
            name={`answer${props.index}`}
            value={answer}
            onChange={checkAnswer}
          />

          <label htmlFor="answer" className="input__radio-answer">
            {answer}
          </label>
        </div>
      </div>
    );
  });

  return (
    <div key={uuidv4()} className="input__card">
      <h3>Question {props.index + 1}/30</h3>
      <p>{props.response.question}</p>
      {answerItem}
    </div>
  );
};
export default QuestionCard;
