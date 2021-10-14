import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,  Link, Route, Switch } from "react-router-dom"
import QuestionsPage from './QuestionsPage';
import SplashPage from "./SplashPage"
import reactDom from 'react-dom';

function Layout() {
    const [quizInfo, setQuizInfo] = useState([]);
    const userAnswers = [];
    async function loadQuizInfo() {
        try{
            const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
            const responseJson = await response.json();
           setQuizInfo(responseJson.results);
            } catch(error) {
              console.log(error)
            }
    }
        
      useEffect(() => {       
           setQuizInfo([]);
           
        loadQuizInfo();    
      },[])
      console.log(quizInfo)
      let questions = quizInfo.map((result, index) => {
        return <div key={index + 1}>{`${index + 1}. ${result.question}`}</div>;
      });
      let answers = quizInfo.map((result, index) => {
        return result.correct_answer;
      });
    
    return (
        
           <Router>
            <Switch>
                <Route exact={true} path="/">
                <SplashPage/>
                </Route>
                <Route path="/questions">
                <QuestionsPage quizInfo={quizInfo} userAnswers={userAnswers}/>
                </Route>
           
           </Switch>
          </Router>
       
    );
}

export default Layout;