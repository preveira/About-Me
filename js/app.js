function buttonGame() {
    let userName = "Thank you for browsing my website! What's your Name?";
    let user = prompt(userName);
    let answerString1 = "Hey " + user + "! Let's begin a game of how well you know me.";
    alert(answerString1);

    let userConfirmed;
    do {
        userConfirmed = prompt("Are you ready to play? Please enter 'yes' or 'no'");
        userConfirmed = userConfirmed ? userConfirmed.toLowerCase() : "";
    } while (userConfirmed !== "yes" && userConfirmed !== "no");

    if (userConfirmed !== "yes") {
        alert("Okay, maybe next time.");
        return;
    }

    let questions = [
        "What is my job title?",
        "What is ranked 3rd on my Personal Interest?",
        "What do I aspire to create change through?",
        "What is my 2nd ranked Professional Interest?",
        "Can you guess my favorite number between 15 and 25?"
    ];

    let correctCount = 0;
    let wrongCount = 0;

    for (let i = 0; i < questions.length - 1; i++) {
        let userAnswer = prompt(questions[i]);
        let lowercasedAnswer = userAnswer.toLowerCase();
        let correctAnswer = getCorrectAnswer(i).toLowerCase();

        if (lowercasedAnswer === correctAnswer) {
            let confirmation = "Nice work " + user + ", You got it!!";
            alert(confirmation);
            correctCount++;
        } else {
            alert("Better luck on the next one :(" + user + "");
            wrongCount++;
        }
    }

    let favoriteNumber = 21;
    let attempts = 10;

    for (let i = 0; i < attempts; i++) {
        let guess = prompt("Can you guess my favorite number between 15 and 25?");
        let guessedNumber = parseInt(guess);

        if (!isNaN(guessedNumber) && guessedNumber === favoriteNumber) {
            alert("Yay, you guessed correctly! The answer is 21. Great job, " + user + "!");
            correctCount++;
            break;
        } else if (i === attempts - 1) {
            alert("Sorry, you've run out of attempts. The correct answer is 21. Better luck next time, " + user + "!");
            wrongCount++;
        } else {
            alert("Incorrect guess. Try again! Attempts left: " + (attempts - i - 1));
        }
    }

    let finalMessage = "Thanks for playing, " + user + "!\nYou got " + correctCount + " correct and " + wrongCount + " wrong answers.";
    alert(finalMessage);
}

function getCorrectAnswer(index) {
    switch (index) {
        case 0:
            return "software development engineer";
        case 1:
            return "time with family";
        case 2:
            return "positivity and growth mindset";
        case 3:
            return "entrepreneurship";
        case 4:
            return "21";
        default:
            return "";
    }
}
