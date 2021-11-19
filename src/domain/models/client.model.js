import {Schema, model} from 'mongoose'

const ClientSchema = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
    },LastName:{
        type: String,
        trim: true,
    },Email:{
        type: String,
        required: true,
        trim: true,
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Client',ClientSchema);