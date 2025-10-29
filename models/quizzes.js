//Quiz One - Animals:
const quizzes = [
    {
        title: "Animal Quiz",
        questions:
            [
                {
                    question: "Which animal can lift the most weight compared to its body mass?",
                    answers: { A: "Gorila", B: "Ant", C: "Lion", D: "Beetle" },
                    correctAnswer: "D"
                },
                {
                    question: "What is the fastest land animal?",
                    answers: { A: "Gazelle", B: "Cheetah", C: "Panther", D: "Deer" },
                    correctAnswer: "B"
                },
                {
                    question: "What species are dinosuars considered to be the progenitors of?",
                    answers: { A: "Birds", B: "Reptiles", C: "Mammals", D: "Fish" },
                    correctAnswer: "A"
                },
                {
                    question: "What is the heaviest animal currently living on earth",
                    answers: { A: "Elephant", B: "Hippo", C: "White Whale", D: "Giant Squid" },
                    correctAnswer: "C"
                },
                {
                    question: "Which animal is considered to be man's best friend?",
                    answers: { A: "Horse", B: "Cat", C: "Dog", D: "Parrot" },
                    correctAnswer: "C"
                }
            ]
    }, //2nd below
    {
        title: "Math Quiz",
        questions:
            [
                {
                    question: "What is 2¹⁰ equal to?",
                    answers: { A: "512", B: "1024", C: "864", D: "1282" },
                    correctAnswer: "B"
                },
                {
                    question: "What is 3 - 3 * 2 / 4 + 1 equal to?",
                    answers: { A: "2.8", B: "-1", C: "1", D: "2.5" },
                    correctAnswer: "D"
                },
                {
                    question: "What is x if 2x + 5 * (2 - 3) = 95 ?",
                    answers: { A: "100", B: "50", C: "90", D: "-95" },
                    correctAnswer: "B"
                },
                {
                    question: "What is -190 * -10 / -10 * 1.1 equal to",
                    answers: { A: "172", B: "-172", C: "209", D: "-209" },
                    correctAnswer: "D"
                },
                {
                    question: "What is 99.999... * 0.01 equal to?",
                    answers: { A: "1", B: "0.9", C: "9", D: "0.009" },
                    correctAnswer: "A"
                }
            ]
    },
    { // third below
        title: "Physics Quiz",
        questions:
            [
                {
                    question: "What is the fastest measurement for speed?",
                    answers: { A: "Sound", B: "Light", C: "Vibrations", D: "Heat" },
                    correctAnswer: "B"
                },
                {
                    question: "What is considered to be the 4th state of matter?",
                    answers: { A: "Solid", B: "Liquid", C: "Gas", D: "Plasma" },
                    correctAnswer: "D"
                },
                {
                    question: "Which of these historical figures discovered gravity?",
                    answers: { A: "Albert Einstein", B: "Georg Simon Ohm", C: "Marie Curie", D: "Sir Isaac Newton" },
                    correctAnswer: "D"
                },
                {
                    question: "What is the accelaration due to gravity?",
                    answers: { A: "9.8 m/s²", B: "10.2 m/s²", C: "8.8 m/s²", D: "4.2 m/s²" },
                    correctAnswer: "A"
                },
                {
                    question: "Which of these planets in our solar system has the weakest magnetic field",
                    answers: { A: "Saturn", B: "Jupiter", C: "Earth", D: "Venus" },
                    correctAnswer: "D"
                }
            ]
    },
];
module.exports = { quizzes };