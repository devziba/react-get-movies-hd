import { act, createContext, useReducer, useState } from "react";

export const MoviesContext = createContext({
  movies: [],
  handleSearch:()=>{},
});

const myFunc = (currentState,action) => {

    let myState=currentState;
    if(action.type=="SEARCH")
    {
       const name= action.payload.name;
        const myMovies=currentState.filter((element)=>element.name==name);
        myState=myMovies
    }
    return myState;
  };
  const myMovies=[
    {
      id: 1,
      name: "deadpool",
      src: "deadpool",
    },
    {
      id: 2,
      name: "iron-man",
      src: "ironman",
    },
    {
      id: 3,
      name: "batman",
      src: "batman",
    },
    {
      id: 4,
      name: "hulk",
      src: "hulk",
    },
    {
      id: 5,
      name: "wonder woman",
      src: "wonderwoman",
    },
    {
      id: 6,
      name: "shang chi",
      src: "shangchi",
    },
    {
      id: 7,
      name: "ant-man",
      src: "antman",
    },
    {
      id: 8,
      name: "black panther",
      src: "blackpanther",
    },
    {
      id: 9,
      name: "fantastic four",
      src: "fantasticfour",
    },
    {
      id: 10,
      name: "joker",
      src: "joker",
    },
    {
      id: 11,
      name: "aqua man",
      src: "aquaman",
    },
    {
      id: 12,
      name: "guardians of...",
      src: "gotg",
    },
    {
      id: 13,
      name: "doctor strange",
      src: "doctorstrange",
    },
    {
      id: 14,
      name: "black adam",
      src: "blackadam",
    },
    {
      id: 15,
      name: "venom",
      src: "venom",
    },
    {
      id: 16,
      name: "logan",
      src: "logan",
    },
    {
      id: 17,
      name: "captain america",
      src: "captainamerica",
    },
    {
      id: 18,
      name: "shazam",
      src: "shazam",
    },
    {
      id: 19,
      name: "thor",
      src: "thor",
    },
    {
      id: 20,
      name: "spider-man",
      src: "spiderman",
    },
    {
      id: 21,
      name: "superman",
      src: "superman",
    },
    {
      id: 22,
      name: "eternals",
      src: "eternals",
    },
  ]
const MoviesStore = ({ children }) => {
  const [movies,dispatchState] = useReducer(myFunc,myMovies);
  
  

  const handleSearch = (element) => {
    let myObject={
      type:"SEARCH",
      payload:{
        name:element,
    }
    }
    
    dispatchState(myObject);
  };
  return (
    <MoviesContext.Provider value={{ movies,handleSearch }}>
      {children}
    </MoviesContext.Provider>
  );
};
export default MoviesStore;
