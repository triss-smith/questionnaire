import React from "react";
import { Link } from "react-router-dom";

function ResultsPage({ userAnswers, quizInfo, loadQuizInfo }) {
  const resultsMap = quizInfo.map((element, index) => {
    return (
      <div className="card my-5" key={element.question}>
        <div className="card-body ">
          <div className="card-title display-4 text-center">
            {userAnswers[index]}
          </div>
          <div className="card-text"> {element.question}</div>
        </div>
      </div>
    );
  });
  const correctCount = userAnswers.reduce((acc, element) => {
    if (element === "+") {
      acc += 1;
    }
    return acc;
  }, 0);
  return (
    <div className="text-center justify-content-center">
      <div className="p-5">
        <h1 className="display-1 text-center">Results</h1>
        <h3 className="display-4">You Scored: </h3>
        <h4 className="display-6">
          {correctCount} / {quizInfo.length} Correct
        </h4>
        {resultsMap}
        <Link
          to="/"
          onClick={loadQuizInfo}
          className="btn btn-success w-50 p-1 "
        >
          <p className="display-6">Play Again?</p>
        </Link>
      </div>
    </div>
  );
}

export default ResultsPage;
