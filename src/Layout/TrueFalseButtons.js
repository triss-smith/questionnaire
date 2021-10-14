import React from "react";

function TrueFalseButtons({
  questionIndex,
  setQuestionIndex,
  userAnswers,
  quizInfo,
}) {
  const handleClickTrue = () => {
    if (quizInfo[questionIndex + 1]) {
      userAnswers.push("+");
      setQuestionIndex((index) => index + 1);
    }
  };
  const handleClickFalse = () => {
    if (quizInfo[questionIndex + 1]) {
      userAnswers.push("-");
      setQuestionIndex((index) => index + 1);
    }
  };
  return (
    <div>
      <button onClick={handleClickTrue}>True</button>
      <button onClick={handleClickFalse}>False</button>
    </div>
  );
}

export default TrueFalseButtons;
