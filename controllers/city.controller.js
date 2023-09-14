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
                message:'No cities found'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false, 
                message:"error getting cities"
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
                message: 'Event could not be found'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error getting event'
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
                message:"error to create city"
            })
        }
    },

    updateCity: async (req, res) => {
        try {
            await City.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success:true,
                message:'City updated correctly'
            })
        } catch (error) {
            return res.status(500).json({
                succes:false, 
                message:"Error to update city"
            })
        }
    },

    deleteCity: async (req, res) => {
        try {
            await City.deleteOne({_id: req.params.id}, )
            return res.status(200).json({
                success:true,
                message:'The city has been removed correctly'
            })
        } catch (error) {
            return res.status(500).json({
                success:false, 
                message:"Error to delete city"
            })
        }
    }    
};

export default controller;
