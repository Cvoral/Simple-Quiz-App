const { quizzes } = require('../models/quizzes');

function shuffleArray(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function shuffleObject(obj) {
    const entries = Object.entries(obj);
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    return Object.fromEntries(entries);
}

exports.getHome = (req, res) => {
    res.render('home', { quizzes });
};

exports.startQuiz = (req, res) => {
    const quizIndex = req.params.index;
    const quiz = quizzes[quizIndex];
    if (!quiz) return res.status(404).send("Quiz not found");

    const shuffledQuiz = {
        ...quiz,
        questions: shuffleArray(
            quiz.questions.map(q => ({
                ...q,
                answers: shuffleObject(q.answers)
            }))
        ),
    };

    const encodedQuiz = Buffer.from(JSON.stringify(shuffledQuiz)).toString('base64');

    res.render('quiz', {
        quiz: shuffledQuiz,
        quizIndex,
        qIndex: 0,
        question: shuffledQuiz.questions[0],
        answers: {},
        encodedQuiz
    });
};

exports.nextQuestion = (req, res) => {
    const quizIndex = req.params.index;
    const encodedQuiz = req.body.quizData;
    if (!encodedQuiz) return res.status(400).send("Missing quiz data");

    const quiz = JSON.parse(Buffer.from(encodedQuiz, 'base64').toString('utf8'));

    let qIndex = parseInt(req.body.qIndex, 10);
    const userAnswers = JSON.parse(req.body.answers || '{}');
    const action = req.body.action;

    console.log('Action received:', action); 
    console.log('Current qIndex:', qIndex); 
    console.log('Total questions:', quiz.questions.length); 

   
    if (req.body.answer !== undefined) {
        userAnswers[qIndex] = req.body.answer;
    }

    
    if (action === "next") {
        qIndex++;
        console.log('Moving to next question:', qIndex); 
    } else if (action === "previous") {
        qIndex--;
        console.log('Moving to previous question:', qIndex); 
    } else if (action === "submit") {
        console.log('Submit button clicked! Calculating results...'); 

        let correct = 0;
        quiz.questions.forEach((q, i) => {
            if (userAnswers[i] === q.correctAnswer) correct++;
        });

        return res.render('results', {
            quiz,
            correct,
            total: quiz.questions.length
        });
    }


    if (qIndex >= quiz.questions.length) {
        console.log('Reached end via next button');
        let correct = 0;
        quiz.questions.forEach((q, i) => {
            if (userAnswers[i] === q.correctAnswer) correct++;
        });

        return res.render('results', {
            quiz,
            correct,
            total: quiz.questions.length
        });
    }

    const encodedNextQuiz = Buffer.from(JSON.stringify(quiz)).toString('base64');

    res.render('quiz', {
        quiz,
        quizIndex,
        qIndex,
        question: quiz.questions[qIndex],
        answers: userAnswers,
        encodedQuiz: encodedNextQuiz
    });
};