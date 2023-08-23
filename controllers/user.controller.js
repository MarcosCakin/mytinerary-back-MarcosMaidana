import User from "../models/User.js";

const controller = {
    getUsers : (req, res) => {
        res.json({
            user: 'Marcos Marcelo Maidana'
        });
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
    // deleteUser: (req, res) => {},
}

export default controller;