import connect from '../assets/connect.svg';
import simon from '../assets/simon.svg';
import liber from '../assets/liber.svg';

export const data = [
    {
        id: 1,
        title: {
            text: 'Connect 4',
            size: '3.2rem'
        },
        subtitle: {
            text: 'a classical game',
            size: '1.4rem'
        },
        font: '\'Odibee Sans\', cursive',
        logo: connect,
        description: 'A version of the classical game. It\'s not still possible to play against the CPU, but I\'m working on it. Hope you\'ll enjoy it!',
        keywords: ['2D Array', 'React'],
        url: 'https://connect-four-4b5ca.web.app/',
        repository: 'https://github.com/peppeconti/connect-4'

    },
    {
        id: 2,
        title: {
            text: 'Simon says',
            size: '3.2rem'
        },
        subtitle: {
            text: 'a memory game by Hasbro',
            size: '1.4rem'
        },
        font: '\'Odibee Sans\', cursive',
        logo: simon,
        description: 'The memory game from the \'80s, with animations and sound effects. How many series are you able to keep in mind?',
        keywords: ['Memory Game', 'React'],
        url: 'https://simon-conti.netlify.app/',
        repository: 'https://github.com/peppeconti/simon'
    },
    {
        id: 3,
        title: {
            text: 'Clm 16126',
            size: '2.2rem'
        },
        subtitle: {
            text: 'a digital edition',
            size: '1rem'
        },
        font: '\'Eagle Lake\', cursive',
        logo: liber,
        description: 'A digital edition of the manuscript Clm 16126 of the Bavarian State Library. Something completely different...',
        keywords: ['Digital Humanities', 'TEI-XML', 'Angular'],
        url: 'https://divine--comedy-digital.firebaseapp.com/inferno/inferno-1',
        repository: 'https://github.com/peppeconti/liber_de_introductione_loquendi'
    },
];