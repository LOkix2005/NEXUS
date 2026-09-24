import mongoose from "mongoose";


const gameSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  developer:   { type: String, required: true },
  description: { type: String },
  genre:       { type: String },
  rating:      { type: Number, min: 1, max: 5 },
  year:        { type: Number },
  image:       { type: String }
}, { timestamps: true });

export default mongoose.model('Game', gameSchema);
