// const GAMES = [

//   {
//     title: "FIFA 23",
//     platform: "PC",
//     price: 20503,
//     genres: [
//       {id:"6T1Sz0vpQZuqqsVefKkH", name: "Deportes" },{id:"QtYarntNdViJcyQVmDOL", name: "Multijugador"},{id:"zDNkMiGcq2UhvLVle9PB", name: "Un jugador" }
//       // "6T1Sz0vpQZuqqsVefKkH", "QtYarntNdViJcyQVmDOL", "zDNkMiGcq2UhvLVle9PB"
//     ],
//     description:
//       "Es un simulador de fútbol desarrollado por EA Sports. Como parte de la exitosa serie FIFA, el juego ofrece una experiencia realista de fútbol que incluye equipos, ligas y jugadores reales. Los jugadores pueden competir en partidos de fútbol, administrar equipos, participar en modos de carrera y más. FIFA 23 presenta mejoras gráficas y de jugabilidad con respecto a las entregas anteriores.",
//     stock: 10,
//     developers: ["EA"],
//     images: [
//       "https://cdn-products.eneba.com/resized-products/SqEFwIHCz6u0T8pSM0ghGWZTrfv23E70YbrliNLmHDY_155x92_1x-0.jpg",
//       "https://cdn-products.eneba.com/resized-products/SqEFwIHCz6u0T8pSM0ghGWZTrfv23E70YbrliNLmHDY_350x200_1x-0.jpg",
//     ],
//   },
//   {
//     title: "Red Dead Redemption 2",
//     platform: "PC",
//     price: 17239,
//     genres: [ 
//       {id:"USfnlvYAhuL9EQrVjKc1",name: "Acción"}, {id:"QtYarntNdViJcyQVmDOL",name:"Multijugador"}, {id:"zDNkMiGcq2UhvLVle9PB",name:"Un jugador"}, {id:"8D1KheCwnw2YDeiIpfqf",name:"Aventuras"}
//       // "USfnlvYAhuL9EQrVjKc1", "QtYarntNdViJcyQVmDOL", "zDNkMiGcq2UhvLVle9PB", "8D1KheCwnw2YDeiIpfqf"
//     ],
//     developers: ["Rockstar Games"],
//     description:
//       "Es un juego de acción y aventuras desarrollado por Rockstar Games. Ambientado en el salvaje oeste estadounidense, el juego sigue la historia de Arthur Morgan, un forajido y miembro de la banda de Van der Linde. El jugador puede explorar un vasto mundo abierto, participar en tiroteos, realizar robos y tomar decisiones que afectan la moralidad del personaje. Red Dead Redemption 2 es aclamado por su narrativa profunda, personajes memorables y su impresionante atención al detalle.",
//     stock: 10,
//     images: [
//       "https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_155x92_1x-0.jpeg",
//       "https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_350x200_1x-0.jpeg",
//     ],
//   },
//   {
//     title: "Dark Souls III",
//     platform: "PC",
//     price: 24334,
//     genres: [
//       {id:"USfnlvYAhuL9EQrVjKc1",name: "Acción"}, {id:"So3XY1qno7nTOAYofIhW",name:"RPG"},
//        {id:"Z3jnsc3dcUxNQIZDuOXb",name:"Horror"}, {id:"8D1KheCwnw2YDeiIpfqf",name:"Aventuras"},
//        {id:"zDNkMiGcq2UhvLVle9PB",name:"Un jugador"}
//       // "USfnlvYAhuL9EQrVjKc1", "So3XY1qno7nTOAYofIhW", "zDNkMiGcq2UhvLVle9PB", "8D1KheCwnw2YDeiIpfqf", "Z3jnsc3dcUxNQIZDuOXb"

//     ],
//     developers: ["FromSoftware"],
//     description:
//       "Es un juego de rol de acción desarrollado por FromSoftware. Conocido por su dificultad desafiante, el juego coloca al jugador en un mundo oscuro y peligroso, lleno de enemigos y jefes temibles. Los jugadores deben luchar estratégicamente y aprender de cada derrota para avanzar en el juego. Dark Souls III es admirado por su jugabilidad profunda, atmósfera envolvente y diseño de niveles ingenioso.",
//     stock: 10,
//     images: [
//       "https://cdn-products.eneba.com/resized-products/BjdEY6u_155x92_1x-0.jpg",
//       "https://cdn-products.eneba.com/resized-products/BjdEY6u_350x200_1x-0.jpg",
//     ],
//   },
//   {
//     title: "Assassin's Creed Valhalla",
//     platform: "PC",
//     price: 15868,
//     genres: [
//       {id:"USfnlvYAhuL9EQrVjKc1",name: "Acción"}, {id:"So3XY1qno7nTOAYofIhW",name:"RPG"},
//       {id:"w4T97o1CWMZR1qKBF6Fu",name:"Tercera persona"}, {id:"8D1KheCwnw2YDeiIpfqf",name:"Aventuras"},
//       // "USfnlvYAhuL9EQrVjKc1", "So3XY1qno7nTOAYofIhW","w4T97o1CWMZR1qKBF6Fu", "8D1KheCwnw2YDeiIpfqf"
//     ],
//     developers: ["Ubisoft Studios"],
//     description:
//       "Es un juego de acción y aventuras desarrollado por Ubisoft. Ambientado en la era vikinga, el jugador toma el papel de Eivor, un guerrero vikingo que lidera a su clan en una invasión de Inglaterra. El juego combina elementos de acción, exploración, sigilo y narrativa para ofrecer una experiencia envolvente. Assassin's Creed Valhalla destaca por su recreación histórica detallada, su sistema de combate y la posibilidad de personalizar la experiencia del jugador.",
//     stock: 10,
//     images: [
//       "https://cdn-products.eneba.com/resized-products/TJr-Wtno2pWrPsA9PqK-pH5KTW2wQ3Dwy0JmZmKD-5s_155x92_1x-0.jpeg",
//       "https://cdn-products.eneba.com/resized-products/TJr-Wtno2pWrPsA9PqK-pH5KTW2wQ3Dwy0JmZmKD-5s_350x200_1x-0.jpeg",
//     ],
//   },
//   {
//     title: "Need for Speed: Most Wanted",
//     platform: "PC",
//     price: 6962,
//     genres: [
//       {id:"USfnlvYAhuL9EQrVjKc1",name: "Acción"}, {id:"8Mg79iHR8wIL9ec1P3jw",name:"Carreras"},
//       {id:"w4T97o1CWMZR1qKBF6Fu",name:"Tercera persona"}, {id:"RhwhO6gIEcXyR3TmcAEp",name:"Primera persona"},
//       // "8Mg79iHR8wIL9ec1P3jw", "USfnlvYAhuL9EQrVjKc1","w4T97o1CWMZR1qKBF6Fu", "RhwhO6gIEcXyR3TmcAEp"
//     ],
//     developers: ["Criterion Games"],
//     description:
//       "Es un juego de carreras desarrollado por Criterion Games. El juego ofrece emocionantes carreras ilegales en el mundo abierto de Fairhaven City. Los jugadores compiten en carreras callejeras, evitan a la policía y buscan convertirse en el corredor más buscado. Need for Speed: Most Wanted es conocido por su estilo de juego de alta velocidad, una amplia variedad de vehículos y su sistema de persecuciones policiales intensas.",
//     stock: 10,
//     images: [
//       "https://cdn-products.eneba.com/resized-products/4TL8Lsr_155x92_1x-0.jpg",
//       "https://cdn-products.eneba.com/resized-products/4TL8Lsr_350x200_1x-0.jpg",
//     ],
//   },
//   {
//     title: "Far Cry 3",
//     platform: "PC",
//     price: 15556,
//     genres: [
//       {id:"USfnlvYAhuL9EQrVjKc1",name: "Acción"},
//       {id:"zDNkMiGcq2UhvLVle9PB",name:"Un jugador"}, {id:"RhwhO6gIEcXyR3TmcAEp",name:"Primera persona"},
//       // "USfnlvYAhuL9EQrVjKc1", "zDNkMiGcq2UhvLVle9PB", "RhwhO6gIEcXyR3TmcAEp"
//     ],
//     developers: ["Ubisoft Studios"],
//     description:
//       "Es un juego de disparos en primera persona de mundo abierto desarrollado por Ubisoft. Situado en una isla tropical peligrosa, el juego sigue a Jason Brody, un turista que se encuentra atrapado en un conflicto con piratas y mercenarios. Los jugadores deben enfrentarse a diversos desafíos, realizar misiones y mejorar sus habilidades para sobrevivir y rescatar a sus amigos. Far Cry 3 es elogiado por su jugabilidad sandbox, entorno exótico y una intrigante narrativa.",
//     stock: 10,
//     images: [
//       "https://cdn-products.eneba.com/resized-products/clqp8A2_155x92_1x-0.jpg",
//       "https://cdn-products.eneba.com/resized-products/clqp8A2_350x200_1x-0.jpg",
//     ],
//   },
//   {
//     title: "GTA V",
//     platform: "PC",
//     price: 15556,
//     genres: [
//       {id:"USfnlvYAhuL9EQrVjKc1",name: "Acción"},
//       {id:"zDNkMiGcq2UhvLVle9PB",name:"Un jugador"}, {id:"RhwhO6gIEcXyR3TmcAEp",name:"Primera persona"},
//       // "USfnlvYAhuL9EQrVjKc1", "zDNkMiGcq2UhvLVle9PB", "RhwhO6gIEcXyR3TmcAEp"
//     ],
//     developers: ["Ubisoft Studios"],
//     description:
//       "Es un juego de acción y aventuras de mundo abierto desarrollado por Rockstar Games. Ambientado en la ficticia ciudad de Los Santos, el juego sigue a tres protagonistas: Michael, un estafador retirado; Franklin, un ladrón callejero; y Trevor, un criminal psicópata. Los jugadores pueden explorar la ciudad, realizar robos, completar misiones y disfrutar de una gran cantidad de actividades y modos en línea. GTA V destaca por su mundo detallado, su sátira social y su impresionante jugabilidad.",
//     stock: 10,
//     images: [
//       "https://cdn-products.eneba.com/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_155x92_1x-0.jpeg",
//       "https://cdn-products.eneba.com/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_350x200_1x-0.jpeg",
//     ],
//   },
// ];

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
//   { id: 10, name: "Tercera persona" },
// ];

import { getDocs, collection, getDoc, doc, addDoc, writeBatch, increment } from "firebase/firestore";
import { db } from "../firebase/config";

const gamesRef = collection(db, "items");
// const genresRef = collection(db, "genres");

export const getGenre = async (genreId) => {
  const genreDocument = doc(db, "genres", genreId);
  const genreDocSnapshot = await getDoc(genreDocument);
  if (genreDocSnapshot.exists())
    return { id: genreDocSnapshot.id, ...genreDocSnapshot.data() };

  return null;
};

// export const getGenres = async () => {
//   let genres = [];
//   const querySnapshot = await getDocs(genresRef);
//   querySnapshot.forEach((doc) => {
//     genres = [...genres, { ...doc.data(), id: doc.id }];
//   });

//   return genres;
// };

// const addGenreName = async (game) => {
//   const genres = await getGenres();
//   // let items = []
//   let newGame = {};
//   // games.forEach(game => {
//   let _foundGenres = [];
//   game.genres.map((genre) => {
//     let _foundGenre = genres.find((_genre) => _genre.id === genre);
//     _foundGenres = [..._foundGenres, _foundGenre];
//   });
//   // items = [...items, { ...game, genres: _foundGenres }]
//   newGame = { ...game, genres: _foundGenres };
//   // })
//   return newGame;
// };

export const getGames = async () => {
  let games = [];
  const querySnapshot = await getDocs(gamesRef);
  querySnapshot.forEach((doc) => {
    games = [...games, { ...doc.data(), id: doc.id }];
  });

  console.log(games)
  let newGames = [];
  // for (const game of games) {
  //   let newGame = await addGenreName(game);
  //   newGames = [...newGames, newGame];
  // }
  return games;
};

export const getGameById = async (id) => {
  const itemsDocument = doc(db, "items", id);
  const itemsDocSnapshot = await getDoc(itemsDocument);
  if (itemsDocSnapshot.exists()) {
    let game = { id: itemsDocSnapshot.id, ...itemsDocSnapshot.data() };
    // game = await addGenreName(game);
    return game;
  }

  return null;
};

export const getGameByGenre = async (genreId) => {
  let gamesGenre = await getGames()

  console.log({gamesGenre})
  console.log("Primero")
  const games = gamesGenre.filter((game) => {
    return game.genres.some(genre => genreId === genre.id)
  });
  console.log("Segundo")
  return games;
};

// export const cargarData = async () => {
//   GAMES.forEach(async (game) => {
//     await addDoc(gamesRef, game)
//   })
// }

export const updateGames = async (items) => {

  const batch = writeBatch(db)

  items.forEach(({id, cantidad}) => {
    batch.update(doc(db,'items',id), {
      stock: increment(-cantidad)
    })
  })

  batch.commit()
};
