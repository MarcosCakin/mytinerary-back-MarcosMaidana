import Itinerary from '../models/Itinerary.js'

const controller = {
    getItineraries: async (req, res) => {

        let queries = {}

        if(req.query.itinerary) {
            queries.itinerary = new RegExp(`^${req.query.itinerary}`, 'i')
        }

        try {
            const itineraries = await Itinerary.find(queries);
            if (itineraries.length > 0){
                return res.status(200).json({
                    success: true,
                    itineraries  
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontraron itinerarios'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false, 
                message:"error al obtener los itinerarios"
            })
        }
    },

    createItinerary: async (req, res) => {
        try {
            const newitinerary = await Itinerary.create(req.body);
            return res.status(201).json({
                success:true, 
                message:"Itinerary created"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                succes:false, 
                message:"failed to create the itinerary"
            })
        }
    },

    updateItinerary: async (req, res) => {
        try {
            await Itinerary.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success:true,
                message:'The itinerary has succesfully updated'
            })
        } catch (error) {
            return res.status(500).json({
                succes:false, 
                message:"error updating the itinerary"
            })
        }
    },

    deleteItinerary: async (req, res) => {
        try {
            await Itinerary.deleteOne({_id: req.params.id}, )
            return res.status(200).json({
                success:true,
                message:'Itinerary has succesfully removed'
            })
        } catch (error) {
            return res.status(500).json({
                success:false, 
                message:"Error al borrar el itinerario"
            })
        }
    }    
};

export default controller;
