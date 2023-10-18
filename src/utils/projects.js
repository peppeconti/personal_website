import connect from "../assets/connect.svg";
import simon from "../assets/simon.svg";
import liber from "../assets/liber.svg";
import player from "../assets/player.svg";
import movie from "../assets/movie.png";
import cave from "../assets/cave.svg";

export const data = [
  {
    id: 1,
    title: {
      text: "The Cave",
      size: "2.1rem",
    },
    subtitle: {
      text: "a scrollytelling",
      size: "1.05rem",
    },
    font: "'Wallpoet', cursive",
    logo: cave,
    description:
      "Vanilla Javascript Arcade Game (Canvas, OOP). My very first attempt to create a Canvas JS Game. No Libraries.",
    keywords: ["Canvas Game", "Canvas2D", "OOP"],
    url: "cave-arcade-game.netlify.app/",
    repository: "https://github.com/peppeconti/The-Cave-Arcade-Game",
  },
  {
    id: 2,
    title: {
      text: "Spaceship",
      size: "2.1rem",
    },
    subtitle: {
      text: "a scrollytelling",
      size: "1.05rem",
    },
    font: "'Wallpoet', cursive",
    logo: connect,
    description:
      "My first scrollytelling using the Scrolltrigger and the Observer of Gsap to manage the touch events in mobile version.",
    keywords: ["Gsap", "Scrolltrigger", "Scrollytelling"],
    url: "https://space-voyage.netlify.app/",
    repository: "https://github.com/peppeconti/space-voyage",
  },
  {
    id: 3,
    title: {
      text: "Movie Search",
      size: "2.1rem",
    },
    subtitle: {
      text: "a movie database",
      size: "1.05rem",
    },
    font: "'Della Respira', serif",
    logo: movie,
    description:
      "Interface for the OMDb API. Main issues are implementing filtering, pagination, using search parameter.",
    keywords: ["OMDb API", "Restfull API", "Pagination"],
    url: "https://movie-db-4ae0e.web.app",
    repository: "https://github.com/peppeconti/movie-database",
  },
  {
    id: 4,
    title: {
      text: "Simon says",
      size: "3.2rem",
    },
    subtitle: {
      text: "a memory game by Hasbro",
      size: "1.4rem",
    },
    font: "'Odibee Sans', cursive",
    logo: simon,
    description:
      "The memory game from the '80s, with animations and sound effects. How many series are you able to keep in mind?",
    keywords: ["Memory Game", "React"],
    url: "https://simon-conti.netlify.app/",
    repository: "https://github.com/peppeconti/simon",
  },
  {
    id: 5,
    title: {
      text: "Connect 4",
      size: "3.2rem",
    },
    subtitle: {
      text: "a classical game",
      size: "1.4rem",
    },
    font: "'Odibee Sans', cursive",
    logo: connect,
    description:
      "A version of the classical game. It's not still possible to play against the CPU, but I'm working on it. Hope you'll enjoy it!",
    keywords: ["2D Array", "React"],
    url: "https://connect-four-4b5ca.web.app/",
    repository: "https://github.com/peppeconti/connect-4",
  },
  {
    id: 6,
    title: {
      text: "Clm 16126",
      size: "2.2rem",
    },
    subtitle: {
      text: "a digital edition",
      size: "1rem",
    },
    font: "'Eagle Lake', cursive",
    logo: liber,
    description:
      "A digital edition of the manuscript Clm 16126 of the Bavarian State Library. Something completely different...",
    keywords: ["Digital Humanities", "TEI-XML", "Angular"],
    url: "https://divine--comedy-digital.firebaseapp.com/inferno/inferno-1",
    repository: "https://github.com/peppeconti/liber_de_introductione_loquendi",
  },
  {
    id: 7,
    title: {
      text: "CSS Player",
      size: "2.2rem",
    },
    subtitle: {
      text: " a CSS animation",
      size: "1rem",
    },
    font: "'Fredoka One', cursive",
    logo: player,
    description:
      "A custom animated record player using CSS for the graphic, Framer Motion for animations and the Web Audio API",
    keywords: ["CSS only", "Framer Motion", "React"],
    url: "https://record-player-css.netlify.app/",
    repository: "https://github.com/peppeconti/record-player",
  },
];
