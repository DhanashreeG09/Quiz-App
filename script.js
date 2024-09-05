const questions = [
        {
            question: "Who was the first Prime Minister of India?",
            answers: [
                { text: "Mahatma Gandhi", correct: false },
                { text: "Jawaharlal Nehru", correct: true },
                { text: "Sardar Patel", correct: false },
                { text: "Subhash Chandra Bose", correct: false }
            ]
        },
        {
            question: "What is the national animal of India?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Lion", correct: false },
                { text: "Tiger", correct: true },
                { text: "Peacock", correct: false }
            ]
        },
        {
            question: "Which city is known as the Silicon Valley of India?",
            answers: [
                { text: "Mumbai", correct: false },
                { text: "Bangalore", correct: true },
                { text: "Hyderabad", correct: false },
                { text: "Chennai", correct: false }
            ]
        },
        {
            question: "In which year did India gain independence?",
            answers: [
                { text: "1942", correct: false },
                { text: "1947", correct: true },
                { text: "1950", correct: false },
                { text: "1952", correct: false }
            ]
        },
        {
            question: "Which river is considered the holiest in India?",
            answers: [
                { text: "Yamuna", correct: false },
                { text: "Ganga", correct: true },
                { text: "Narmada", correct: false },
                { text: "Godavari", correct: false }
            ]
        },
        {
            question: "Which is the largest state in India by area?",
            answers: [
                { text: "Maharashtra", correct: false },
                { text: "Rajasthan", correct: true },
                { text: "Uttar Pradesh", correct: false },
                { text: "Madhya Pradesh", correct: false }
            ]
        },
        {
            question: "Who is known as the 'Iron Man of India'?",
            answers: [
                { text: "Mahatma Gandhi", correct: false },
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Sardar Vallabhbhai Patel", correct: true },
                { text: "B. R. Ambedkar", correct: false }
            ]
        },
        {
            question: "Which is the national sport of India?",
            answers: [
                { text: "Cricket", correct: false },
                { text: "Hockey", correct: true },
                { text: "Kabaddi", correct: false },
                { text: "Badminton", correct: false }
            ]
        },
            {
                question: "Who was the founder of the Maratha Empire?",
                answers: [
                    { text: "Shivaji Maharaj", correct: true },
                    { text: "Raja Bhoj", correct: false },
                    { text: "Raja Shiv Chhatrapati", correct: false },
                    { text: "Raja Harishchandra", correct: false }
                ]
            },
            {
                question: "In which year was Chhatrapati Shivaji Maharaj born?",
                answers: [
                    { text: "1627", correct: false },
                    { text: "1630", correct: true },
                    { text: "1640", correct: false },
                    { text: "1650", correct: false }
                ]
            },
            {
                question: "Which fort is known as the first fort captured by Shivaji Maharaj?",
                answers: [
                    { text: "Raigad", correct: false },
                    { text: "Torna", correct: true },
                    { text: "Sindhudurg", correct: false },
                    { text: "Pratapgad", correct: false }
                ]
            },
            {
                question: "What was the name of Shivaji Maharaj's mother?",
                answers: [
                    { text: "Sivaganga", correct: false },
                    { text: "Saibai Nimbalkar", correct: false },
                    { text: "Jijabai", correct: true },
                    { text: "Kashibai", correct: false }
                ]
            },
            {
                question: "Which famous battle did Shivaji Maharaj win against Bijapur Sultanate?",
                answers: [
                    { text: "Battle of Palkhed", correct: false },
                    { text: "Battle of Sinhagad", correct: false },
                    { text: "Battle of Pratapgad", correct: true },
                    { text: "Battle of Kolhapur", correct: false }
                ]
            },
            {
                question: "What was the title given to Shivaji Maharaj after he was crowned as king?",
                answers: [
                    { text: "Raja", correct: false },
                    { text: "Chhatrapati", correct: true },
                    { text: "Maharaja", correct: false },
                    { text: "Sultan", correct: false }
                ]
            },
            {
                question: "Which famous leader was a contemporary of Shivaji Maharaj and also fought against him?",
                answers: [
                    { text: "Aurangzeb", correct: true },
                    { text: "Akbar", correct: false },
                    { text: "Babur", correct: false },
                    { text: "Jahangir", correct: false }
                ]
            },
            {
                question: "What was the name of the naval force established by Shivaji Maharaj?",
                answers: [
                    { text: "Maratha Navy", correct: false },
                    { text: "Chauth Naval Force", correct: false },
                    { text: "Koli Fleet", correct: false },
                    { text: "Shivaji's Navy", correct: true }
                ]
            }
        ];
          

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);  // fixed "Click" to "click"
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();
