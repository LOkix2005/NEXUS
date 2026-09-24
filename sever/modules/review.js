import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  game: { 
    type: mongoose.Schema.Types.ObjectId,   
    ref: 'Game',                             
    required: true 
  },
  reviewer:  { type: String, required: true },
  comment:   { type: String, required: true },
  score:     { type: Number, min: 1, max: 10, required: true }
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);
