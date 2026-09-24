import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Game from './modules/game.js';

dotenv.config();

const games = [
  {
    title: "Clair Obscur: Expedition 33",
    developer: "Sandfall Interactive",
    description: "An upcoming reactive turn-based RPG with stunning next-gen visuals, where players lead a desperate expedition to destroy the Paintress.",
    genre: "RPG",
    rating: 5,
    year: 2025,
    image: "./images/expedition33.jpg"
  },
  {
    title: "Astro Bot",
    developer: "Team ASOBI",
    description: "A joyful and inventive 3D platformer that celebrates PlayStation's rich history through incredibly fun and charming gameplay.",
    genre: "Platformer",
    rating: 5,
    year: 2024,
    image: "./images/astrobot.jpg"
  },
  {
    title: "Baldur's Gate 3",
    developer: "Larian Studios",
    description: "A story-rich, party-based RPG set in the universe of Dungeons & Dragons.",
    genre: "RPG",
    rating: 5,
    year: 2023,
    image: "./images/baldur'sgate3.jpg"
  },
  {
    title: "Elden Ring",
    developer: "FromSoftware",
    description: "A sprawling dark fantasy action-RPG created in collaboration with George R. R. Martin.",
    genre: "Action RPG",
    rating: 5,
    year: 2022,
    image: "./images/eldenring.jpg"
  },
  {
    title: "It Takes Two",
    developer: "Hazelight Studios",
    description: "A genre-bending platform adventure created purely for co-op.",
    genre: "Co-op Adventure",
    rating: 4,
    year: 2021,
    image: "./images/ittakestwo.jpg"
  },
  {
    title: "The Last of Us Part II",
    developer: "Naughty Dog",
    description: "An intense, harrowing, and emotional adventure following Ellie and Abby.",
    genre: "Action Adventure",
    rating: 5,
    year: 2020,
    image: "./images/thelastofus2.jpg"
  },
  {
    title: "Sekiro: Shadows Die Twice",
    developer: "FromSoftware",
    description: "Carve your own clever path to vengeance in an all-new adventure.",
    genre: "Action",
    rating: 5,
    year: 2019,
    image: "./images/sekiro.jpg"
  },
  {
    title: "God of War",
    developer: "Santa Monica Studio",
    description: "Kratos and his son Atreus embark on a mythic journey through Norse realms.",
    genre: "Action Adventure",
    rating: 5,
    year: 2018,
    image: "./images/godofwar.jpg"
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    description: "Step into a world of discovery, exploration, and adventure.",
    genre: "Action Adventure",
    rating: 5,
    year: 2017,
    image: "./images/zelda.jpg"
  },
  {
    title: "Overwatch",
    developer: "Blizzard Entertainment",
    description: "A team-based multiplayer first-person shooter featuring a diverse cast of heroes.",
    genre: "FPS",
    rating: 4,
    year: 2016,
    image: "./images/Overwatch.png"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log('Connected to MongoDB');

    // ลบข้อมูลเก่าออกก่อน (ถ้ามี)
    await Game.deleteMany({});
    console.log('Cleared old games');

    // เพิ่มข้อมูลใหม่
    const result = await Game.insertMany(games);
    console.log(`Seeded ${result.length} games!`);

    mongoose.connection.close();
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
}

seed();
