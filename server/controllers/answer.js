import { Answer } from '../models/answer.js';

function success(res, payload) {
    return res.status(200).json(payload)
}

export const getAnswers = async (req,res) => {
    try {
      const answer = await Answer.find({})
      return success(res, answer)
    } catch (err) {
      console.log(err)
    }
}