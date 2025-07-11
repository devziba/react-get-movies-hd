import { useContext } from "react";
import "./GamesBody.css";
import Card from "./Card";
import { MoviesContext } from "../store/MoviesContext";
const GamesBody=()=>
{
    const allThings=useContext(MoviesContext);
    const series=allThings.movies;
    return(
        <div className="GamesBody">
            {series.filter((element)=>element.what=="game").map((element)=>{
                return<Card className={"gamescard"} id={element.id} name={element.name} source={element.src} key={element.id}></Card>})}
        </div>
    );
}
export default GamesBody;