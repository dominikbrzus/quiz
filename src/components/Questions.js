import people1 from '../img/people1.png'
import people2 from '../img/people2.jpg'
import people3 from '../img/people3.jpg'
import people4 from '../img/people4.jpg'
import people5 from '../img/people5.jpg'
import people6 from '../img/people6.jpg'
import people7 from '../img/people7.jpg'
import people8 from '../img/people8.png'
import people9 from '../img/people9.jpg'
import people10 from '../img/people10.jpg'

const Questions = [
    {id: 1,
    img: `${people1}`, 
    query: 'W wieku 20 lat rzucił studia, aby założyć jedną z największych firm komputerowych Microsoft. Kto to taki?', 
    answers: [
        {answer: 'Bill Gates', isCorrect: true},
        {answer: 'Jeff Bezos', isCorrect: false},
        {answer: 'Richard Branson', isCorrect: false},
        {answer: 'Elon Musk', isCorrect: false},
    ]
    },

    {id: 2,
        img: `${people2}`, 
        query: 'Urodził się w RPA. Jednak w późniejszych latach wyemigrował do Kanady. Jest założycielem firmy samochodowej Tesla.', 
        answers: [
            {answer: 'John Cena', isCorrect: false},
            {answer: 'Nicolas Cage', isCorrect: false},
            {answer: 'Richard Branson', isCorrect: false},
            {answer: 'Elon Musk', isCorrect: true},
        ]
    },

    {id: 3,
        img: `${people3}`, 
        query: 'Już w wieku kilkunastu lat wykazywał niezwykłe umiejętności programistyczne. Jest twórcą portalu Facebook.', 
        answers: [
            {answer: 'Brian Tracy', isCorrect: false},
            {answer: 'Jeff Bezos', isCorrect: false},
            {answer: 'Mark Zuckerberg', isCorrect: true},
            {answer: 'Bill Clinton', isCorrect: false},
        ]
    },

    {id: 4,
        img: `${people4}`, 
        query: 'Założyciel sklepu internetowego Amazon. Obecnie dzierży miano nabogatszego człowieka na świecie.', 
        answers: [
            {answer: 'Andy Murray', isCorrect: false},
            {answer: 'Ron Pearlman', isCorrect: false},
            {answer: 'Larry Page', isCorrect: false},
            {answer: 'Jeff Bezos', isCorrect: true},
        ]
    },

    {id: 5,
        img: `${people5}`, 
        query: 'Amerykański inwestor giełdowy, miliarder i większościowy udziałowiec przedsiębiorstwa ubezpieczeniowego Berkshire Hathaway.', 
        answers: [
            {answer: 'Donald Trump', isCorrect: false},
            {answer: 'Andy Garcia', isCorrect: false},
            {answer: 'Warren Buffet', isCorrect: true},
            {answer: 'Sergey Brin', isCorrect: false},
        ]
    },

    {id: 6,
        img: `${people6}`, 
        query: 'Francuski biznesmen i prezes koncernu LVMH, w którego skład wchodzą takie marki jak TAG Heuer, Hublot czy Tiffany&Co.', 
        answers: [
            {answer: 'Louis Dreyfus', isCorrect: false},
            {answer: 'Bernard Arnault', isCorrect: true},
            {answer: 'Gerard Mulliez', isCorrect: false},
            {answer: 'Bertrand Puech', isCorrect: false},
        ]
    },

    {id: 7,
        img: `${people7}`, 
        query: 'Jest założycielem firmy Oracle, która zajmuje się produkcją oprogramowania dla przedsiębiorstw.', 
        answers: [
            {answer: 'Larry Ellison', isCorrect: true},
            {answer: 'Amancio Ortega', isCorrect: false},
            {answer: 'Jim Walton', isCorrect: false},
            {answer: 'Steve Ballmer', isCorrect: false},
        ]
    },

    {id: 8,
        img: `${people8}`, 
        query: 'Jest nabjogatszą kobietą na świecie według magazynu Forbes. Jest głównym udziałowcem koncernu L’Oréal.', 
        answers: [
            {answer: 'Beate Heister', isCorrect: false},
            {answer: 'Alice Walton', isCorrect: false},
            {answer: 'Jacqueline Mars', isCorrect: false},
            {answer: 'Françoise Bettencourt-Meyers', isCorrect: true},
        ]
    },

    {id: 9,
        img: `${people9}`, 
        query: 'Brytyjski przedsiębiorca i twórca firm należących do koncernu Virgin Group.', 
        answers: [
            {answer: 'Tony Blair', isCorrect: false},
            {answer: 'Richard Branson', isCorrect: true},
            {answer: 'Mark Cuban', isCorrect: false},
            {answer: 'Steve Fossett', isCorrect: false},
        ]
    },

    {id: 10,
        img: `${people10}`, 
        query: 'Chiński filantrop i założyciel portalu Alibaba. Jest pierwszym przedsiębiorcą, który pojawił się na okładce magazynu Forbes.', 
        answers: [
            {answer: 'Jet Li', isCorrect: false},
            {answer: 'Kung Lao', isCorrect: false},
            {answer: 'Jack Ma', isCorrect: true},
            {answer: 'Aron Chan', isCorrect: false},
        ]
    }
]

export default Questions