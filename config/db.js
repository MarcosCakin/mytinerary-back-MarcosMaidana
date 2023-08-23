import mongoose from "mongoose";

mongoose.connect(process.env.MONGO)
    .then(() => console.log('data base conected'))
    .catch((err) => console.log('err'));
