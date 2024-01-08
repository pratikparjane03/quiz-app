const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal on Earth?", answer: "Blue Whale" }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
    const feedbackElement = document.getElementById("feedback");

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answerElement.value = "";
        feedbackElement.textContent = "";
    } else {
        showResult();
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.trim().toLowerCase();
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}.`;
    }

    currentQuestionIndex++;
    displayQuestion();
}

function showResult() {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = "Congratulations! You have completed the quiz.";
}

// Initial display
displayQuestion();
