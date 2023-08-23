import City from '../models/City.js'

const controller = {
    getCities: async (req, res) => {

        let queries = {}

        if(req.query.city) {
            queries.city = req.query.city
        }


        try {
            const cities = await City.find(queries)
            return res.status(200).json({
                success: true,
                cities  
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false, 
                message:"error al obtener las ciudades"
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
    }
};

export default controller;
