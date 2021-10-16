import React from "react";
import { useState } from "react";
import TrueFalseButtons from "./TrueFalseButtons";

function QuestionsPage({ quizInfo,userAnswers }) {
  const [questionIndex, setQuestionIndex] = useState(0)
  return (
    <div className="row justify-content-center">
      <div className="display-3 p-3 h-25 text-center">
        {quizInfo[questionIndex].category}
      </div>
      <div className="card w-75 mh-100">
      <div className="text-center card-body">
      
      
        {quizInfo[questionIndex].question} 
               <p className="textCenter">{questionIndex + 1} of {quizInfo.length}</p>

        </div>
      </div>
      <div className="row text-center">
      <TrueFalseButtons questionIndex={questionIndex} setQuestionIndex={setQuestionIndex} userAnswers={userAnswers} quizInfo={quizInfo}/>
      </div>
    </div>
  )
}

export default QuestionsPage;
