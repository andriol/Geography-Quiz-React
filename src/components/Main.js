import React, { useEffect, useState } from "react";
import { shuffleArray } from "../utils/utils";
import QuestionCard from "./QuestionCard";
import { v4 as uuidv4 } from "uuid";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const endpoint =
      "https://opentdb.com/api.php?amount=30&category=22&difficulty=medium&type=multiple";
    const response = await (await fetch(endpoint)).json();
    setData(response.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const displayQuestions = data.map((question, index) => {
    const response = {
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    };

    return <QuestionCard key={uuidv4()} response={response} index={index} />;
  });

  return (
    <div className="main__container">
      <h1>Geography Quiz</h1>

      {displayQuestions}
    </div>
  );
};
export default Main;
