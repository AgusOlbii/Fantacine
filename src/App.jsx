import NavBar from "./Components/NavBar/NavBar";
// import Carrusel from "./Components/carrusel/carrusel";
import CardMovie from "./Components/cardMovies/CardMovie";
const App = () => {
  const movieName = "Top Gun: Maverick";
  const directorMovie = "Joseph Kosinski";
  const categorieMovie = "Acción/Aventura";
  const imageMovie = "../../Images/topGunMaverick.webp";
  const dateMovie = "2022";
  const durationMovie = "131";
  const descriptionMovie =
    "36 años después de la primera entrega, el capitán Pete 'Maverick' Mitchell está sirviendo como piloto de pruebas de la Marina de los Estados Unidos, para probar nuevos diseños y conceptos de aviones de combate con empresas privadas, y ha esquivado el ascenso para seguir volando después de 33 años de servicio.";
  return (
    <div className="div-container">
      <NavBar />
      {/* <Carrusel images={images} /> */}
      <CardMovie
        movieName={movieName}
        directorMovie={directorMovie}
        categorieMovie={categorieMovie}
        imageMovie={imageMovie}
        dateMovie={dateMovie}
        durationMovie={durationMovie}
        descriptionMovie={descriptionMovie}
      />
    </div>
  );
};

export default App;
