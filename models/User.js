import { Schema, model, Types } from "mongoose";

const collection = 'users';

const schema = new Schema({
    name : {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    photo : {type: String},
    online: {type: Boolean, default: false},
    verified: {type: Boolean, default: true}, /* para la verificacion por email. true = ya esta verificado, en teoria*/ 
    verified_code: {type: String}
}, {
    timestamps:true
});

const User = model(collection, schema);

export default User;