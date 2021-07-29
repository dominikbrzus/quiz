import {Link} from "react-router-dom";
import quiz from '../img/quiz.jpg';
import React,{useState} from "react";

const Start = () => {
    return (  
        <div className='start area'>
            <img src={quiz} alt='quiz-img' className='start__img'/>
            <p className='start__desc'>Witaj w quizie, który sprawdzi Twoją wiedzę o ludziach świata biznesu. Jest 10 pytań, a w każdym pytaniu jest tylko jedna właściwa odpowiedź. Czy jesteś gotowy podjąć wyzwanie?</p>
            <Link to='./quiz'><button className='start__btn'>Rozpocznij quiz</button></Link>
        </div>
    );
}
 
export default Start;