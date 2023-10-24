import express from 'express';
import * as projectController from '../controllers/projectController.js';
import { checkUserAuth } from '../middleware/checkUserAuth.js';

const router = express.Router();

router.route('/')
  .get(checkUserAuth, projectController.getProjects)
  .post(checkUserAuth, projectController.createProject);

router.route('/:id')
  .get(checkUserAuth, projectController.getProject)
  .put(checkUserAuth, projectController.updateProject)
  .delete(checkUserAuth, projectController.deleteProject);

export default router;