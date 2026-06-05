const quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Dream big and dare to fail.",
    "Learning never exhausts the mind.",
    "Stay hungry, stay foolish.",
    "Code today, lead tomorrow.",
    "Every expert was once a beginner.",
    "Consistency beats motivation.",
    "Your future is created by what you do today."
];

const quoteText = document.getElementById("quote");
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    const randomIndex = Math.floor(
        Math.random() * quotes.length
    );

    quoteText.textContent = quotes[randomIndex];
});