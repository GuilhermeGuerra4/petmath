import { Question } from '../models/question.js';

function success(res, payload) {
    return res.status(200).json(payload)
}

export const getQuestions = async (req,res) => {
    try {
      const questions = await Question.find({})
      return success(res, questions)
    } catch (err) {
      console.log(err)
    }
}