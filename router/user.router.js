import express from 'express';
import userController from '../controllers/user.controller.js';
import { validator } from '../middlewares/validator.js';
import { createUserSchema } from '../schema/User.schema.js';

const router = express.Router();

const { getUsers, createUser, deleteUser } = userController;

router.get('/', getUsers);

router.post('/', validator(createUserSchema), createUser);

router.delete('/:id', deleteUser);

export default router;