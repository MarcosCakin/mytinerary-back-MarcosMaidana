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
                    message:'No users found'
                })
    
            } catch (error) {
                console.log(error)
                return res.status(500).json({
                    success:false, 
                    message:"error getting users"
                })
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);

            return res.status(200).json({
                success: true, 
                message:"User succesfully created"
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                message: "Error to create user"
            })
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.deleteOne({_id: req.params.id}, )
            return res.status(200).json({
                success:true,
                message:'User succesfully deleted'
            })
        } catch (error) {
            return res.status(500).json({
                succes:false, 
                message:"Error to delete user"
            })
        }
    }    
}

export default controller;