import styleCard from "../cardMovies/CardMovie.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const CardMovie = ({
  movieName,
  directorMovie,
  categorieMovie,
  imageMovie,
  dateMovie,
  durationMovie,
  descriptionMovie,
}) => {
  return (
    <div className={styleCard.container}>
      <img
        className={styleCard.imageMovie}
        src={imageMovie}
        alt="Imagen de la pelicula"
      />
      <div className={styleCard.containerInfo}>
        <h2 className={styleCard.movieName}>{movieName}</h2>
        <h3 className={styleCard.directorCategorie}>
          {directorMovie} | {categorieMovie}
        </h3>
        <h4 className={styleCard.dateDuration}>
          {dateMovie} • {durationMovie}
        </h4>
        <div className={styleCard.containerButtons}>
          <button className={styleCard.buttonMovie}>
            <FontAwesomeIcon
              icon={faCirclePlay}
              className={styleCard.iconsButtons}
            />
          </button>
          <button className={styleCard.buttonMovie}>
            <FontAwesomeIcon icon={faPlus} className={styleCard.iconsButtons} />
          </button>
        </div>
        <p className={styleCard.description}>{descriptionMovie}</p>
      </div>
    </div>
  );
};

export default CardMovie;
