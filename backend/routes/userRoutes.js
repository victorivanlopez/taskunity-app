import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({name: 'Víctor Iván López'});
});

export default router;