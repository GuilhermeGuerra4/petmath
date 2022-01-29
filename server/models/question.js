import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: { type: String, unique: true },
});

export const Question = mongoose.model("question", questionSchema);