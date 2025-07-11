import "./Navbar.css";
import { MdLiveTv, MdLocalMovies } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { useContext, useState } from "react";
import { MoviesContext } from "../store/MoviesContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const allThings = useContext(MoviesContext);
  const handleSearch = allThings.handleSearch;
  const [text,setText]=useState("");
  return (
    <div className="Navbar">
      
      <div className="search-area">
        <input
          type="text"
          className="search-text"
          placeholder="Search for movies,shows..."
          value={text}
          onChange={(event)=>{setText(event.target.value)
          }}
        ></input>
        <button
          type="button"
          className="btn btn-danger search-button"
          onClick={() => {
            handleSearch(text);
          }}
        >
          Search
        </button>
      </div>
      <div className="icon-area">
        <Link to="/movies" className="a1">
          <MdLocalMovies className="movie-icon" />
          <label htmlFor="" className="movie-label">
            movies
          </label>
        </Link>

        <Link to="/series" className="a2">
          <MdLiveTv className="series-icon" />
          <label htmlFor="" className="series-label">
            series
          </label>
        </Link>

        <a href="#" className="a3">
          <CgGames className="game-icon" />
          <label htmlFor="" className="games-label">
            games
          </label>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
