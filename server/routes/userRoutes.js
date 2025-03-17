// Desc: User routes
// Auth: Logged In
// Access: Private
// Data: User
// Validations: User ID
// Dependencies: express, userController, authMiddleware
import express from 'express';
import UserController from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/:id', authMiddleware, UserController.getUser);

export default router;