import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./QuestionCard.css";

const QuestionCard = (props) => {
  const answerList = props.response.answers;
  const answerItem = answerList.map((answer) => {
    return (
      <div key={uuidv4()}>
        <div className="input__radio-text">
          <input
            type="radio"
            name={`answer${props.index}`}
            value={answer}
            onChange={props.checkAnswer}
          />
          <label htmlFor="answer" className="input__radio-answer">
            {answer}
          </label>
        </div>
      </div>
    );
  });

  const styles = {
    // backgroundColor: props ? "#59E391" : "#ffffff",
  };
  return (
    <div key={uuidv4()} className="input__card">
      <h3>Question {props.index + 1}/30</h3>
      <p>{props.response.question}</p>
      {answerItem}
    </div>
  );
};
export default QuestionCard;
