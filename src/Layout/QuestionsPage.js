import React from "react";
import { useEffect,useState } from "react";
import TrueFalseButtons from "./TrueFalseButtons";

function QuestionsPage({ quizInfo,userAnswers }) {
  const [questionIndex, setQuestionIndex] = useState(0)
  console.log(questionIndex)
  return (
    <div>
      <div>
        Category: {quizInfo[questionIndex].category}
      </div>
      <div>
        Question:
      </div>
      <div>
        {quizInfo[questionIndex].question}
      </div>
      <TrueFalseButtons questionIndex={questionIndex} setQuestionIndex={setQuestionIndex} userAnswers={userAnswers} quizInfo={quizInfo}/>
    </div>
  )
}

export default QuestionsPage;
