import User from "../models/User.js";

const controller = {
    getUsers : async (req, res) => {
        let queries = {}
        if(req.query.user) {
            queries.user = new RegExp(`^${req.query.user}`, 'i')
        }
        try {
            const users = await User.find(queries);
                if (users.length > 0){
                    return res.status(200).json({
                        success: true,
                        users  
                    })
                }
                return res.status(404).json({
                    success:false,
                    message:'No se encontraron usuarios'
                })
    
            } catch (error) {
                console.log(error)
                return res.status(500).json({
                    success:false, 
                    message:"error al obtener los usuarios"
                })
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);

            return res.status(200).json({
                success: true, 
                message:"Usuario creado con exito"
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                message: "Error al crear un usuario"
            })
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.deleteOne({_id: req.params.id}, )
            return res.status(200).json({
                success:true,
                message:'El usuario se elimino con exito'
            })
        } catch (error) {
            return res.status(500).json({
                succes:false, 
                message:"Error al borrar el usuario"
            })
        }
    }    
}

export default controller;