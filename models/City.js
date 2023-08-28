import { Schema,model,Types } from "mongoose";

const collection = 'cities';

const schema = new Schema({
    city : { type: String, required: true },
    country : { type: String, required: true },
    image : { type: String, required: true },
    description : { type: String, required: true },
    chart : { type: String, required: true },
    user : {type: Types.ObjectId, ref: 'users'}
}, {
    timestamps: true
});

const City = model(collection, schema);

export default City;