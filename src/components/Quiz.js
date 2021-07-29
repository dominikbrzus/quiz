import Questions from "./Questions";
import React, {useState} from "react";
import {Link} from 'react-router-dom'


const Quiz = ({score, setScore}) => {
    const [selected, setSelected] = useState()
    const [currentQuiz, setCurrentQuiz] = useState(0)
    const questions = Questions
    // Check answer is it correct and add score
    const checkAnswer = question => {
        if(question.isCorrect) {
            let addScore = score + 1
            setScore(addScore)
        }
        setSelected(question)
    }
    // Add relevant class CSS for correct and wrong answers
    const addClassAnswers = question => {
        if(question.isCorrect) return 'right-answer'
        else if(!question.isCorrect) return 'wrong-answer'
    }
    // The function is responsible for add index quiz and correct display
    const handleNextQuiz = () => {
        const nextQuiz = currentQuiz + 1
        setCurrentQuiz(nextQuiz)
        setSelected(null)
    }

    return (  
        <div className='quiz area'>
            <img src={questions[currentQuiz].img} className='quiz__img' alt={`${questions[currentQuiz].img}`}/>
            <h2 className='quiz__title'>{questions[currentQuiz].query}</h2>
            <div className='quiz__btn-area'>
            {questions[currentQuiz].answers.map(question => {
                return (
                    <button
                    key={Math.floor(Math.random() * (10000))}
                    className={`quiz__btn ${selected && addClassAnswers(question)}`}
                    onClick={() => checkAnswer(question)}>
                    {question.answer}
                    </button>
                    )
                })}
                </div>
                {selected && currentQuiz + 1 < questions.length ? <button className='quiz__btn-next' onClick={handleNextQuiz}>Kolejne pytanie</button> : null}
                {selected && currentQuiz + 1 === questions.length ? <Link to='/quiz-react/result'><button className='quiz__btn-next'>Sprawdź wynik</button></Link> : null}
        </div>
    );
}

export default Quiz;