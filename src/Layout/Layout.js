import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuestionsPage from "./Questions/QuestionsPage";
import SplashPage from "./Home/SplashPage";
import ResultsPage from "./ResultsPage";

function Layout() {
  const [quizInfo, setQuizInfo] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  async function loadQuizInfo() {
    setUserAnswers([]);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      const responseJson = await response.json();
      setQuizInfo(responseJson.results);
    } catch (error) {
      console.log(error);
    }
  }
  const callback = useCallback(loadQuizInfo, []);
  useEffect(callback, [callback]);

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <SplashPage quizInfo={quizInfo}/>
        </Route>
        <Route path="/questions">
          <QuestionsPage quizInfo={quizInfo} userAnswers={userAnswers} />
        </Route>
        <Route path="/results">
          <ResultsPage
            userAnswers={userAnswers}
            quizInfo={quizInfo}
            loadQuizInfo={loadQuizInfo}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default Layout;
