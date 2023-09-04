import City from '../models/City.js'

const controller = {
    getCities: async (req, res) => {

        let queries = {}

        if(req.query.city) {
            queries.city = new RegExp(`^${req.query.city}`, 'i')
        }

        try {
            const cities = await City.find(queries)
            .populate('itinerary', 'name image price duration likes hashtags')
            .populate('user', 'name image');

            if (cities.length > 0){
                return res.status(200).json({
                    success: true,
                    cities  
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontraron ciudades'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false, 
                message:"error al obtener las ciudades"
            })
        }
    },
    
    getCityById: async (req, res) => {
        try {
            const oneCity = await City.findById(req.params.id)
            .populate('itinerary', 'name image price duration likes hashtags')
            .populate('user', 'name image');

            if(oneCity) {
                return res.status(200).json({
                    success: true,
                    city: oneCity
                })
            }
            return res.status(404).json({
                success: false,
                message: 'No se pudo encontrar el evento'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener el evento'
            })
        }
    },

    createCity: async (req, res) => {
        try {
            const newCity = await City.create(req.body);
            return res.status(201).json({
                success:true, 
                message:"city created"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                succes:false, 
                message:"error al crear la city"
            })
        }
    },

    updateCity: async (req, res) => {
        try {
            await City.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success:true,
                message:'El evento se actualizo con exito'
            })
        } catch (error) {
            return res.status(500).json({
                succes:false, 
                message:"Error al actualizar la city"
            })
        }
    },

    deleteCity: async (req, res) => {
        try {
            await City.deleteOne({_id: req.params.id}, )
            return res.status(200).json({
                success:true,
                message:'El evento se elimino con exito'
            })
        } catch (error) {
            return res.status(500).json({
                success:false, 
                message:"Error al borrar la city"
            })
        }
    }    
};

export default controller;
