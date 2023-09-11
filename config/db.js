import mongoose from "mongoose";

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Database conected'))
    .catch((err) => console.log('err'));
