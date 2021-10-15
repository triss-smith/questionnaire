import React from "react";
import { useHistory } from "react-router-dom"

function TrueFalseButtons({
  questionIndex,
  setQuestionIndex,
  userAnswers,
  quizInfo,
}) {
    const history = useHistory();
  const handleClickTrue = () => {
    if (quizInfo[questionIndex + 1]) {
      userAnswers.push("+");
      setQuestionIndex((index) => index + 1);
    } else {
        history.push("/results")
    }
  };
  const handleClick = (answer) => {
    if (quizInfo[questionIndex + 1] && answer === false) {
      userAnswers.push("-");
      setQuestionIndex((index) => index + 1);
    } 
    else if(quizInfo[questionIndex + 1] && answer === true){
        userAnswers.push("+");
      setQuestionIndex((index) => index + 1);
    }
    else {
        history.push("/results")
    }
  };
  return (
    <div>
      <button onClick={() => handleClick(true)} className="btn btn-primary m-3 w-25">True</button>
      <button onClick={() => handleClick(false)} className="btn btn-danger m-3 w-25">False</button>
    </div>
  );
}

export default TrueFalseButtons;
