import "./Navbar.css";
import { MdLiveTv,MdLocalMovies } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { useContext } from "react";
import { MoviesContext } from "../store/MoviesContext";

const Navbar=()=>{
    const allThings= useContext(MoviesContext);
    const handleSearch=allThings.handleSearch;
    return(
            <div className="Navbar">
                <div className="search-area">
                <input type="text" className="search-text" placeholder="Search for movies..."></input>
                <button type="button" className="btn btn-danger search-button" onClick={()=>{
                    let myVar=document.querySelector('.search-text').value
                    handleSearch(myVar)}}>Search</button>
                </div>
                <div className="icon-area">
                    <a href="#" className="a1">
                             <MdLocalMovies className="movie-icon" />
                    <label htmlFor="" className="movie-label">movies</label>
                    </a>

                    <a href="#" className="a2">
                         <MdLiveTv className="series-icon" />
                        <label htmlFor=""  className="series-label">series</label>
                    </a>
                   
                       
                       <a href="#" className="a3">
                                <CgGames className="game-icon" />
                        <label htmlFor=""  className="games-label">games</label>
                       </a>
                        

                </div>
            </div>
    )
}
export default Navbar;