import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    balance: { type: String }, 
    pet: {
        type: String,
        hat: String,
        toy: String,
    } 
}); 

export const User = mongoose.model("user", userSchema);
