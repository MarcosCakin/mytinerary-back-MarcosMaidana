import { Schema,model,Types } from "mongoose";

const collection = 'comments';

const schema = new Schema({
    message : { type: String, required: true },
    user : {type: Types.ObjectId, ref: 'users' }
}, {
    timestamps: true
});

const Comment = model(collection, schema);

export default Comment;