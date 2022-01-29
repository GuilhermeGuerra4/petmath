import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
    answer: { type: String, unique: true },
});

export const Answer = mongoose.model("answer", answerSchema);