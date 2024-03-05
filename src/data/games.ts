export interface IGames {
    id: number;
    name: string;
    platform: string;
    genre: string;
    releaseDate: string;
    rating: string;
    developer: string;
    ratingScore: number;
    image: string;
}

const games: IGames[] = [
    {
        id: 1,
        name: "The Witcher 3: Wild Hunt",
        platform: "PlayStation 4",
        genre: "Action RPG",
        releaseDate: "2015-05-19",
        rating: "Mature",
        developer: "CD Projekt Red",
        ratingScore: 4,
        image:
            "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
    },
    {
        id: 2,
        name: "Red Dead Redemption 2",
        platform: "Xbox One",
        genre: "Action Adventure",
        releaseDate: "2018-10-26",
        rating: "Mature",
        developer: "Rockstar Games",
        ratingScore: 5,
        image:
            "https://store-images.s-microsoft.com/image/apps.58752.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.0cf58754-9802-46f8-8557-8d3ff32a627a?q=90&w=480&h=270",
    },
    {
        id: 3,
        name: "The Legend of Zelda: Breath of the Wild",
        platform: "Nintendo Switch",
        genre: "Action Adventure",
        releaseDate: "2017-03-03",
        rating: "Everyone",
        developer: "Nintendo",
        ratingScore: 2,
        image:
            "https://assets.nuuvem.com/image/upload/v1/products/5e49d770d597ec0f96e130bd/sharing_images/tmffdu3gugeb5al41qil.jpg",
    },
    {
        id: 4,
        name: "Fortnite",
        platform: "PC",
        genre: "Battle Royale",
        releaseDate: "2017-07-25",
        rating: "Teen",
        developer: "Epic Games",
        ratingScore: 4,
        image:
            "https://cdn2.unrealengine.com/25br-s25-egs-launcher-pdp-2560x1440-alt-logo-2560x1440-130a7d39cc26.jpg",
    },
    {
        id: 5,
        name: "Cyberpunk 2077",
        platform: "PlayStation 5",
        genre: "Action RPG",
        releaseDate: "2020-12-10",
        rating: "Mature",
        developer: "CD Projekt Red",
        ratingScore: 1,
        image:
            "https://cyberpunk-static.qtlglb.com/build/images/social-thumbnail-en-ddcf4d23.jpg",
    },

    {
        id: 7,
        name: "Grand Theft Auto V",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2014-11-18",
        rating: "Mature",
        developer: "Rockstar North",
        ratingScore: 4.8,
        image: "https://viciados.net/wp-content/uploads/2023/12/GTA-5-Liberty-City-DLC-Rockstar-Games-GTA-4-IV-V-Grand-Theft-Auto-Niko-B-2024.webp"
    },

    {
        id: 8,
        name: "Super Mario Odyssey",
        platform: "Nintendo Switch",
        genre: "Platformer",
        releaseDate: "2017-10-27",
        rating: "Everyone 10+",
        developer: "Nintendo",
        ratingScore: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/81AVCqjb8ZL._SL1500_.jpg"
    },
    {
        id: 9,
        name: "Horizon Zero Dawn",
        platform: "PlayStation 4",
        genre: "Action RPG",
        releaseDate: "2017-02-28",
        rating: "Teen",
        developer: "Guerrilla Games",
        ratingScore: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/I/91TWknZqclL._SL1500_.jpg"
    },
    {
        id: 10,
        name: "Super Smash Bros. Ultimate",
        platform: "Nintendo Switch",
        genre: "Fighting",
        releaseDate: "2018-12-07",
        rating: "Everyone 10+",
        developer: "Nintendo",
        ratingScore: 4.9,
        image: "https://images-na.ssl-images-amazon.com/images/I/91gAdJm8zML._SL1500_.jpg"
    },
    {
        id: 11,
        name: "God of War",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2018-04-20",
        rating: "Mature",
        developer: "Santa Monica Studio",
        ratingScore: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/81Zz9x6AqWL._SL1500_.jpg"
    },
    {
        id: 12,
        name: "Animal Crossing: New Horizons",
        platform: "Nintendo Switch",
        genre: "Life Simulation",
        releaseDate: "2020-03-20",
        rating: "Everyone",
        developer: "Nintendo",
        ratingScore: 4.9,
        image: "https://images-na.ssl-images-amazon.com/images/I/81a%2Bq4vMEfL._SL1500_.jpg"
    },
    {
        id: 13,
        name: "Marvel's Spider-Man",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2018-09-07",
        rating: "Teen",
        developer: "Insomniac Games",
        ratingScore: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/81oLfu5fCVL._SL1500_.jpg"
    },
    {
        id: 14,
        name: "The Elder Scrolls V: Skyrim",
        platform: "PlayStation 4",
        genre: "Action RPG",
        releaseDate: "2011-11-11",
        rating: "Mature",
        developer: "Bethesda Game Studios",
        ratingScore: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/I/81opOxZ2jpL._SL1500_.jpg"
    },
    {
        id: 15,
        name: "Minecraft",
        platform: "Nintendo Switch",
        genre: "Sandbox",
        releaseDate: "2018-06-21",
        rating: "Everyone 10+",
        developer: "Mojang Studios",
        ratingScore: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/I/71QgFElPcgL._SL1500_.jpg"
    },
    {
        id: 16,
        name: "Mario Kart 8 Deluxe",
        platform: "Nintendo Switch",
        genre: "Racing",
        releaseDate: "2017-04-28",
        rating: "Everyone",
        developer: "Nintendo",
        ratingScore: 4.9,
        image: "https://images-na.ssl-images-amazon.com/images/I/81mgEInkJ3L._SL1500_.jpg"
    },
    {
        id: 17,
        name: "The Last of Us Part II",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2020-06-19",
        rating: "Mature",
        developer: "Naughty Dog",
        ratingScore: 4.9,
        image: "https://images-na.ssl-images-amazon.com/images/I/81ZyNb5CcrL._SL1500_.jpg"
    },
    {
        id: 18,
        name: "Super Mario 3D All-Stars",
        platform: "Nintendo Switch",
        genre: "Platformer",
        releaseDate: "2020-09-18",
        rating: "Everyone",
        developer: "Nintendo",
        ratingScore: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/I/81trCyc9xLL._SL1500_.jpg"
    },
    {
        id: 19,
        name: "Uncharted 4: A Thief's End",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2016-05-10",
        rating: "Teen",
        developer: "Naughty Dog",
        ratingScore: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/71XV5R2emWL._SL1500_.jpg"
    },
    {
        id: 20,
        name: "Splatoon 2",
        platform: "Nintendo Switch",
        genre: "Third-Person Shooter",
        releaseDate: "2017-07-21",
        rating: "Everyone 10+",
        developer: "Nintendo",
        ratingScore: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/81Elsh8CjgL._SL1500_.jpg"
    },
    {
        id: 21,
        name: "Bloodborne",
        platform: "PlayStation 4",
        genre: "Action RPG",
        releaseDate: "2015-03-24",
        rating: "Mature",
        developer: "FromSoftware",
        ratingScore: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/91FcWg4O5tL._SL1500_.jpg"
    },
    {
        id: 22,
        name: "Fire Emblem: Three Houses",
        platform: "Nintendo Switch",
        genre: "Tactical RPG",
        releaseDate: "2019-07-26",
        rating: "Teen",
        developer: "Intelligent Systems",
        ratingScore: 4.9,
        image: "https://images-na.ssl-images-amazon.com/images/I/81-j%2BGF64lL._SL1500_.jpg"
    },
    {
        id: 23,
        name: "Persona 5 Royal",
        platform: "PlayStation 4",
        genre: "RPG",
        releaseDate: "2020-03-31",
        rating: "Mature",
        developer: "Atlus",
        ratingScore: 4.9,
        image: "https://images-na.ssl-images-amazon.com/images/I/81YJZCvUxVL._SL1500_.jpg"
    },

    {
        id: 25,
        name: "Call of Duty: Warzone",
        platform: "PlayStation 5",
        genre: "Battle Royale",
        releaseDate: "2020-03-10",
        rating: "Mature",
        developer: "Infinity Ward, Raven Software",
        ratingScore: 4.5,
        image: "https://images-na.ssl-images-amazon.com/images/I/81ch%2B6-GBZL._SL1500_.jpg"
    },
    {
        id: 26,
        name: "Super Smash Bros. Ultimate",
        platform: "Nintendo Switch",
        genre: "Fighting",
        releaseDate: "2018-12-07",
        rating: "Everyone 10+",
        developer: "Nintendo, Bandai Namco Studios, Sora Ltd.",
        ratingScore: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/71L4jU7vv-L._SL1000_.jpg"
    },
    {
        id: 27,
        name: "The Elder Scrolls V: Skyrim",
        platform: "PC",
        genre: "Action RPG",
        releaseDate: "2011-11-11",
        rating: "Mature",
        developer: "Bethesda Game Studios",
        ratingScore: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/I/71o5lK5x8NL._SL1500_.jpg"
    },
    {
        id: 28,
        name: "Overwatch",
        platform: "PC",
        genre: "Hero Shooter",
        releaseDate: "2016-05-24",
        rating: "Teen",
        developer: "Blizzard Entertainment",
        ratingScore: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/I/71TSeJG4d-L._SL1500_.jpg"
    },
    {
        id: 29,
        name: "FIFA 22",
        platform: "PlayStation 5",
        genre: "Sports",
        releaseDate: "2021-10-01",
        rating: "Everyone",
        developer: "EA Vancouver",
        ratingScore: 4.6,
        image: "https://images-na.ssl-images-amazon.com/images/I/81RDr-a8SKL._SL1500_.jpg"
    },
    {
        id: 30,
        name: "League of Legends",
        platform: "PC",
        genre: "MOBA",
        releaseDate: "2009-10-27",
        rating: "Teen",
        developer: "Riot Games",
        ratingScore: 4.6,
        image: "https://images-na.ssl-images-amazon.com/images/I/61r8ND7X30L._AC_SY879_.jpg"
    },
    {
        id: 31,
        name: "Pokémon Sword and Shield",
        platform: "Nintendo Switch",
        genre: "Role-Playing",
        releaseDate: "2019-11-15",
        rating: "Everyone",
        developer: "Game Freak",
        ratingScore: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/I/81TWMO%2Bp3rL._SL1500_.jpg"
    },

];



export default games;