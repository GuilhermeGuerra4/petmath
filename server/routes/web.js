import express from 'express';
import { getQuestions } from '../controllers/question.js'
import { getAnswers } from '../controllers/answer.js'

const router = express.Router();

router.get("/questions", getQuestions);
router.get("/answers", getAnswers);


export default router;