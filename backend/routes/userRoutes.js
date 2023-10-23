import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.post('/', userController.createUser);
router.post('/login', userController.authUser);
router.get('/confirm/:token', userController.confirmUser);
router.post('/forgot-password', userController.sendEmailPasswordReset);

export default router;