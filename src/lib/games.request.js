const GAMES = [
    {
        id: 1,
        title: "CyberPunk 2077",
        platform: "PC",
        price: 21300,
        genres: ["Action", "Single player", "RPG"],
        developers: ["CD Projekt RED"],
        images: [
        "https://cdn-products.eneba.com/resized-products/e4F2hNGTi5VjMHS29as0dZaQpCPfP6jbQzhPu_GAQ_U_155x92_1x-0.jpeg",
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
    {
        id: 3,
        title: "FIFA 23",
        platform: "PC",
        price: 20503,
        genres: ["Deporte", "Multijugador", "Un jugador"],
        developers: ["EA"],
        images: [
        "https://cdn-products.eneba.com/resized-products/SqEFwIHCz6u0T8pSM0ghGWZTrfv23E70YbrliNLmHDY_155x92_1x-0.jpg",
        "https://cdn-products.eneba.com/resized-products/SqEFwIHCz6u0T8pSM0ghGWZTrfv23E70YbrliNLmHDY_350x200_1x-0.jpg",    
        ]
    },
    {
        id: 4,
        title: "Red Dead Redemption 2",
        platform: "PC",
        price: 17239,
        genres: ["Acción", "Multijugador", "Un jugador", "Aventuras"],
        developers: ["Rockstar Games"],
        images: [
        "https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_155x92_1x-0.jpeg",
        "https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_350x200_1x-0.jpeg",    
        ]
    },
    {
        id: 5,
        title: "Dark Souls III",
        platform: "PC",
        price: 24334,
        genres: ["Acción", "RPG", "Un jugador", "Aventuras", "Horror"],
        developers: ["FromSoftware"],
        images: [
        "https://cdn-products.eneba.com/resized-products/BjdEY6u_155x92_1x-0.jpg",
        "https://cdn-products.eneba.com/resized-products/BjdEY6u_350x200_1x-0.jpg",    
        ]
    },
    {
        id: 6,
        title: "Assassin's Creed Valhalla",
        platform: "PC",
        price: 15868,
        genres: ["Acción", "RPG", "Tercera Persona", "Aventuras"],
        developers: ["Ubisoft Studios"],
        images: [
        "https://cdn-products.eneba.com/resized-products/TJr-Wtno2pWrPsA9PqK-pH5KTW2wQ3Dwy0JmZmKD-5s_155x92_1x-0.jpeg",
        "https://cdn-products.eneba.com/resized-products/TJr-Wtno2pWrPsA9PqK-pH5KTW2wQ3Dwy0JmZmKD-5s_350x200_1x-0.jpeg",    
        ]
    },
    {
        id: 7,
        title: "Need for Speed: Most Wanted",
        platform: "PC",
        price: 6962,
        genres: ["Carreras", "Acción", "Tercera Persona", "Primera Persona"],
        developers: ["Criterion Games"],
        images: [
        "https://cdn-products.eneba.com/resized-products/4TL8Lsr_155x92_1x-0.jpg",
        "https://cdn-products.eneba.com/resized-products/4TL8Lsr_350x200_1x-0.jpg",    
        ]
    },
    {
        id: 8,
        title: "Far Cry 3",
        platform: "PC",
        price: 15556,
        genres: ["Acción", "Un jugador", "Primera Persona"],
        developers: ["Ubisoft Studios"],
        images: [
        "https://cdn-products.eneba.com/resized-products/clqp8A2_155x92_1x-0.jpg",
        "https://cdn-products.eneba.com/resized-products/clqp8A2_350x200_1x-0.jpg",    
        ]
    },
    {
        id: 9,
        title: "GTA V",
        platform: "PC",
        price: 15556,
        genres: ["Acción", "Un jugador", "Primera Persona"],
        developers: ["Ubisoft Studios"],
        images: [
        "https://cdn-products.eneba.com/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_155x92_1x-0.jpeg",
        "https://cdn-products.eneba.com/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_350x200_1x-0.jpeg",    
        ]
    }
]







export const getGames = () =>{
      return new Promise((res)=>{
          setTimeout(()=>{ 
              res(GAMES)
          },2000)
      })
  }
