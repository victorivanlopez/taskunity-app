import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { checkUserAuth } from '../middleware/checkUserAuth.js';

const router = express.Router();

router.post('/', checkUserAuth, taskController.createTask);

router.route('/:id')
  .get(checkUserAuth, taskController.getTask);

export default router;