import { Schema,model,Types } from "mongoose";

const collection = 'itineraries';

const schema = new Schema({
    name : { type: String, required: true },
    image : { type: String, required: true },
    price : {type: Number, required: true},
    duration: {type: Number, required: true},
    likes: {type: Number, required: true},
    hashtags : [{type: String, required: true}],
    comments: {type: Types.ObjectId, ref:'comments' },
    activities: {type: Types.ObjectId, ref:'activities' }
}, {
    timestamps: true
});

const Itinerary = model(collection, schema);

export default Itinerary;