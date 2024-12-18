import connect from "../assets/connect.svg";
import simon from "../assets/simon.svg";
import liber from "../assets/liber.svg";
import player from "../assets/player.svg";
import movie from "../assets/movie.png";
import cave from "../assets/cave.svg";
import numerology from "../assets/numerology.svg";

export const data = [
  {
    id: 1,
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
    url: "https://liber-loquendi-3cd55.web.app",
    repository: "https://github.com/peppeconti/liber_de_introductione-loquendi_2.0",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    title: {
      text: "Numerology",
      size: "2.2rem",
    },
    subtitle: {
      text: "a RESTful API",
      size: "1.1rem",
    },
    font: "'Josefin Sans', sans-serif",
    logo: numerology,
    description:
      "A simple API built using Node and Express for numerology calculations based on names and birthdays.",
    keywords: ["Node.js", "RESTful API"],
    url: "https://numerology-mpm7.onrender.com/",
    repository: "https://github.com/peppeconti/numerology",
  },
  {
    id: 6,
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
    url: "https://connect-4-conti.netlify.app/",
    repository: "https://github.com/peppeconti/connect-4",
  },
  {
    id: 1,
    title: {
      text: "The Cave",
      size: "2.1rem",
    },
    subtitle: {
      text: "an arcade game",
      size: "1.05rem",
    },
    font: "'Wallpoet', cursive",
    logo: cave,
    description:
      "Vanilla Javascript Arcade Game (Canvas, OOP). My very first attempt to create a Canvas JS Game. No Libraries.",
    keywords: ["Canvas Game", "Canvas2D", "OOP"],
    url: "https://cave-arcade-game.netlify.app/",
    repository: "https://github.com/peppeconti/The-Cave-Arcade-Game",
  },
  {
    id: 8,
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
