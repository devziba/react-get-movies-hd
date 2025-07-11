import { FaPlay } from "react-icons/fa";
const Card = ({ className,id, name, source }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <h5 >{name}</h5>
        <img
          className="movie-image"
          src={`../src/images/${source}.webp`}
          alt="image of a movie"
        />
        <a href="#" className="btn btn-primary">
          <FaPlay />
        </a>
      </div>
    </div>
  );
};
export default Card;
