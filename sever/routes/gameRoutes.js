import express from 'express';
import Game from '../modules/game.js';  // ← import Model ที่สร้างไว้

const router = express.Router();

// GET /api/games — ดึงเกมทั้งหมด
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/games/:id — ดึงเกมตัวเดียว
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// POST /api/games — เพิ่มเกมใหม่
router.post('/', async (req, res) => {
  try {
    const game = new Game(req.body);
    const savedGame = await game.save();
    res.status(201).json(savedGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/games/:id — แก้ไขเกม
router.put('/:id', async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedGame) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.json(updatedGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/games/:id — ลบเกม
router.delete('/:id', async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (!deletedGame) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.json({ message: 'Game deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
