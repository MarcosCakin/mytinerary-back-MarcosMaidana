import { Schema,model,Types } from "mongoose";

const collection = 'cities';

const schema = new Schema({
    city : { type: String, required: true },
    country : { type: String, required: true },
    url : { type: String, required: true },
}, {
    timestamps: true
});

const City = model(collection, schema);

export default City;