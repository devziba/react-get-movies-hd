import { useContext } from "react";
import "./SeriesBody.css";
import Card from "./Card";
import { MoviesContext } from "../store/MoviesContext";
const SeriesBody=()=>
{
    const allThings=useContext(MoviesContext);
    const series=allThings.movies;
    return(
        <div className="SeriesBody">
            {series.filter((element)=>element.what=="series").map((element)=>{
                return<Card className={"seriescard"} id={element.id} name={element.name} source={element.src} key={element.id}></Card>})}
        </div>
    );
}
export default SeriesBody;