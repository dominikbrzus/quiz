import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React, {useState} from 'react';
import Header from './components/Header'
import Start from './components/Start' 
import Quiz from './components/Quiz'
import Result from './components/Result'
import './App.scss';

function App() {
  const [score, setScore] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
          <Route exact path='/quiz-react/'>
        <Start/>
          </Route>
          <Route path='/quiz-react/quiz'>
            <Quiz score={score} setScore={setScore}/>
            </Route>
        <Route path='/quiz-react/result'>
          <Result score={score} setScore={setScore}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
