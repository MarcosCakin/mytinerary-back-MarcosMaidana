import express from 'express';
import userController from '../controllers/user.controller.js';
import { validator } from "../middlewares/validator.js";
import { userSignup } from '../schema/user.schema.js'

const router = express.Router();

const { getUsers, createUser, deleteUser } = userController;

router.get('/', getUsers);

router.post('/', validator(userSignup), createUser);

router.delete('/:id', deleteUser);

export default router;