import { Schema,model,Types } from "mongoose";

const collection = 'activities';

const schema = new Schema({
    name : { type: String, required: true },
    image : { type: String, required: true },
    description : { type: String, required: true }
}, {
    timestamps: true
});

const Activity = model(collection, schema);

export default Activity;