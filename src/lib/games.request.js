const GAMES = [
  {
    id: 1,
    title: "CyberPunk 2077",
    platform: "PC",
    price: 21300,
    genres: [
      { id: 1, name: "Acción" },
      { id: 4, name: "Un jugador" },
      { id: 2, name: "RPG" },
    ],
    developers: ["CD Projekt RED"],
    description:
      "Es un juego de rol de acción en un mundo abierto desarrollado por CD Projekt Red. Está ambientado en Night City, una megalópolis futurista obsesionada con el poder, la tecnología y la modificación corporal. El jugador asume el papel de V, un mercenario que busca fama y fortuna en este entorno peligroso y lleno de intrigas. El juego se destaca por su profunda narrativa, su entorno visualmente impresionante y la libertad que ofrece para abordar misiones y decisiones de diversas formas.",
    stock: 10,
    images: [
      "https://cdn-products.eneba.com/resized-products/e4F2hNGTi5VjMHS29as0dZaQpCPfP6jbQzhPu_GAQ_U_155x92_1x-0.jpeg",
      "https://cdn-products.eneba.com/resized-products/e4F2hNGTi5VjMHS29as0dZaQpCPfP6jbQzhPu_GAQ_U_350x200_1x-0.jpeg",
    ],
  },
  {
    id: 2,
    title: "The Witcher 3 Wild Hunt",
    platform: "PC",
    price: 10300,
    genres: [
      { id: 1, name: "Acción" },
      { id: 4, name: "Un jugador" },
      { id: 2, name: "RPG" },
    ],
    developers: ["CD Projekt RED"],
    description:
      "Es un juego de rol de acción desarrollado por CD Projekt Red. Basado en la serie de libros de Andrzej Sapkowski, el jugador asume el papel de Geralt de Rivia, un cazador de monstruos conocido como el brujo. Geralt se embarca en una emocionante búsqueda para encontrar a su hija adoptiva mientras explora un mundo abierto vasto y lleno de detalles. El juego es elogiado por su narrativa rica, elecciones morales significativas y un mundo abierto vivo y envolvente.",
    stock: 10,
    images: [
      "https://cdn-products.eneba.com/resized-products/hrvuizL_155x92_1x-0.jpg",
      "https://cdn-products.eneba.com/resized-products/hrvuizL_350x200_1x-0.jpg",
    ],
  },
  {
    id: 3,
    title: "FIFA 23",
    platform: "PC",
    price: 20503,
    genres: [
      { id: 3, name: "Deportes" },
      { id: 6, name: "Multijugador" },
      { id: 4, name: "Un jugador" },
    ],
    description: "Es un simulador de fútbol desarrollado por EA Sports. Como parte de la exitosa serie FIFA, el juego ofrece una experiencia realista de fútbol que incluye equipos, ligas y jugadores reales. Los jugadores pueden competir en partidos de fútbol, administrar equipos, participar en modos de carrera y más. FIFA 23 presenta mejoras gráficas y de jugabilidad con respecto a las entregas anteriores.",
    stock: 10,
    developers: ["EA"],
    images: [
      "https://cdn-products.eneba.com/resized-products/SqEFwIHCz6u0T8pSM0ghGWZTrfv23E70YbrliNLmHDY_155x92_1x-0.jpg",
      "https://cdn-products.eneba.com/resized-products/SqEFwIHCz6u0T8pSM0ghGWZTrfv23E70YbrliNLmHDY_350x200_1x-0.jpg",
    ],
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    platform: "PC",
    price: 17239,
    genres: [
      { id: 1, name: "Acción" },
      { id: 6, name: "Multijugador" },
      { id: 4, name: "Un jugador" },
      { id: 5, name: "Aventuras" },
    ],
    developers: ["Rockstar Games"],
    description: "Es un juego de acción y aventuras desarrollado por Rockstar Games. Ambientado en el salvaje oeste estadounidense, el juego sigue la historia de Arthur Morgan, un forajido y miembro de la banda de Van der Linde. El jugador puede explorar un vasto mundo abierto, participar en tiroteos, realizar robos y tomar decisiones que afectan la moralidad del personaje. Red Dead Redemption 2 es aclamado por su narrativa profunda, personajes memorables y su impresionante atención al detalle.",
    stock: 10,
    images: [
      "https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_155x92_1x-0.jpeg",
      "https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_350x200_1x-0.jpeg",
    ],
  },
  {
    id: 5,
    title: "Dark Souls III",
    platform: "PC",
    price: 24334,
    genres: [
      { id: 1, name: "Acción" },
      { id: 2, name: "RPG" },
      { id: 4, name: "Un jugador" },
      { id: 5, name: "Aventuras" },
      { id: 9, name: "Horror" },
    ],
    developers: ["FromSoftware"],
    description: "Es un juego de rol de acción desarrollado por FromSoftware. Conocido por su dificultad desafiante, el juego coloca al jugador en un mundo oscuro y peligroso, lleno de enemigos y jefes temibles. Los jugadores deben luchar estratégicamente y aprender de cada derrota para avanzar en el juego. Dark Souls III es admirado por su jugabilidad profunda, atmósfera envolvente y diseño de niveles ingenioso.",
    stock: 10,
    images: [
      "https://cdn-products.eneba.com/resized-products/BjdEY6u_155x92_1x-0.jpg",
      "https://cdn-products.eneba.com/resized-products/BjdEY6u_350x200_1x-0.jpg",
    ],
  },
  {
    id: 6,
    title: "Assassin's Creed Valhalla",
    platform: "PC",
    price: 15868,
    genres: [
      { id: 1, name: "Acción" },
      { id: 2, name: "RPG" },
      { id: 10, name: "Tercera persona" },
      { id: 5, name: "Aventuras" },
    ],
    developers: ["Ubisoft Studios"],
    description: "Es un juego de acción y aventuras desarrollado por Ubisoft. Ambientado en la era vikinga, el jugador toma el papel de Eivor, un guerrero vikingo que lidera a su clan en una invasión de Inglaterra. El juego combina elementos de acción, exploración, sigilo y narrativa para ofrecer una experiencia envolvente. Assassin's Creed Valhalla destaca por su recreación histórica detallada, su sistema de combate y la posibilidad de personalizar la experiencia del jugador.",
    stock: 10,
    images: [
      "https://cdn-products.eneba.com/resized-products/TJr-Wtno2pWrPsA9PqK-pH5KTW2wQ3Dwy0JmZmKD-5s_155x92_1x-0.jpeg",
      "https://cdn-products.eneba.com/resized-products/TJr-Wtno2pWrPsA9PqK-pH5KTW2wQ3Dwy0JmZmKD-5s_350x200_1x-0.jpeg",
    ],
  },
  {
    id: 7,
    title: "Need for Speed: Most Wanted",
    platform: "PC",
    price: 6962,
    genres: [
      { id: 8, name: "Carreras" },
      { id: 1, name: "Acción" },
      { id: 10, name: "Tercera persona" },
      { id: 7, name: "Primera persona" },
    ],
    developers: ["Criterion Games"],
    description: "Es un juego de carreras desarrollado por Criterion Games. El juego ofrece emocionantes carreras ilegales en el mundo abierto de Fairhaven City. Los jugadores compiten en carreras callejeras, evitan a la policía y buscan convertirse en el corredor más buscado. Need for Speed: Most Wanted es conocido por su estilo de juego de alta velocidad, una amplia variedad de vehículos y su sistema de persecuciones policiales intensas.",
    stock: 10,
    images: [
      "https://cdn-products.eneba.com/resized-products/4TL8Lsr_155x92_1x-0.jpg",
      "https://cdn-products.eneba.com/resized-products/4TL8Lsr_350x200_1x-0.jpg",
    ],
  },
  {
    id: 8,
    title: "Far Cry 3",
    platform: "PC",
    price: 15556,
    genres: [
      { id: 1, name: "Acción" },
      { id: 4, name: "Un jugador" },
      { id: 7, name: "Primera persona" },
    ],
    developers: ["Ubisoft Studios"],
    description: "Es un juego de disparos en primera persona de mundo abierto desarrollado por Ubisoft. Situado en una isla tropical peligrosa, el juego sigue a Jason Brody, un turista que se encuentra atrapado en un conflicto con piratas y mercenarios. Los jugadores deben enfrentarse a diversos desafíos, realizar misiones y mejorar sus habilidades para sobrevivir y rescatar a sus amigos. Far Cry 3 es elogiado por su jugabilidad sandbox, entorno exótico y una intrigante narrativa.",
    stock: 10,
    images: [
      "https://cdn-products.eneba.com/resized-products/clqp8A2_155x92_1x-0.jpg",
      "https://cdn-products.eneba.com/resized-products/clqp8A2_350x200_1x-0.jpg",
    ],
  },
  {
    id: 9,
    title: "GTA V",
    platform: "PC",
    price: 15556,
    genres: [
      { id: 1, name: "Acción" },
      { id: 4, name: "Un jugador" },
      { id: 7, name: "Primera persona" },
    ],
    developers: ["Ubisoft Studios"],
    description: "Es un juego de acción y aventuras de mundo abierto desarrollado por Rockstar Games. Ambientado en la ficticia ciudad de Los Santos, el juego sigue a tres protagonistas: Michael, un estafador retirado; Franklin, un ladrón callejero; y Trevor, un criminal psicópata. Los jugadores pueden explorar la ciudad, realizar robos, completar misiones y disfrutar de una gran cantidad de actividades y modos en línea. GTA V destaca por su mundo detallado, su sátira social y su impresionante jugabilidad.",
    stock: 10,
    images: [
      "https://cdn-products.eneba.com/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_155x92_1x-0.jpeg",
      "https://cdn-products.eneba.com/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_350x200_1x-0.jpeg",
    ],
  },
];

// const GENRES = [
//   { id: 1, name: "Acción" },
//   { id: 2, name: "RPG" },
//   { id: 3, name: "Deportes" },
//   { id: 4, name: "Un jugador" },
//   { id: 5, name: "Aventuras" },
//   { id: 6, name: "Multijugador" },
//   { id: 7, name: "Primera persona" },
//   { id: 8, name: "Carreras" },
//   { id: 9, name: "Horror" },
//   { id: 10, name: "Tercera persona"}
// ];

export const getGames = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(GAMES);
    }, 700);
  });
};

export const getGameById = (id) => {
  const game = GAMES.find((game) => {
    return game.id === parseInt(id);
  });
  return new Promise((res) => {
    setTimeout(() => {
      res(game);
    }, 500);
  });
};

export const getGameByGenre = (genreId) => {
  const games = GAMES.filter((game) => {
    return game.genres.some((genre) => genre.id === parseInt(genreId));
  });
  return new Promise((res) => {
    setTimeout(() => {
      res(games);
    }, 500);
  });
};
