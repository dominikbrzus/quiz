import { useHistory} from 'react-router-dom';

const Result = ({score, setScore}) => {


    const history = useHistory()

    const handleClickBack = () => {
        setScore(0)
        const home = {
            pathname: '/'
        }
        history.push(home)
    }

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
                    <p className='result__score'>{score}</p>
                    <p className='result__score-desc'>Twój wynik</p>
                </div>
            </div>
            {commentScore()}
            <button className='result__btn' onClick={handleClickBack}>Spróbuj jeszcze raz</button>
        </div>
    );
}

export default Result