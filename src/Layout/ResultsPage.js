import React from 'react';
import { Link } from "react-router-dom"

function ResultsPage({userAnswers, quizInfo, loadQuizInfo}) {
    console.log(userAnswers)
    const resultsMap = quizInfo.map((element,index) => {
        return (
            <div className="card my-5" key={element.question}>
                <div className="card-body ">
                <div className="card-title display-4 text-center">{userAnswers[index]}</div> 
                <div className="card-text"> {element.question}</div>
               </div>
            </div>
        )
    })
    return (
        <div className="text-center justify-content-center">
        <div className="p-5">
            
            <h1 className="display-1 text-center">Results</h1>
            {resultsMap}
            <Link to="/" onClick={loadQuizInfo} className="btn btn-success w-50 p-1 "><p className="display-6">Play Again?</p></Link>
        </div>
        </div>
    );
}

export default ResultsPage;