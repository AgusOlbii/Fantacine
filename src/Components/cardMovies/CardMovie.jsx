import styleCard from "../cardMovies/CardMovie.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const CardMovie = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.key} className={styleCard.container}>
          <img
            className={styleCard.imageMovie}
            src={movie.imageMovie}
            alt="Imagen de la pelicula"
          />
          <div className={styleCard.containerInfo}>
            <h2 className={styleCard.movieName}>{movie.movieName}</h2>
            <h3 className={styleCard.directorCategorie}>
              {movie.directorMovie} | {movie.categorieMovie}
            </h3>
            <h4 className={styleCard.dateDuration}>
              {movie.dateMovie} • {movie.durationMovie}
            </h4>
            <div className={styleCard.containerButtons}>
              <button className={styleCard.buttonMovie}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={styleCard.iconsButtons}
                />
              </button>
              <button className={styleCard.buttonMovie}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={styleCard.iconsButtons}
                />
              </button>
            </div>
            <p className={styleCard.description}>{movie.descriptionMovie}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardMovie;
