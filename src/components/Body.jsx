import { useContext } from "react";
import "./Body.css";
import Card from "./Card";
import { MoviesContext } from "../store/MoviesContext";
const Body=()=>
{
    const allThings=useContext(MoviesContext);
    const movies=allThings.movies;
    return(
        <div className="Body">
            {movies.map((element)=>{
                return<Card id={element.id} name={element.name} source={element.src} key={element.id}></Card>})}
        </div>
    );
}
export default Body;