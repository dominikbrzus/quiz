import { useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
const Result = ({score, setScore}) => {
    const [endScore, setEndScore] = useState(0)
    const history = useHistory()
    // The useEffect invokes callback and set score to 0. This protects against cheating (for example: backspace and add extra points)
    useEffect(() => {
        setEndScore(score)
        setScore(0)
    }, [])
    
    // The function allows back to the start site
    const handleClickBack = () => {
        const home = {
            pathname: '/quiz-react/'
        }
        history.push(home)
    }
    // Comment Score is a comment for score. I created a few variants.
    const commentScore = () => {
        if(score <= 3) {
            return <h3 className='result__comment'>Wynik poniżej przeciętnej. Ćwicz więcej!</h3>
        } else if (score > 3 && score <= 6) {
            return <h3 className='result__comment'>Całkiem nieźle sobie poradziłeś!</h3>
        } else if (score > 6 && score <= 9) {
            return <h3 className='result__comment'>Bardzo dobry wynik! Gratulacje!</h3>
        } else if (score >= 10) {
            return <h3 className='result__comment'>Fenomenalny wynik! Gratulacje!</h3>
        }
    }

    return (  
        <div className='result area'>
            <div className='result__round center'>
                <div className='result__progress center'>
                    <p className='result__score'>{endScore}</p>
                    <p className='result__score-desc'>Twój wynik</p>
                </div>
            </div>
            {commentScore()}
            <button className='result__btn' onClick={handleClickBack}>Spróbuj jeszcze raz</button>
        </div>
    );
}

export default Result