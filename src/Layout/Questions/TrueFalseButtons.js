import React from "react";
import { useHistory } from "react-router-dom";

function TrueFalseButtons({
  questionIndex,
  setQuestionIndex,
  userAnswers,
  quizInfo,
}) {
  const history = useHistory();

  const answerCheck = (answer) => {
    if (quizInfo[questionIndex].correct_answer === answer) {
      userAnswers.push("+");
      setQuestionIndex((index) => index + 1);
    } else {
      userAnswers.push("-");
      setQuestionIndex((index) => index + 1);
    }
  };
  const handleClick = (answer) => {
    if (quizInfo[questionIndex + 1]) {
      answerCheck(answer);
    } else {
      answerCheck(answer);
      history.push("/results");
    }
  };
  return (
    <div>
      <button
        onClick={() => handleClick("True")}
        className="btn btn-primary m-3 w-25"
      >
        True
      </button>
      <button
        onClick={() => handleClick("False")}
        className="btn btn-danger m-3 w-25"
      >
        False
      </button>
    </div>
  );
}

export default TrueFalseButtons;
