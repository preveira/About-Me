"use strict";
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
        "Can you guess my favorite number between 15 and 25?",
        "Marshawn Lynch is 8th amongst my Top 10 best NFL Running Backs of All time. Can you tell me what his nickname was? take a first guess!",
        "Who did I rank number 1 on my top NFL Running Backs of All time?"
    ];

    let correctAnswers = [
        "software development engineer",
        "time with family",
        "positivity and growth mindset",
        "entrepreneurship",
        "21",
        "beast mode",
        "Emmitt Smith"
    ];

    let answerChoices = [
        ["software development engineer"],
        ["time with family"],
        ["positivity and growth mindset"],
        ["entrepreneurship"],
        Array.from({ length: 11 }, (_, i) => (i + 15).toString()), 
        ["Dump Truck", "Beast Mode", "Bull Dozer", "Thrasher", "Sharknado", "Rhino Beast", "Heavy Hitter", "Big Bash", "Boom Boom Kid", "Big Nasty"],
        ["Emmitt Smith"]
    ];    
 
    let correctCount = 0;
    let wrongCount = 0;

    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i]);
        let lowercasedAnswer = userAnswer.toLowerCase();
        let correctAnswer = correctAnswers[i].toLowerCase();

        if (i === 4) {
            let favoriteNumber = 21;
            let remainingTriesNumber = 5;

            while (remainingTriesNumber > 0) {
                let userGuessNumber = parseInt(userAnswer);
                
                if (isNaN(userGuessNumber)) {
                    alert("Please enter a valid number.");
                    break;
                }

                if (userGuessNumber === favoriteNumber) {
                    alert("Yay, you guessed correctly!");
                    correctCount++;
                    break;
                } else {
                    remainingTriesNumber--;

                    if (userGuessNumber > favoriteNumber) {
                        alert("Incorrect! Too high. You have " + remainingTriesNumber + " tries left.");
                    } else {
                        alert("Incorrect! Too low. You have " + remainingTriesNumber + " tries left.");
                    }
                    if (remainingTriesNumber > 0) {
                        userAnswer = prompt(questions[i]);
                    }
                }
            }
        } else if (i === 5) {

            let remainingTriesNickname = 6;
        
            while (remainingTriesNickname > 0) {
                let userGuessNickname = prompt(
                    questions[i] + "\nAvailable choices: " + answerChoices[i].join(", ")
                );

                userGuessNickname = userGuessNickname.toLowerCase();
                
                if (userGuessNickname === correctAnswer.toLowerCase()) {
                    alert("Yay, you guessed correctly!");
                    correctCount++;
                    break;
                    
                }  else {
                    remainingTriesNickname--;
                    alert("Incorrect! You have " + remainingTriesNickname + " tries left.");

                if (!answerChoices[i].includes(userGuessNickname)) {
                    continue;
                }
                    answerChoices[i] = answerChoices[i].filter(choice => choice !== userGuessNickname);

                    if (remainingTriesNumber > 0) {
                        userAnswer = prompt(questions[i]);
                    }
                }
            }         
        } else {
            if (lowercasedAnswer === correctAnswer) {
                let confirmation = "Nice work " + user + ", You got it!!";
                alert(confirmation);
                correctCount++;
            } else {
                alert("Better luck on the next one :(" + user + "");
                wrongCount++;
            }
        }
    }

    let finalMessage = "Thanks for playing, " + user + "!\nYou got " + correctCount + " correct and " + wrongCount + " wrong answers.";
    alert(finalMessage);
}
