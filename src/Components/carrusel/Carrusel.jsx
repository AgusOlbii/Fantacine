import styleCarrusel from "../carrusel/CarruselStyle.module.css";
import Slider from "react-slick";
import CardMovie from "../cardMovies/CardMovie";
const CarouselMovies = ({ categorieMovies }) => {
  const categories = Object.keys(categorieMovies);
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Repite el carrusel de manera infinita
    speed: 500, // Velocidad de la transición
    variableWidth: true, //Perimitimos cambiarle el width al slider con css
    slidesToScroll: 3, // Cantidad de tarjetas que se desplazan al hacer clic en el botón de navegación
    responsive: [
      {
        breakpoint: 1024, // En pantallas menores a 1024px
        settings: {
          slidesToShow: 2, // Mostrar 2 tarjetas
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // En pantallas menores a 600px
        settings: {
          slidesToShow: 1, // Mostrar 1 tarjeta
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styleCarrusel.carruselCategorie}>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>{category}</h2>
          <Slider {...settings}>
            {categorieMovies[category].map((movie, movieIndex) => (
              <div key={movieIndex}>
                <CardMovie movies={[movie]} />{" "}
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default CarouselMovies;
