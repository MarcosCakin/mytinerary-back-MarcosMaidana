import express from 'express';
import itineraryController from '../controllers/itinerary.controller.js'

const router = express.Router();

const { getItineraries, createItinerary, deleteItinerary, updateItinerary} = itineraryController;

router.get('/', getItineraries);

router.post('/', createItinerary);

router.put('/:id', updateItinerary);

router.delete('/:id', deleteItinerary);

export default router;