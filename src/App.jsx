import NavBar from "./Components/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselMovies from "./Components/carrusel/Carrusel";

const movies = [
  {
    movieKey: "1453",
    movieName: "Top Gun: Maverick",
    directorMovie: "Joseph Kosinski",
    categorieMovie: "Action",
    imageMovie: "../../Images/topGunMaverick.webp",
    dateMovie: "2022",
    durationMovie: "131",
    descriptionMovie:
      "36 años después de la primera entrega, el capitán Pete 'Maverick' Mitchell está sirviendo como piloto de pruebas de la Marina de los Estados Unidos.",
  },
  {
    movieKey: "1454",
    movieName: "Inception",
    directorMovie: "Christopher Nolan",
    categorieMovie: "Sci-Fi",
    imageMovie: "../../Images/inception.webp",
    dateMovie: "2010",
    durationMovie: "148",
    descriptionMovie:
      "Un ladrón que roba secretos de los sueños es ofrecido la oportunidad de borrar su pasado si logra implantar una idea en la mente de un CEO.",
  },
  {
    movieKey: "1455",
    movieName: "Avengers: Endgame",
    directorMovie: "Anthony y Joe Russo",
    categorieMovie: "Action",
    imageMovie: "../../Images/avengersEndgame.webp",
    dateMovie: "2019",
    durationMovie: "181",
    descriptionMovie:
      "Después de los devastadores eventos de 'Infinity War', los Vengadores restantes deben encontrar una manera de deshacer el daño causado por Thanos.",
  },
  {
    movieKey: "1456",
    movieName: "The Shawshank Redemption",
    directorMovie: "Frank Darabont",
    categorieMovie: "Drama",
    imageMovie: "../../Images/shawshankRedemption.webp",
    dateMovie: "1994",
    durationMovie: "142",
    descriptionMovie:
      "Un banquero es encarcelado por el asesinato de su esposa y su amante, y forma una amistad con otro prisionero, encontrando un camino hacia la esperanza.",
  },
  {
    movieKey: "1457",
    movieName: "Interstellar",
    directorMovie: "Christopher Nolan",
    categorieMovie: "Sci-Fi",
    imageMovie: "../../Images/interstellar.webp",
    dateMovie: "2014",
    durationMovie: "169",
    descriptionMovie:
      "Un grupo de exploradores viaja a través de un agujero de gusano en un esfuerzo por garantizar la supervivencia de la humanidad.",
  },
  {
    movieKey: "1458",
    movieName: "The Dark Knight",
    directorMovie: "Christopher Nolan",
    categorieMovie: "Action",
    imageMovie: "../../Images/darkKnight.webp",
    dateMovie: "2008",
    durationMovie: "152",
    descriptionMovie:
      "Batman debe luchar contra el Joker, un criminal que busca sumergir a Gotham City en el caos.",
  },
  {
    movieKey: "1459",
    movieName: "Parasite",
    directorMovie: "Bong Joon-ho",
    categorieMovie: "Thriller",
    imageMovie: "../../Images/parasite.webp",
    dateMovie: "2019",
    durationMovie: "132",
    descriptionMovie:
      "Una familia pobre se infiltra en la vida de una familia rica, desatando una serie de eventos inesperados y oscuros.",
  },
  {
    movieKey: "1460",
    movieName: "Forrest Gump",
    directorMovie: "Robert Zemeckis",
    categorieMovie: "Drama",
    imageMovie: "../../Images/forrestGump.webp",
    dateMovie: "1994",
    durationMovie: "142",
    descriptionMovie:
      "La vida de un hombre con un IQ bajo que, a pesar de sus limitaciones, se convierte en un héroe de guerra y atleta.",
  },
  {
    movieKey: "1461",
    movieName: "The Matrix",
    directorMovie: "Lana y Lilly Wachowski",
    categorieMovie: "Sci-Fi",
    imageMovie: "../../Images/matrix.webp",
    dateMovie: "1999",
    durationMovie: "136",
    descriptionMovie:
      "Un programador descubre que el mundo en el que vive es una simulación y se une a un grupo de rebeldes para combatir a sus creadores.",
  },
  {
    movieKey: "1462",
    movieName: "Gladiator",
    directorMovie: "Ridley Scott",
    categorieMovie: "Action",
    imageMovie: "../../Images/gladiator.webp",
    dateMovie: "2000",
    durationMovie: "155",
    descriptionMovie:
      "Un general romano es traicionado y reducido a la esclavitud, luego busca venganza contra el corrupto emperador que destruyó su vida.",
  },
  {
    movieKey: "1463",
    movieName: "The Godfather",
    directorMovie: "Francis Ford Coppola",
    categorieMovie: "Crime",
    imageMovie: "../../Images/godfather.webp",
    dateMovie: "1972",
    durationMovie: "175",
    descriptionMovie:
      "La historia de la familia Corleone, su imperio criminal y la lucha de Michael Corleone por salir del negocio familiar.",
  },
  {
    movieKey: "1464",
    movieName: "Spider-Man: No Way Home",
    directorMovie: "Jon Watts",
    categorieMovie: "Action",
    imageMovie: "../../Images/spidermanNoWayHome.webp",
    dateMovie: "2021",
    durationMovie: "148",
    descriptionMovie:
      "Peter Parker debe enfrentar las consecuencias de su identidad secreta revelada mientras se une a aliados inesperados para combatir nuevos enemigos.",
  },
  {
    movieKey: "1465",
    movieName: "Black Widow",
    directorMovie: "Cate Shortland",
    categorieMovie: "Action",
    imageMovie: "../../Images/blackWidow.webp",
    dateMovie: "2021",
    durationMovie: "134",
    descriptionMovie:
      "Natasha Romanoff, también conocida como Black Widow, se enfrenta a su oscuro pasado mientras se convierte en un objetivo.",
  },
  {
    movieKey: "1466",
    movieName: "La La Land",
    directorMovie: "Damien Chazelle",
    categorieMovie: "Musical",
    imageMovie: "../../Images/laLaLand.webp",
    dateMovie: "2016",
    durationMovie: "128",
    descriptionMovie:
      "Un músico de jazz y una aspirante a actriz luchan por alcanzar sus sueños en Los Ángeles mientras desarrollan una relación romántica.",
  },
  {
    movieKey: "1467",
    movieName: "Coco",
    directorMovie: "Lee Unkrich",
    categorieMovie: "Animation",
    imageMovie: "../../Images/coco.webp",
    dateMovie: "2017",
    durationMovie: "105",
    descriptionMovie:
      "Un joven aspirante a músico se encuentra en el mundo de los muertos y busca su lugar en la historia familiar.",
  },
  {
    movieKey: "1468",
    movieName: "The Social Network",
    directorMovie: "David Fincher",
    categorieMovie: "Biography",
    imageMovie: "../../Images/socialNetwork.webp",
    dateMovie: "2010",
    durationMovie: "120",
    descriptionMovie:
      "La historia del surgimiento de Facebook y la lucha legal que enfrenta su fundador, Mark Zuckerberg.",
  },
  {
    movieKey: "1469",
    movieName: "Shutter Island",
    directorMovie: "Martin Scorsese",
    categorieMovie: "Thriller",
    imageMovie: "../../Images/shutterIsland.webp",
    dateMovie: "2010",
    durationMovie: "138",
    descriptionMovie:
      "Un U.S. Marshal investiga la desaparición de una paciente de un hospital psiquiátrico y descubre oscuros secretos.",
  },
  {
    movieKey: "1470",
    movieName: "Get Out",
    directorMovie: "Jordan Peele",
    categorieMovie: "Horror",
    imageMovie: "../../Images/getOut.webp",
    dateMovie: "2017",
    durationMovie: "104",
    descriptionMovie:
      "Un joven afroamericano visita la casa de sus suegros y descubre un aterrador secreto que pone su vida en peligro.",
  },
  {
    movieKey: "1471",
    movieName: "Dunkirk",
    directorMovie: "Christopher Nolan",
    categorieMovie: "War",
    imageMovie: "../../Images/dunkirk.webp",
    dateMovie: "2017",
    durationMovie: "106",
    descriptionMovie:
      "La evacuación de las fuerzas aliadas de Dunkerque durante la Segunda Guerra Mundial.",
  },
  {
    movieKey: "1472",
    movieName: "Soul",
    directorMovie: "Pete Docter",
    categorieMovie: "Animation",
    imageMovie: "../../Images/soul.webp",
    dateMovie: "2020",
    durationMovie: "100",
    descriptionMovie:
      "Un músico de jazz busca su propósito en la vida después de un accidente que lo lleva a un viaje extraordinario.",
  },
  {
    movieKey: "1473",
    movieName: "The Conjuring",
    directorMovie: "James Wan",
    categorieMovie: "Horror",
    imageMovie: "../../Images/theConjuring.webp",
    dateMovie: "2013",
    durationMovie: "112",
    descriptionMovie:
      "Los investigadores paranormales Ed y Lorraine Warren ayudan a una familia aterrorizada por una presencia oscura en su granja.",
  },
  {
    movieKey: "1474",
    movieName: "Her",
    directorMovie: "Spike Jonze",
    categorieMovie: "Romance",
    imageMovie: "../../Images/her.webp",
    dateMovie: "2013",
    durationMovie: "126",
    descriptionMovie:
      "Un hombre forma una conexión única con un sistema operativo diseñado para satisfacer todas sus necesidades.",
  },
  {
    movieKey: "1475",
    movieName: "Toy Story",
    directorMovie: "John Lasseter",
    categorieMovie: "Animation",
    imageMovie: "../../Images/toyStory.webp",
    dateMovie: "1995",
    durationMovie: "81",
    descriptionMovie:
      "Los juguetes de un niño cobran vida y deben enfrentarse a la llegada de un nuevo compañero.",
  },
  {
    movieKey: "1476",
    movieName: "Fight Club",
    directorMovie: "David Fincher",
    categorieMovie: "Drama",
    imageMovie: "../../Images/fightClub.webp",
    dateMovie: "1999",
    durationMovie: "139",
    descriptionMovie:
      "Un hombre insatisfecho con su vida se une a un club de lucha secreto que cambia su vida para siempre.",
  },
  {
    movieKey: "1477",
    movieName: "A Star is Born",
    directorMovie: "Bradley Cooper",
    categorieMovie: "Drama",
    imageMovie: "../../Images/aStarIsBorn.webp",
    dateMovie: "2018",
    durationMovie: "136",
    descriptionMovie:
      "Un músico veterano ayuda a una joven cantante a alcanzar la fama mientras lucha con sus propios problemas.",
  },
  {
    movieKey: "1478",
    movieName: "The Lion King",
    directorMovie: "Roger Allers",
    categorieMovie: "Animation",
    imageMovie: "../../Images/lionKing.webp",
    dateMovie: "1994",
    durationMovie: "88",
    descriptionMovie:
      "Un joven león debe asumir su lugar en el ciclo de la vida después de la muerte de su padre.",
  },
  {
    movieKey: "1479",
    movieName: "Blade Runner 2049",
    directorMovie: "Denis Villeneuve",
    categorieMovie: "Sci-Fi",
    imageMovie: "../../Images/bladeRunner2049.webp",
    dateMovie: "2017",
    durationMovie: "164",
    descriptionMovie:
      "Un nuevo Blade Runner descubre un secreto que podría sumergir lo que queda de la sociedad en el caos.",
  },
  {
    movieKey: "1480",
    movieName: "The Grand Budapest Hotel",
    directorMovie: "Wes Anderson",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/grandBudapestHotel.webp",
    dateMovie: "2014",
    durationMovie: "99",
    descriptionMovie:
      "Un conserje de un hotel y su protegido se ven envueltos en un conflicto por una valiosa obra de arte.",
  },
];

const moviesByGenre = {
  Action: [
    {
      movieKey: "1453",
      movieName: "Top Gun: Maverick",
      directorMovie: "Joseph Kosinski",
      categorieMovie: "Action",
      imageMovie: "../../Images/topGunMaverick.webp",
      dateMovie: "2022",
      durationMovie: "131",
      descriptionMovie:
        "36 años después de la primera entrega, el capitán Pete 'Maverick' Mitchell está sirviendo como piloto de pruebas de la Marina de los Estados Unidos.",
    },
    {
      movieKey: "1455",
      movieName: "Avengers: Endgame",
      directorMovie: "Anthony y Joe Russo",
      categorieMovie: "Action",
      imageMovie: "../../Images/avengersEndgame.webp",
      dateMovie: "2019",
      durationMovie: "181",
      descriptionMovie:
        "Después de los devastadores eventos de 'Infinity War', los Vengadores restantes deben encontrar una manera de deshacer el daño causado por Thanos.",
    },
    {
      movieKey: "1458",
      movieName: "The Dark Knight",
      directorMovie: "Christopher Nolan",
      categorieMovie: "Action",
      imageMovie: "../../Images/darkKnight.webp",
      dateMovie: "2008",
      durationMovie: "152",
      descriptionMovie:
        "Batman debe luchar contra el Joker, un criminal que busca sumergir a Gotham City en el caos.",
    },
    {
      movieKey: "1462",
      movieName: "Gladiator",
      directorMovie: "Ridley Scott",
      categorieMovie: "Action",
      imageMovie: "../../Images/gladiator.webp",
      dateMovie: "2000",
      durationMovie: "155",
      descriptionMovie:
        "Un general romano es traicionado y reducido a la esclavitud, luego busca venganza contra el corrupto emperador que destruyó su vida.",
    },
    {
      movieKey: "1464",
      movieName: "Spider-Man: No Way Home",
      directorMovie: "Jon Watts",
      categorieMovie: "Action",
      imageMovie: "../../Images/spidermanNoWayHome.webp",
      dateMovie: "2021",
      durationMovie: "148",
      descriptionMovie:
        "Peter Parker debe enfrentar las consecuencias de su identidad secreta revelada mientras se une a aliados inesperados para combatir nuevos enemigos.",
    },
    {
      movieKey: "1465",
      movieName: "Black Widow",
      directorMovie: "Cate Shortland",
      categorieMovie: "Action",
      imageMovie: "../../Images/blackWidow.webp",
      dateMovie: "2021",
      durationMovie: "134",
      descriptionMovie:
        "Natasha Romanoff, también conocida como Black Widow, se enfrenta a su oscuro pasado mientras se convierte en un objetivo.",
    },
  ],
  SciFi: [
    {
      movieKey: "1454",
      movieName: "Inception",
      directorMovie: "Christopher Nolan",
      categorieMovie: "Sci-Fi",
      imageMovie: "../../Images/inception.webp",
      dateMovie: "2010",
      durationMovie: "148",
      descriptionMovie:
        "Un ladrón que roba secretos de los sueños es ofrecido la oportunidad de borrar su pasado si logra implantar una idea en la mente de un CEO.",
    },
    {
      movieKey: "1457",
      movieName: "Interstellar",
      directorMovie: "Christopher Nolan",
      categorieMovie: "Sci-Fi",
      imageMovie: "../../Images/interstellar.webp",
      dateMovie: "2014",
      durationMovie: "169",
      descriptionMovie:
        "Un grupo de exploradores viaja a través de un agujero de gusano en un esfuerzo por garantizar la supervivencia de la humanidad.",
    },
    {
      movieKey: "1461",
      movieName: "The Matrix",
      directorMovie: "Lana y Lilly Wachowski",
      categorieMovie: "Sci-Fi",
      imageMovie: "../../Images/matrix.webp",
      dateMovie: "1999",
      durationMovie: "136",
      descriptionMovie:
        "Un programador descubre que el mundo en el que vive es una simulación y se une a un grupo de rebeldes para combatir a sus creadores.",
    },
    {
      movieKey: "1479",
      movieName: "Blade Runner 2049",
      directorMovie: "Denis Villeneuve",
      categorieMovie: "Sci-Fi",
      imageMovie: "../../Images/bladeRunner2049.webp",
      dateMovie: "2017",
      durationMovie: "164",
      descriptionMovie:
        "Un nuevo Blade Runner descubre un secreto que podría sumergir lo que queda de la sociedad en el caos.",
    },
  ],
  Drama: [
    {
      movieKey: "1456",
      movieName: "The Shawshank Redemption",
      directorMovie: "Frank Darabont",
      categorieMovie: "Drama",
      imageMovie: "../../Images/shawshankRedemption.webp",
      dateMovie: "1994",
      durationMovie: "142",
      descriptionMovie:
        "Un banquero es encarcelado por el asesinato de su esposa y su amante, y forma una amistad con otro prisionero, encontrando un camino hacia la esperanza.",
    },
    {
      movieKey: "1460",
      movieName: "Forrest Gump",
      directorMovie: "Robert Zemeckis",
      categorieMovie: "Drama",
      imageMovie: "../../Images/forrestGump.webp",
      dateMovie: "1994",
      durationMovie: "142",
      descriptionMovie:
        "La vida de un hombre con un IQ bajo que, a pesar de sus limitaciones, se convierte en un héroe de guerra y atleta.",
    },
    {
      movieKey: "1476",
      movieName: "Fight Club",
      directorMovie: "David Fincher",
      categorieMovie: "Drama",
      imageMovie: "../../Images/fightClub.webp",
      dateMovie: "1999",
      durationMovie: "139",
      descriptionMovie:
        "Un hombre insatisfecho con su vida se une a un club de lucha secreto que cambia su vida para siempre.",
    },
    {
      movieKey: "1477",
      movieName: "A Star is Born",
      directorMovie: "Bradley Cooper",
      categorieMovie: "Drama",
      imageMovie: "../../Images/aStarIsBorn.webp",
      dateMovie: "2018",
      durationMovie: "136",
      descriptionMovie:
        "Un músico veterano ayuda a una joven cantante a alcanzar la fama mientras lucha con sus propios problemas.",
    },
  ],
};

const actionMovies = movies.filter(
  (movie) => movie.categorieMovie === "Action"
);
const terrorMovies = movies.filter(
  (movie) => movie.categorieMovie === "Terror"
);
const comedyMovies = movies.filter(
  (movie) => movie.categorieMovie === "Comedy"
);

const App = () => {
  return (
    <div className="div-container">
      <NavBar />
      <CarouselMovies movies={movies} categorieMovies={moviesByGenre} />
    </div>
  );
};

export default App;
