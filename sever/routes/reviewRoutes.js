import express from 'express';
import Review from '../modules/review.js';

const router = express.Router();

// GET /api/reviews — ดึงรีวิวทั้งหมด (หรือกรองตาม gameId)
router.get('/', async (req, res) => {
  try {
    let filter = {};
    if (req.query.gameId) {
      filter.game = req.query.gameId;   // กรองตาม game ID
    }
    const reviews = await Review.find(filter).populate('game', 'title developer');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/reviews/:id — ดึงรีวิวตัวเดียว
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('game', 'title developer');
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/reviews — เพิ่มรีวิวใหม่
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/reviews/:id — แก้ไขรีวิว
router.put('/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/reviews/:id — ลบรีวิว
router.delete('/:id', async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
