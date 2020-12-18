import express from 'express';
import UserController from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post('/', UserController.save);
userRoutes.post('/login', UserController.login);
userRoutes.post('/profile', UserController.getProfile);

export default userRoutes;