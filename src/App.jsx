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
    imageMovie: "../../Images/actionMovies/topGunMaverick.webp",
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
    imageMovie: "../../Images/Sci-Fi/inception.jpg",
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
    imageMovie: "../../Images/actionMovies/avengersEndGame.jpeg",
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
    imageMovie: "../../Images/Drama/shawshankRedemption.jpg",
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
    imageMovie: "../../Images/Sci-Fi/interstellar.webp",
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
    imageMovie: "../../Images/actionMovies/theDarkKnight.webp",
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
    imageMovie: "../../Images/Thriller/parasite.jpeg",
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
    imageMovie: "../../Images/Drama/forrestGump.jpeg",
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
    imageMovie: "../../Images/Sci-Fi/theMatrix.jpg",
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
    imageMovie: "../../Images/actionMovies/gladiator.jpg",
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
    imageMovie: "../../Images/actionMovies/spiderManNoWayHome.jpg",
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
    imageMovie: "../../Images/actionMovies/blackWidow.webp",
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
    imageMovie: "../../Images/Thriller/shutterIsland.jpg",
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
    imageMovie: "../../Images/Drama/fightClub.jpg",
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
    imageMovie: "../../Images/Drama/aStarIsBorn.png",
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
    imageMovie: "../../Images/Sci-Fi/bladeRunner.webp",
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
    imageMovie: "../../Images/Comedy/grandBudapestHotel.webp",
    dateMovie: "2014",
    durationMovie: "99",
    descriptionMovie:
      "Un conserje de un hotel y su protegido se ven envueltos en un conflicto por una valiosa obra de arte.",
  },
  {
    movieKey: "1481",
    movieName: "Mad Max: Fury Road",
    directorMovie: "George Miller",
    categorieMovie: "Action",
    imageMovie: "../../Images/actionMovies/madMaxFuryRoad.jpg",
    dateMovie: "2015",
    durationMovie: "120",
    descriptionMovie:
      "En un futuro postapocalíptico, Max se une a una mujer rebelde para huir de un tirano y su ejército.",
  },
  {
    movieKey: "1482",
    movieName: "The Martian",
    directorMovie: "Ridley Scott",
    categorieMovie: "Sci-Fi",
    imageMovie: "../../Images/Sci-Fi/theMartian.jpeg",
    dateMovie: "2015",
    durationMovie: "144",
    descriptionMovie:
      "Un astronauta queda varado en Marte y debe utilizar su ingenio para sobrevivir mientras espera el rescate.",
  },
  {
    movieKey: "1483",
    movieName: "Schindler's List",
    directorMovie: "Steven Spielberg",
    categorieMovie: "Drama",
    imageMovie: "../../Images/Drama/schindlersList.jpg",
    dateMovie: "1993",
    durationMovie: "195",
    descriptionMovie:
      "La historia de Oskar Schindler, un hombre que salvó a más de mil judíos durante el Holocausto.",
  },
  {
    movieKey: "1484",
    movieName: "Whiplash",
    directorMovie: "Damien Chazelle",
    categorieMovie: "Drama",
    imageMovie: "../../Images/Drama/whiplash.jpg",
    dateMovie: "2014",
    durationMovie: "106",
    descriptionMovie:
      "Un joven baterista ambicioso busca la grandeza bajo la tutela de un implacable profesor.",
  },
  {
    movieKey: "1485",
    movieName: "Guardians of the Galaxy",
    directorMovie: "James Gunn",
    categorieMovie: "Action",
    imageMovie: "../../Images/actionMovies/guardiansOfTheGalaxy.webp",
    dateMovie: "2014",
    durationMovie: "121",
    descriptionMovie:
      "Un grupo de inadaptados se une para salvar el universo de una poderosa amenaza.",
  },
  {
    movieKey: "1486",
    movieName: "2001: A Space Odyssey",
    directorMovie: "Stanley Kubrick",
    categorieMovie: "Sci-Fi",
    imageMovie: "../../Images/Sci-Fi/spaceOdyssey.jpg",
    dateMovie: "1968",
    durationMovie: "149",
    descriptionMovie:
      "Un enigmático monolito lleva a la humanidad a una misión en el espacio, supervisada por una inteligencia artificial.",
  },
  {
    movieKey: "1487",
    movieName: "The Silence of the Lambs",
    directorMovie: "Jonathan Demme",
    categorieMovie: "Thriller",
    imageMovie: "../../Images/Thriller/silenceOfTheLambs.jpg",
    dateMovie: "1991",
    durationMovie: "118",
    descriptionMovie:
      "Una joven agente del FBI busca la ayuda de un asesino caníbal para atrapar a otro asesino en serie.",
  },
  {
    movieKey: "1488",
    movieName: "Finding Nemo",
    directorMovie: "Andrew Stanton",
    categorieMovie: "Animation",
    imageMovie: "../../Images/findingNemo.webp",
    dateMovie: "2003",
    durationMovie: "100",
    descriptionMovie:
      "Un pez payaso emprende un viaje épico para encontrar a su hijo perdido.",
  },
  {
    movieKey: "1490",
    movieName: "Moana",
    directorMovie: "Ron Clements, John Musker",
    categorieMovie: "Animation",
    imageMovie: "../../Images/moana.webp",
    dateMovie: "2016",
    durationMovie: "107",
    descriptionMovie:
      "Una joven navegante se embarca en un viaje para salvar a su pueblo, con la ayuda de un semidiós.",
  },
  {
    movieKey: "1491",
    movieName: "The Prestige",
    directorMovie: "Christopher Nolan",
    categorieMovie: "Thriller",
    imageMovie: "../../Images/Thriller/thePrestige.webp",
    dateMovie: "2006",
    durationMovie: "130",
    descriptionMovie:
      "Dos magos rivales luchan por superar al otro, llevando su competencia a niveles peligrosos.",
  },
  {
    movieKey: "1492",
    movieName: "Saving Private Ryan",
    directorMovie: "Steven Spielberg",
    categorieMovie: "War",
    imageMovie: "../../Images/savingPrivateRyan.webp",
    dateMovie: "1998",
    durationMovie: "169",
    descriptionMovie:
      "Durante la Segunda Guerra Mundial, un grupo de soldados debe encontrar y traer de vuelta a un paracaidista cuyos hermanos han muerto en combate.",
  },
  {
    movieKey: "1493",
    movieName: "The Terminator",
    directorMovie: "James Cameron",
    categorieMovie: "Action",
    imageMovie: "../../Images/actionMovies/theTerminator.webp",
    dateMovie: "1984",
    durationMovie: "107",
    descriptionMovie:
      "Un ciborg es enviado desde el futuro para asesinar a una mujer cuyo hijo será clave en una guerra futura.",
  },
  {
    movieKey: "1494",
    movieName: "Star Wars: Episode IV - A New Hope",
    directorMovie: "George Lucas",
    categorieMovie: "Sci-Fi",
    imageMovie: "../../Images/Sci-Fi/starWarsNewHope.webp",
    dateMovie: "1977",
    durationMovie: "121",
    descriptionMovie:
      "Un joven granjero descubre su destino como caballero Jedi y se une a la lucha contra el malvado Imperio Galáctico.",
  },
  {
    movieKey: "1495",
    movieName: "The Green Mile",
    directorMovie: "Frank Darabont",
    categorieMovie: "Drama",
    imageMovie: "../../Images/Drama/greenMile.jpg",
    dateMovie: "1999",
    durationMovie: "189",
    descriptionMovie:
      "Un guardia de prisión descubre que un prisionero en el corredor de la muerte tiene un don sobrenatural.",
  },
  {
    movieKey: "1496",
    movieName: "Joker",
    directorMovie: "Todd Phillips",
    categorieMovie: "Crime",
    imageMovie: "../../Images/Drama/joker.jpeg",
    dateMovie: "2019",
    durationMovie: "122",
    descriptionMovie:
      "La historia del origen del Joker, un hombre con problemas mentales que se convierte en un criminal notorio en Gotham City.",
  },
  {
    movieKey: "1497",
    movieName: "The Exorcist",
    directorMovie: "William Friedkin",
    categorieMovie: "Horror",
    imageMovie: "../../Images/exorcist.webp",
    dateMovie: "1973",
    durationMovie: "122",
    descriptionMovie:
      "Una joven es poseída por una entidad demoníaca, y dos sacerdotes intentan exorcizarla.",
  },
  {
    movieKey: "1498",
    movieName: "The Incredibles",
    directorMovie: "Brad Bird",
    categorieMovie: "Animation",
    imageMovie: "../../Images/theIncredibles.webp",
    dateMovie: "2004",
    durationMovie: "115",
    descriptionMovie:
      "Una familia de superhéroes que vive en el anonimato debe regresar a la acción para salvar al mundo.",
  },
  {
    movieKey: "1499",
    movieName: "Braveheart",
    directorMovie: "Mel Gibson",
    categorieMovie: "Action",
    imageMovie: "../../Images/actionMovies/braveHeart.jpg",
    dateMovie: "1995",
    durationMovie: "178",
    descriptionMovie:
      "La historia de William Wallace, un héroe escocés que lidera una revuelta contra el dominio inglés.",
  },
  {
    movieKey: "1500",
    movieName: "Inglourious Basterds",
    directorMovie: "Quentin Tarantino",
    categorieMovie: "War",
    imageMovie: "../../Images/inglouriousBasterds.webp",
    dateMovie: "2009",
    durationMovie: "153",
    descriptionMovie:
      "Durante la Segunda Guerra Mundial, un grupo de soldados judíos planea asesinar a líderes nazis, mientras una joven busca venganza.",
  },
  {
    movieKey: "1501",
    movieName: "The Big Lebowski",
    directorMovie: "Joel Coen",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/bigLebowski.jpg",
    dateMovie: "1998",
    durationMovie: "117",
    descriptionMovie:
      "Un hombre perezoso conocido como 'The Dude' se ve envuelto en un complicado secuestro y un caso de identidad equivocada.",
  },
  {
    movieKey: "1502",
    movieName: "Zootopia",
    directorMovie: "Byron Howard, Rich Moore",
    categorieMovie: "Animation",
    imageMovie: "../../Images/zootopia.webp",
    dateMovie: "2016",
    durationMovie: "108",
    descriptionMovie:
      "En una ciudad habitada por animales, una conejita policía y un zorro estafador deben resolver una conspiración.",
  },
  {
    movieKey: "1503",
    movieName: "Oldboy",
    directorMovie: "Park Chan-wook",
    categorieMovie: "Thriller",
    imageMovie: "../../Images/Thriller/oldboy.webp",
    dateMovie: "2003",
    durationMovie: "120",
    descriptionMovie:
      "Un hombre es secuestrado y mantenido en cautiverio durante 15 años, y cuando es liberado, busca venganza.",
  },
  {
    movieKey: "1504",
    movieName: "The Pursuit of Happyness",
    directorMovie: "Gabriele Muccino",
    categorieMovie: "Biography",
    imageMovie: "../../Images/pursuitOfHappyness.webp",
    dateMovie: "2006",
    durationMovie: "117",
    descriptionMovie:
      "La inspiradora historia de un hombre que lucha por superar la pobreza y criar a su hijo mientras persigue una carrera en el mundo financiero.",
  },
  {
    movieKey: "1505",
    movieName: "Frozen",
    directorMovie: "Chris Buck, Jennifer Lee",
    categorieMovie: "Animation",
    imageMovie: "../../Images/frozen.webp",
    dateMovie: "2013",
    durationMovie: "102",
    descriptionMovie:
      "Una joven princesa debe encontrar a su hermana, cuyos poderes han dejado su reino en un invierno eterno.",
  },
  {
    movieKey: "1506",
    movieName: "Se7en",
    directorMovie: "David Fincher",
    categorieMovie: "Thriller",
    imageMovie: "../../Images/Thriller/seven.jpg",
    dateMovie: "1995",
    durationMovie: "127",
    descriptionMovie:
      "Dos detectives persiguen a un asesino en serie que utiliza los siete pecados capitales como motivo para sus crímenes.",
  },
  {
    movieKey: "1507",
    movieName: "Apocalypse Now",
    directorMovie: "Francis Ford Coppola",
    categorieMovie: "War",
    imageMovie: "../../Images/apocalypseNow.webp",
    dateMovie: "1979",
    durationMovie: "153",
    descriptionMovie:
      "Durante la guerra de Vietnam, un capitán del ejército estadounidense recibe la misión de encontrar y eliminar a un coronel renegado.",
  },
  {
    movieKey: "1508",
    movieName: "WALL-E",
    directorMovie: "Andrew Stanton",
    categorieMovie: "Animation",
    imageMovie: "../../Images/wallE.webp",
    dateMovie: "2008",
    durationMovie: "98",
    descriptionMovie:
      "Un robot de limpieza solitario en un planeta Tierra desolado descubre una nueva misión en la vida cuando encuentra una planta viva.",
  },
  {
    movieKey: "1509",
    movieName: "Prisoners",
    directorMovie: "Denis Villeneuve",
    categorieMovie: "Thriller",
    imageMovie: "../../Images/Thriller/prisoners.jpg",
    dateMovie: "2013",
    durationMovie: "153",
    descriptionMovie:
      "Un padre toma la justicia en sus propias manos después de que su hija y su amiga desaparecen misteriosamente.",
  },
  {
    movieKey: "1510",
    movieName: "Twelve Monkeys",
    directorMovie: "Terry Gilliam",
    categorieMovie: "Sci-Fi",
    imageMovie: "../../Images/Sci-Fi/twelveMonkeys.jpg",
    dateMovie: "1995",
    durationMovie: "129",
    descriptionMovie:
      "Un hombre del futuro es enviado al pasado para detener la propagación de un virus mortal que aniquilará a la humanidad.",
  },
  {
    movieKey: "1511",
    movieName: "Full Metal Jacket",
    directorMovie: "Stanley Kubrick",
    categorieMovie: "War",
    imageMovie: "../../Images/fullMetalJacket.webp",
    dateMovie: "1987",
    durationMovie: "116",
    descriptionMovie:
      "La historia de la guerra de Vietnam a través de la experiencia de un grupo de reclutas en el campo de entrenamiento y en el frente.",
  },
  {
    movieKey: "1512",
    movieName: "Saving Private Ryan",
    directorMovie: "Steven Spielberg",
    categorieMovie: "War",
    imageMovie: "../../Images/savingPrivateRyan.webp",
    dateMovie: "1998",
    durationMovie: "169",
    descriptionMovie:
      "Un grupo de soldados es enviado a rescatar a un paracaidista cuyo hermano ha sido asesinado en combate durante la Segunda Guerra Mundial.",
  },
  {
    movieKey: "1513",
    movieName: "Apocalypse Now",
    directorMovie: "Francis Ford Coppola",
    categorieMovie: "War",
    imageMovie: "../../Images/apocalypseNow.webp",
    dateMovie: "1979",
    durationMovie: "153",
    descriptionMovie:
      "Un capitán del ejército estadounidense es enviado a la selva de Vietnam para encontrar y eliminar a un coronel renegado.",
  },
  {
    movieKey: "1514",
    movieName: "Platoon",
    directorMovie: "Oliver Stone",
    categorieMovie: "War",
    imageMovie: "../../Images/platoon.webp",
    dateMovie: "1986",
    durationMovie: "120",
    descriptionMovie:
      "Un joven soldado se enfrenta a los horrores de la guerra de Vietnam mientras lidia con la moralidad y la brutalidad del conflicto.",
  },
  {
    movieKey: "1515",
    movieName: "1917",
    directorMovie: "Sam Mendes",
    categorieMovie: "War",
    imageMovie: "../../Images/1917.webp",
    dateMovie: "2019",
    durationMovie: "119",
    descriptionMovie:
      "Dos soldados británicos son enviados a entregar un mensaje que podría salvar a miles de compañeros en el frente durante la Primera Guerra Mundial.",
  },
  {
    movieKey: "1516",
    movieName: "Black Hawk Down",
    directorMovie: "Ridley Scott",
    categorieMovie: "War",
    imageMovie: "../../Images/blackHawkDown.webp",
    dateMovie: "2001",
    durationMovie: "144",
    descriptionMovie:
      "La historia de un fallido intento de captura de un líder warlord en Mogadiscio, Somalia, que resulta en un enfrentamiento mortal.",
  },
  {
    movieKey: "1517",
    movieName: "Dunkirk",
    directorMovie: "Christopher Nolan",
    categorieMovie: "War",
    imageMovie: "../../Images/dunkirk.webp",
    dateMovie: "2017",
    durationMovie: "106",
    descriptionMovie:
      "La evacuación de las tropas aliadas de Dunkerque durante la Segunda Guerra Mundial, narrada desde tres perspectivas diferentes.",
  },
  {
    movieKey: "1518",
    movieName: "The Thin Red Line",
    directorMovie: "Terrence Malick",
    categorieMovie: "War",
    imageMovie: "../../Images/thinRedLine.webp",
    dateMovie: "1998",
    durationMovie: "171",
    descriptionMovie:
      "La historia de la batalla de Guadalcanal en la Segunda Guerra Mundial, explorando la naturaleza humana en medio del conflicto.",
  },
  {
    movieKey: "1519",
    movieName: "We Were Soldiers",
    directorMovie: "Randall Wallace",
    categorieMovie: "War",
    imageMovie: "../../Images/weWereSoldiers.webp",
    dateMovie: "2002",
    durationMovie: "138",
    descriptionMovie:
      "Un relato de la batalla de Ia Drang, la primera gran batalla de los Estados Unidos en Vietnam, y sus consecuencias.",
  },
  {
    movieKey: "1520",
    movieName: "Letters from Iwo Jima",
    directorMovie: "Clint Eastwood",
    categorieMovie: "War",
    imageMovie: "../../Images/lettersFromIwoJima.webp",
    dateMovie: "2006",
    durationMovie: "141",
    descriptionMovie:
      "La historia de la batalla de Iwo Jima contada desde la perspectiva de los soldados japoneses que lucharon en ella.",
  },
  {
    movieKey: "1521",
    movieName: "Pride and Prejudice",
    directorMovie: "Joe Wright",
    categorieMovie: "Romance",
    imageMovie: "../../Images/prideAndPrejudice.webp",
    dateMovie: "2005",
    durationMovie: "129",
    descriptionMovie:
      "Una joven se enfrenta a la presión de su familia y la sociedad mientras navega por el amor y la comprensión con un hombre de carácter complicado.",
  },
  {
    movieKey: "1522",
    movieName: "The Notebook",
    directorMovie: "Nick Cassavetes",
    categorieMovie: "Romance",
    imageMovie: "../../Images/theNotebook.webp",
    dateMovie: "2004",
    durationMovie: "123",
    descriptionMovie:
      "La historia de amor entre un joven y una mujer de una familia adinerada, contada a través de las memorias de un anciano.",
  },
  {
    movieKey: "1523",
    movieName: "La La Land",
    directorMovie: "Damien Chazelle",
    categorieMovie: "Romance",
    imageMovie: "../../Images/laLaLand.webp",
    dateMovie: "2016",
    durationMovie: "128",
    descriptionMovie:
      "Un músico de jazz y una aspirante a actriz luchan por alcanzar sus sueños en Los Ángeles mientras desarrollan una relación romántica.",
  },
  {
    movieKey: "1524",
    movieName: "Titanic",
    directorMovie: "James Cameron",
    categorieMovie: "Romance",
    imageMovie: "../../Images/titanic.webp",
    dateMovie: "1997",
    durationMovie: "195",
    descriptionMovie:
      "Una joven de la alta sociedad se enamora de un artista sin recursos a bordo del famoso transatlántico, Titanic.",
  },
  {
    movieKey: "1525",
    movieName: "A Walk to Remember",
    directorMovie: "Adam Shankman",
    categorieMovie: "Romance",
    imageMovie: "../../Images/aWalkToRemember.webp",
    dateMovie: "2002",
    durationMovie: "101",
    descriptionMovie:
      "La vida de un joven cambia cuando se enamora de una chica que es completamente diferente a él.",
  },
  {
    movieKey: "1526",
    movieName: "Notting Hill",
    directorMovie: "Roger Michell",
    categorieMovie: "Romance",
    imageMovie: "../../Images/nottingHill.webp",
    dateMovie: "1999",
    durationMovie: "124",
    descriptionMovie:
      "Un dueño de una librería de Londres se enamora de una famosa actriz estadounidense, complicando su vida diaria.",
  },
  {
    movieKey: "1527",
    movieName: "10 Things I Hate About You",
    directorMovie: "Gil Junger",
    categorieMovie: "Romance",
    imageMovie: "../../Images/10ThingsIHateAboutYou.webp",
    dateMovie: "1999",
    durationMovie: "97",
    descriptionMovie:
      "Un joven intenta conquistar a la hermana mayor de su interés romántico, quien es conocida por su carácter fuerte.",
  },
  {
    movieKey: "1528",
    movieName: "The Fault in Our Stars",
    directorMovie: "Josh Boone",
    categorieMovie: "Romance",
    imageMovie: "../../Images/theFaultInOurStars.webp",
    dateMovie: "2014",
    durationMovie: "126",
    descriptionMovie:
      "Dos adolescentes con cáncer se enamoran mientras enfrentan sus enfermedades y luchan por vivir plenamente.",
  },
  {
    movieKey: "1529",
    movieName: "Crazy, Stupid, Love",
    directorMovie: "Glenn Ficarra y John Requa",
    categorieMovie: "Romance",
    imageMovie: "../../Images/crazyStupidLove.webp",
    dateMovie: "2011",
    durationMovie: "118",
    descriptionMovie:
      "Un hombre recién divorciado recibe consejos sobre cómo ligar de un joven seductor, mientras su vida amorosa se complica.",
  },
  {
    movieKey: "1530",
    movieName: "Me Before You",
    directorMovie: "Thea Sharrock",
    categorieMovie: "Romance",
    imageMovie: "../../Images/meBeforeYou.webp",
    dateMovie: "2016",
    durationMovie: "110",
    descriptionMovie:
      "Una joven que se convierte en cuidadora de un hombre tetrapléjico ayuda a cambiar su perspectiva sobre la vida y el amor.",
  },
  {
    movieKey: "1531",
    movieName: "Superbad",
    directorMovie: "Greg Mottola",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/superbad.jpg",
    dateMovie: "2007",
    durationMovie: "113",
    descriptionMovie:
      "Dos amigos de la secundaria buscan hacer una gran fiesta antes de graduarse, enfrentándose a una serie de divertidas desventuras.",
  },
  {
    movieKey: "1532",
    movieName: "The Hangover",
    directorMovie: "Todd Phillips",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/theHangover.jpeg",
    dateMovie: "2009",
    durationMovie: "100",
    descriptionMovie:
      "Tres amigos se despiertan después de una despedida de soltero en Las Vegas sin recordar nada y deben encontrar al cuarto amigo desaparecido.",
  },
  {
    movieKey: "1533",
    movieName: "Bridesmaids",
    directorMovie: "Paul Feig",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/bridesmaids.jpeg",
    dateMovie: "2011",
    durationMovie: "125",
    descriptionMovie:
      "Una mujer es elegida como dama de honor para la boda de su mejor amiga, y se enfrenta a una serie de desventuras con otras damas.",
  },
  {
    movieKey: "1534",
    movieName: "Groundhog Day",
    directorMovie: "Harold Ramis",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/groundhogDay.jpg",
    dateMovie: "1993",
    durationMovie: "101",
    descriptionMovie:
      "Un meteorólogo queda atrapado en un bucle temporal y debe revivir el mismo día una y otra vez, mientras busca cambiar su destino.",
  },
  {
    movieKey: "1535",
    movieName: "Mean Girls",
    directorMovie: "Mark Waters",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/meanGirls.webp",
    dateMovie: "2004",
    durationMovie: "97",
    descriptionMovie:
      "Una adolescente se une a un grupo de chicas populares en la escuela secundaria y aprende sobre los conflictos sociales y la amistad.",
  },
  {
    movieKey: "1536",
    movieName: "Dumb and Dumber",
    directorMovie: "Peter y Bobby Farrelly",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/dumbAndDumber.jpg",
    dateMovie: "1994",
    durationMovie: "107",
    descriptionMovie:
      "Dos amigos tontos emprenden un viaje por carretera para devolver un maletín perdido a su dueña, enfrentándose a situaciones hilarantes.",
  },
  {
    movieKey: "1537",
    movieName: "The 40-Year-Old Virgin",
    directorMovie: "Judd Apatow",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/the40YearsOldVirgin.jpg",
    dateMovie: "2005",
    durationMovie: "116",
    descriptionMovie:
      "Un hombre de 40 años que nunca ha tenido relaciones sexuales busca ayuda de sus amigos para perder su virginidad.",
  },
  {
    movieKey: "1538",
    movieName: "Zoolander",
    directorMovie: "Ben Stiller",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/zoolander.webp",
    dateMovie: "2001",
    durationMovie: "89",
    descriptionMovie:
      "Un modelo de moda se convierte en el objetivo de una conspiración de asesinato mientras trata de salvar el mundo del diseño de modas.",
  },
  {
    movieKey: "1539",
    movieName: "Step Brothers",
    directorMovie: "Adam McKay",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/stepBrother.jpeg",
    dateMovie: "2008",
    durationMovie: "98",
    descriptionMovie:
      "Dos hombres de mediana edad que se convierten en hermanastros deben aprender a convivir bajo el mismo techo.",
  },
  {
    movieKey: "1540",
    movieName: "Horrible Bosses",
    directorMovie: "Seth Gordon",
    categorieMovie: "Comedy",
    imageMovie: "../../Images/Comedy/horribleBosses.jpg",
    dateMovie: "2011",
    durationMovie: "98",
    descriptionMovie:
      "Tres amigos deciden contratar a un asesino a sueldo para deshacerse de sus jefes abusivos en una serie de situaciones cómicas.",
  },
  {
    movieKey: "1541",
    movieName: "The Pursuit of Happyness",
    directorMovie: "Gabriele Muccino",
    categorieMovie: "Biography",
    imageMovie: "../../Images/thePursuitOfHappyness.webp",
    dateMovie: "2006",
    durationMovie: "117",
    descriptionMovie:
      "La historia real de Chris Gardner, un hombre que lucha contra la adversidad para lograr una vida mejor para él y su hijo.",
  },
  {
    movieKey: "1542",
    movieName: "A Beautiful Mind",
    directorMovie: "Ron Howard",
    categorieMovie: "Biography",
    imageMovie: "../../Images/aBeautifulMind.webp",
    dateMovie: "2001",
    durationMovie: "135",
    descriptionMovie:
      "La vida del matemático John Nash, quien luchó contra la esquizofrenia mientras alcanzaba el reconocimiento mundial.",
  },
  {
    movieKey: "1543",
    movieName: "The Theory of Everything",
    directorMovie: "James Marsh",
    categorieMovie: "Biography",
    imageMovie: "../../Images/theTheoryOfEverything.webp",
    dateMovie: "2014",
    durationMovie: "123",
    descriptionMovie:
      "La historia del renombrado físico Stephen Hawking, su vida y su relación con su esposa Jane.",
  },
  {
    movieKey: "1544",
    movieName: "Hidden Figures",
    directorMovie: "Theodore Melfi",
    categorieMovie: "Biography",
    imageMovie: "../../Images/hiddenFigures.webp",
    dateMovie: "2016",
    durationMovie: "127",
    descriptionMovie:
      "La historia de tres mujeres afroamericanas que trabajaron en la NASA y fueron fundamentales para el éxito de las misiones espaciales.",
  },
  {
    movieKey: "1545",
    movieName: "Walk the Line",
    directorMovie: "James Mangold",
    categorieMovie: "Biography",
    imageMovie: "../../Images/walkTheLine.webp",
    dateMovie: "2005",
    durationMovie: "136",
    descriptionMovie:
      "La vida del famoso músico Johnny Cash y su relación con June Carter.",
  },
  {
    movieKey: "1546",
    movieName: "The Imitation Game",
    directorMovie: "Morten Tyldum",
    categorieMovie: "Biography",
    imageMovie: "../../Images/theImitationGame.webp",
    dateMovie: "2014",
    durationMovie: "113",
    descriptionMovie:
      "La historia de Alan Turing, un matemático que ayudó a descifrar los códigos nazis durante la Segunda Guerra Mundial.",
  },
  {
    movieKey: "1547",
    movieName: "12 Years a Slave",
    directorMovie: "Steve McQueen",
    categorieMovie: "Biography",
    imageMovie: "../../Images/12YearsASlave.webp",
    dateMovie: "2013",
    durationMovie: "134",
    descriptionMovie:
      "La historia real de Solomon Northup, un hombre negro libre que fue secuestrado y vendido como esclavo.",
  },
  {
    movieKey: "1548",
    movieName: "Erin Brockovich",
    directorMovie: "Steven Soderbergh",
    categorieMovie: "Biography",
    imageMovie: "../../Images/erinBrockovich.webp",
    dateMovie: "2000",
    durationMovie: "132",
    descriptionMovie:
      "La historia de una madre soltera que se convierte en activista y ayuda a ganar un caso contra una empresa contaminante.",
  },
  {
    movieKey: "1549",
    movieName: "Rocketman",
    directorMovie: "Dexter Fletcher",
    categorieMovie: "Biography",
    imageMovie: "../../Images/rocketman.webp",
    dateMovie: "2019",
    durationMovie: "121",
    descriptionMovie:
      "La vida del músico Elton John, su ascenso a la fama y su lucha con la adicción.",
  },
  {
    movieKey: "1550",
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
    movieKey: "1551",
    movieName: "The Exorcist",
    directorMovie: "William Friedkin",
    categorieMovie: "Horror",
    imageMovie: "../../Images/theExorcist.webp",
    dateMovie: "1973",
    durationMovie: "132",
    descriptionMovie:
      "La historia de una madre que busca la ayuda de un sacerdote para liberar a su hija de una posesión demoníaca.",
  },
  {
    movieKey: "1552",
    movieName: "Hereditary",
    directorMovie: "Ari Aster",
    categorieMovie: "Horror",
    imageMovie: "../../Images/hereditary.webp",
    dateMovie: "2018",
    durationMovie: "127",
    descriptionMovie:
      "Después de la muerte de su madre, una familia comienza a descubrir secretos oscuros que amenazan su vida.",
  },
  {
    movieKey: "1553",
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
    movieKey: "1554",
    movieName: "A Nightmare on Elm Street",
    directorMovie: "Wes Craven",
    categorieMovie: "Horror",
    imageMovie: "../../Images/aNightmareOnElmStreet.webp",
    dateMovie: "1984",
    durationMovie: "91",
    descriptionMovie:
      "Un grupo de adolescentes es acosado por un misterioso asesino que los persigue en sus sueños.",
  },
  {
    movieKey: "1555",
    movieName: "It",
    directorMovie: "Andy Muschietti",
    categorieMovie: "Horror",
    imageMovie: "../../Images/it.webp",
    dateMovie: "2017",
    durationMovie: "135",
    descriptionMovie:
      "Un grupo de niños se enfrenta a un demonio que toma la forma de un payaso y aterroriza su ciudad.",
  },
  {
    movieKey: "1556",
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
    movieKey: "1557",
    movieName: "The Babadook",
    directorMovie: "Jennifer Kent",
    categorieMovie: "Horror",
    imageMovie: "../../Images/theBabadook.webp",
    dateMovie: "2014",
    durationMovie: "93",
    descriptionMovie:
      "Una madre y su hijo deben enfrentar un ser aterrador que se manifiesta a través de un libro de cuentos.",
  },
  {
    movieKey: "1558",
    movieName: "The Cabin in the Woods",
    directorMovie: "Drew Goddard",
    categorieMovie: "Horror",
    imageMovie: "../../Images/theCabinInTheWoods.webp",
    dateMovie: "2011",
    durationMovie: "95",
    descriptionMovie:
      "Un grupo de amigos se dirige a una cabaña remota, donde descubren oscuros secretos y un experimento mortal.",
  },
  {
    movieKey: "1559",
    movieName: "Midsommar",
    directorMovie: "Ari Aster",
    categorieMovie: "Horror",
    imageMovie: "../../Images/midsommar.webp",
    dateMovie: "2019",
    durationMovie: "147",
    descriptionMovie:
      "Una pareja viaja a Suecia para asistir a un festival que ocurre cada 90 años, solo para descubrir que las festividades tienen un oscuro propósito.",
  },
  {
    movieKey: "1560",
    movieName: "The Witch",
    directorMovie: "Robert Eggers",
    categorieMovie: "Horror",
    imageMovie: "../../Images/theWitch.webp",
    dateMovie: "2015",
    durationMovie: "92",
    descriptionMovie:
      "Una familia en la Nueva Inglaterra del siglo XVII enfrenta la brujería y la paranoia en un ambiente aterrador y aislado.",
  },
  {
    movieKey: "1602",
    movieName: "Pulp Fiction",
    directorMovie: "Quentin Tarantino",
    categorieMovie: "Crime",
    imageMovie: "../../Images/Drama/pulpFiction.webp",
    dateMovie: "1994",
    durationMovie: "154",
    descriptionMovie:
      "Las vidas de varios criminales se entrelazan en esta historia de crimen, redención y casualidad.",
  },
  {
    movieKey: "1603",
    movieName: "The Godfather Part II",
    directorMovie: "Francis Ford Coppola",
    categorieMovie: "Crime",
    imageMovie: "../../Images/Drama/godfatherPartII.webp",
    dateMovie: "1974",
    durationMovie: "202",
    descriptionMovie:
      "La historia de la familia Corleone continúa mientras Michael lucha por mantener el poder y el legado familiar.",
  },
  {
    movieKey: "1604",
    movieName: "Scarface",
    directorMovie: "Brian De Palma",
    categorieMovie: "Crime",
    imageMovie: "../../Images/Drama/scarface.jpg",
    dateMovie: "1983",
    durationMovie: "170",
    descriptionMovie:
      "Un inmigrante cubano se convierte en el rey del narcotráfico en Miami, pero su ambición lo lleva a la ruina.",
  },
  {
    movieKey: "1605",
    movieName: "Goodfellas",
    directorMovie: "Martin Scorsese",
    categorieMovie: "Crime",
    imageMovie: "../../Images/goodfellas.webp",
    dateMovie: "1990",
    durationMovie: "146",
    descriptionMovie:
      "La historia de un joven que se une a la mafia y se enfrenta a las consecuencias de su vida criminal.",
  },
  {
    movieKey: "1606",
    movieName: "City of God",
    directorMovie: "Fernando Meirelles",
    categorieMovie: "Crime",
    imageMovie: "../../Images/cityOfGod.webp",
    dateMovie: "2002",
    durationMovie: "130",
    descriptionMovie:
      "Un joven fotógrafo documenta la vida en las favelas de Río de Janeiro mientras narra la historia de su comunidad.",
  },
  {
    movieKey: "1607",
    movieName: "The Departed",
    directorMovie: "Martin Scorsese",
    categorieMovie: "Crime",
    imageMovie: "../../Images/theDeparted.webp",
    dateMovie: "2006",
    durationMovie: "151",
    descriptionMovie:
      "Un policía encubierto y un informante de la mafia intentan descubrirse mutuamente en un juego peligroso.",
  },
  {
    movieKey: "1608",
    movieName: "Trainspotting",
    directorMovie: "Danny Boyle",
    categorieMovie: "Crime",
    imageMovie: "../../Images/Drama/trainspotting.jpg",
    dateMovie: "1996",
    durationMovie: "94",
    descriptionMovie:
      "Un grupo de jóvenes heroinómanos lucha por encontrar sentido en sus vidas mientras se enfrentan a la adicción y la delincuencia.",
  },
  {
    movieKey: "1609",
    movieName: "Catch Me If You Can",
    directorMovie: "Steven Spielberg",
    categorieMovie: "Crime",
    imageMovie: "../../Images/catchMeIfYouCan.webp",
    dateMovie: "2002",
    durationMovie: "141",
    descriptionMovie:
      "La historia real de un joven estafador que se hace pasar por piloto, doctor y abogado, mientras es perseguido por un agente del FBI.",
  },
  {
    movieKey: "1610",
    movieName: "Zodiac",
    directorMovie: "David Fincher",
    categorieMovie: "Crime",
    imageMovie: "../../Images/Drama/zodiac.jpg",
    dateMovie: "2007",
    durationMovie: "157",
    descriptionMovie:
      "La investigación del infame asesino del Zodiaco en San Francisco y su impacto en la vida de quienes lo persiguen.",
  },
  {
    movieKey: "1701",
    movieName: "The Sound of Music",
    directorMovie: "Robert Wise",
    categorieMovie: "Musical",
    imageMovie: "../../Images/theSoundOfMusic.webp",
    dateMovie: "1965",
    durationMovie: "174",
    descriptionMovie:
      "Una joven postulante a novicia se convierte en la niñera de los siete hijos de un capitán viudo, y les enseña a amar la música.",
  },
  {
    movieKey: "1702",
    movieName: "West Side Story",
    directorMovie: "Robert Wise y Jerome Robbins",
    categorieMovie: "Musical",
    imageMovie: "../../Images/westSideStory.webp",
    dateMovie: "1961",
    durationMovie: "152",
    descriptionMovie:
      "Una adaptación moderna de 'Romeo y Julieta' que explora la rivalidad entre dos bandas en Nueva York.",
  },
  {
    movieKey: "1703",
    movieName: "Mamma Mia!",
    directorMovie: "Phyllida Lloyd",
    categorieMovie: "Musical",
    imageMovie: "../../Images/mammaMia.webp",
    dateMovie: "2008",
    durationMovie: "108",
    descriptionMovie:
      "Una joven se prepara para su boda y busca al padre que nunca conoció, usando las canciones de ABBA.",
  },
  {
    movieKey: "1704",
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
    movieKey: "1705",
    movieName: "Chicago",
    directorMovie: "Rob Marshall",
    categorieMovie: "Musical",
    imageMovie: "../../Images/chicago.webp",
    dateMovie: "2002",
    durationMovie: "113",
    descriptionMovie:
      "Una mujer que está en la cárcel por asesinato busca la fama en la ciudad de Chicago durante la década de 1920.",
  },
  {
    movieKey: "1706",
    movieName: "Hairspray",
    directorMovie: "Adam Shankman",
    categorieMovie: "Musical",
    imageMovie: "../../Images/hairspray.webp",
    dateMovie: "2007",
    durationMovie: "117",
    descriptionMovie:
      "Una adolescente lucha por conseguir un lugar en un programa de televisión de danza en un ambiente de discriminación racial.",
  },
  {
    movieKey: "1707",
    movieName: "Rent",
    directorMovie: "Chris Columbus",
    categorieMovie: "Musical",
    imageMovie: "../../Images/rent.webp",
    dateMovie: "2005",
    durationMovie: "135",
    descriptionMovie:
      "Un grupo de amigos bohemios en Nueva York lucha con la vida, el amor y la pérdida en medio de la epidemia del SIDA.",
  },
  {
    movieKey: "1708",
    movieName: "Into the Woods",
    directorMovie: "Rob Marshall",
    categorieMovie: "Musical",
    imageMovie: "../../Images/intoTheWoods.webp",
    dateMovie: "2014",
    durationMovie: "125",
    descriptionMovie:
      "Una mezcla de cuentos de hadas que sigue a un panadero y su esposa en su búsqueda de un niño.",
  },
  {
    movieKey: "1709",
    movieName: "The Greatest Showman",
    directorMovie: "Michael Gracey",
    categorieMovie: "Musical",
    imageMovie: "../../Images/theGreatestShowman.webp",
    dateMovie: "2017",
    durationMovie: "105",
    descriptionMovie:
      "La historia de P.T. Barnum y su visión de crear un espectáculo extraordinario que se convirtió en un fenómeno mundial.",
  },
  {
    movieKey: "1710",
    movieName: "A Star is Born",
    directorMovie: "Bradley Cooper",
    categorieMovie: "Musical",
    imageMovie: "../../Images/aStarIsBorn.webp",
    dateMovie: "2018",
    durationMovie: "136",
    descriptionMovie:
      "Un músico veterano ayuda a una joven cantante a alcanzar la fama mientras lucha con sus propios problemas.",
  },
];

const actionMovies = movies.filter(
  (movie) => movie.categorieMovie === "Action"
);
const SciFi = movies.filter((movie) => movie.categorieMovie === "Sci-Fi");
const comedyMovies = movies.filter(
  (movie) => movie.categorieMovie === "Comedy"
);
const thriller = movies.filter((movie) => movie.categorieMovie === "Thriller");
const drama = movies.filter((movie) => movie.categorieMovie === "Drama");
const crime = movies.filter((movie) => movie.categorieMovie === "Crime");
const musical = movies.filter((movie) => movie.categorieMovie === "Musical");
const animation = movies.filter(
  (movie) => movie.categorieMovie === "Animation"
);
const biography = movies.filter(
  (movie) => movie.categorieMovie === "Biography"
);
const horror = movies.filter((movie) => movie.categorieMovie === "Horror");
const romance = movies.filter((movie) => movie.categorieMovie === "Romance");
const war = movies.filter((movie) => movie.categorieMovie === "War");

const App = () => {
  return (
    <div className="div-container">
      <NavBar movies={movies} />
      <CarouselMovies categorieMovies={actionMovies} />
      <CarouselMovies categorieMovies={SciFi} />
      <CarouselMovies categorieMovies={comedyMovies} />
      <CarouselMovies categorieMovies={thriller} />
      <CarouselMovies categorieMovies={drama} />
      <CarouselMovies categorieMovies={crime} />
      <CarouselMovies categorieMovies={musical} />
      <CarouselMovies categorieMovies={animation} />
      <CarouselMovies categorieMovies={biography} />
      <CarouselMovies categorieMovies={horror} />
      <CarouselMovies categorieMovies={romance} />
      <CarouselMovies categorieMovies={war} />
    </div>
  );
};

export default App;
