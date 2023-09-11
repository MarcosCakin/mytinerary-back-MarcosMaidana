import express from 'express';
import cityController from '../controllers/city.controller.js'
import { logPostCities } from '../middlewares/example.middleware.js'
import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router();

const { getCities, createCity, getCityById, updateCity, deleteCity } = cityController;

router.get('/', getCities);

router.post('/', logPostCities, createCity);

router.get('/:id', getCityById);

router.put('/:id', updateCity);

router.delete('/:id', isAdmin, deleteCity);

export default router;