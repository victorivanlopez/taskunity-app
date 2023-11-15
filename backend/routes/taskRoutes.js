import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { checkUserAuth } from '../middleware/checkUserAuth.js';

const router = express.Router();

router.post('/', checkUserAuth, taskController.createTask);

router.route('/:id')
  .get(checkUserAuth, taskController.getTask)
  .put(checkUserAuth, taskController.updateTask)
  .delete(checkUserAuth, taskController.deleteTask);

router.post('/toggle/:id', checkUserAuth, taskController.toggleTask);

export default router;