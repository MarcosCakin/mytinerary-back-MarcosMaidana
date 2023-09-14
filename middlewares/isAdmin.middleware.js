import User from "../models/User.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.query.userId)

    if ( user.role == "admin") {
      return next();
    }
    return res.status(401).json({
      success: false,
      message: "User not allowed to delete or modify cities",
    })
  } catch (error) {
    return res.status(500).json({
        success:false,
        message: 'Internal server error isAdmin middleware'
    })
  }
};
