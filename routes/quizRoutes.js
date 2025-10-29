const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/', quizController.getHome);
router.get('/quiz/:index', quizController.startQuiz);
router.post('/quiz/:index/next', quizController.nextQuestion);

module.exports = router;