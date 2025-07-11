import { createContext, useReducer, useState } from "react";

export const MoviesContext = createContext({
  movies: [],
  series: [],
  handleSearch: () => {},
});

const myMovies = [
  {
    id: 1,
    name: "deadpool",
    src: "deadpool",
    what: "movie",
  },
  {
    id: 2,
    name: "iron-man",
    src: "ironman",
    what: "movie",
  },
  {
    id: 3,
    name: "batman",
    src: "batman",
    what: "movie",
  },
  {
    id: 4,
    name: "hulk",
    src: "hulk",
    what: "movie",
  },
  {
    id: 5,
    name: "wonder woman",
    src: "wonderwoman",
    what: "movie",
  },
  {
    id: 6,
    name: "shang chi",
    src: "shangchi",
    what: "movie",
  },
  {
    id: 7,
    name: "ant-man",
    src: "antman",
    what: "movie",
  },
  {
    id: 8,
    name: "black panther",
    src: "blackpanther",
    what: "movie",
  },
  {
    id: 9,
    name: "fantastic four",
    src: "fantasticfour",
    what: "movie",
  },
  {
    id: 10,
    name: "joker",
    src: "joker",
    what: "movie",
  },
  {
    id: 11,
    name: "aqua man",
    src: "aquaman",
    what: "movie",
  },
  {
    id: 12,
    name: "guardians of...",
    src: "gotg",
    what: "movie",
  },
  {
    id: 13,
    name: "doctor strange",
    src: "doctorstrange",
    what: "movie",
  },
  {
    id: 14,
    name: "black adam",
    src: "blackadam",
    what: "movie",
  },
  {
    id: 15,
    name: "venom",
    src: "venom",
    what: "movie",
  },
  {
    id: 16,
    name: "logan",
    src: "logan",
    what: "movie",
  },
  {
    id: 17,
    name: "captain america",
    src: "captainamerica",
    what: "movie",
  },
  {
    id: 18,
    name: "shazam",
    src: "shazam",
    what: "movie",
  },
  {
    id: 19,
    name: "thor",
    src: "thor",
    what: "movie",
  },
  {
    id: 20,
    name: "spider-man",
    src: "spiderman",
    what: "movie",
  },
  {
    id: 21,
    name: "superman",
    src: "superman",
    what: "movie",
  },
  {
    id: 22,
    name: "eternals",
    src: "eternals",
    what: "movie",
  },
  {
    id: 23,
    name: "ant-man and...",
    src: "antmanandthewasp",
    what: "movie",
  },
];
const mySeries = [
  {
    id: 1,
    name: "moon knight",
    src: "/series/moonknight",
    what: "series",
  },
  {
    id: 2,
    name: "daredevil",
    src: "/series/daredevil",
    what: "series",
  },
  {
    id: 3,
    name: "the penguin",
    src: "/series/thepenguin",
    what: "series",
  },
  {
    id: 4,
    name: "hawkeye",
    src: "/series/hawkeye",
    what: "series",
  },
  {
    id: 5,
    name: "peacemaker",
    src: "/series/peacemaker",
    what: "series",
  },
  {
    id: 6,
    name: "loki",
    src: "/series/loki",
    what: "series",
  },
  {
    id: 7,
    name: "she hulk",
    src: "/series/shehulk",
    what: "series",
  },
  {
    id: 8,
    name: "pennyworth",
    src: "/series/pennyworth",
    what: "series",
  },
  {
    id: 9,
    name: "ms. marvel",
    src: "/series/msmarvel",
    what: "series",
  },
  {
    id: 10,
    name: "iron fist",
    src: "/series/ironfist",
    what: "series",
  },
  {
    id: 11,
    name: "doompatrol",
    src: "/series/doompatrol",
    what: "series",
  },
  {
    id: 12,
    name: "ironheart",
    src: "/series/ironheart",
    what: "series",
  },
  {
    id: 13,
    name: "stargirl",
    src: "/series/stargirl",
    what: "series",
  },
  {
    id: 14,
    name: "luke cage",
    src: "/series/lukecage",
    what: "series",
  },
  {
    id: 15,
    name: "defenders",
    src: "/series/defenders",
    what: "series",
  },
  {
    id: 16,
    name: "punisher",
    src: "/series/punisher",
    what: "series",
  },
  {
    id: 17,
    name: "secret invasion",
    src: "/series/secretinvasion",
    what: "series",
  },
];



const myFunc = (currentState, action) => {
  switch (action.type) {
    case "SEARCH":
      const name = action.payload.name.toLowerCase();
      const allContent = [...myMovies, ...mySeries];
      console.log(name);
      return allContent.filter((element) =>
        element.name.toLowerCase().includes(name)
      );
    default:
      return currentState;
  }
};

const MoviesStore = ({ children }) => {
  const allContent=[...myMovies,...mySeries];
  const [movies, dispatchState] = useReducer(myFunc, allContent);

  const handleSearch = (element) => {
    let myObject = {
      type: "SEARCH",
      payload: {
        name: element,
      },
    };
    dispatchState(myObject);
  };

  return (
    <MoviesContext.Provider value={{ movies, handleSearch }}>
      {children}
    </MoviesContext.Provider>
  );
};
export default MoviesStore;
