const GAMES = [
    {
        id: 1,
        title: "CyberPunk 2077",
        platform: "PC",
        price: 21300,
        genres: ["Action", "Single player", "RPG"],
        developers: ["CD Projekt RED"],
        images: [
        "https://cdn-products.eneba.com/resized-products/e4F2hNGTi5VjMHS29as0dZaQpCPfP6jbQzhPu_GAQ_U_95x140_1x-0.jpeg",
        "https://cdn-products.eneba.com/resized-products/e4F2hNGTi5VjMHS29as0dZaQpCPfP6jbQzhPu_GAQ_U_350x200_1x-0.jpeg",    
        ]
    },
    {
        id: 2,
        title: "The Witcher 3 Wild Hunt",
        platform: "PC",
        price: 10300,
        genres: ["Action", "Single player", "RPG"],
        developers: ["CD Projekt RED"],
        images: [
        "https://cdn-products.eneba.com/resized-products/hrvuizL_155x92_1x-0.jpg",
        "https://cdn-products.eneba.com/resized-products/hrvuizL_350x200_1x-0.jpg",    
        ]
    },
]

export const getGames = () =>{
      return new Promise((res)=>{
          setTimeout(()=>{ 
              res(GAMES)
          },2000)
      })
  }
