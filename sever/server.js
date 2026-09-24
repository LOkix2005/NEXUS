import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import gameRoutes from './routes/gameRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// API Routes
app.use('/api/games', gameRoutes);
app.use('/api/reviews', reviewRoutes);

// เชื่อม MongoDB แล้วเปิด server
mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
    process.exit(1);
  });