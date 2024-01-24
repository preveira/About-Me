function buttonGame() {
    let userName = "Thank you for browsing my website! What's your Name?";

    let user = prompt(userName);

    let answerString1 = "Hey " + user +"! let's begin a game of how good you know me.";

    alert(answerString1);
    
    let userConfirmed;

    do {
        userConfirmed = prompt("Are you ready to play? Please enter 'yes' or 'no'");
        userConfirmed = userConfirmed ? userConfirmed.toLowerCase() : ""; // Convert to lowercase or set to an empty string if null
    } while (userConfirmed !== "yes" && userConfirmed !== "no");
    
    if (userConfirmed === "yes") {
        let confirmation = "Alright " + user + ", here we GO!!!";
        alert(confirmation);
    } else {
        alert("Okay, maybe next time.");
        return;
    }

    let correctCount = 0;
    let wrongCount = 0;

    let question1 = "What is my job title?";

    let answer1 = prompt(question1);

    let lowercasedAnswer = answer1.toLowerCase();

    let correctAnswer = lowercasedAnswer === "software development engineer";
    if (correctAnswer) {
        let confirmation1 = "Awesome " + user +", You got it!!";
        alert(confirmation1);
        correctCount++;
    } else {
        alert("Better luck on the next one :(" + user + "");
        wrongCount++;
    }

    let question2 = "What is ranked 3rd on my Personal Interest?";

    let answer2 = prompt(question2);

    let lowercasedAnswer2 = answer2.toLocaleLowerCase();

    let correctAnswer2 = lowercasedAnswer2 === "time with family";
    if (correctAnswer2) {
        let confirmation2 = "Nice work " + user +", You got it!!";
        alert(confirmation2);
        correctCount++;
    } else {
        alert("Better luck on the next one :(" + user + "");
        wrongCount++;
    }

    let question3 = "What do I aspire to create change through?";

    let answer3 = prompt(question3);

    let lowercasedAnswer3 = answer3.toLocaleLowerCase();

    let correctAnswer3 = lowercasedAnswer3 === "positivity and growth mindset";
    if (correctAnswer3) {
        let confirmation3 = "Nice " + user + ", right again!!";
        alert(confirmation3);
        correctCount++;
    } else {
        alert("Better luck on the next one :(" + user + "");
        wrongCount++;
    }

    let question4 = "What is my 2nd ranked Professional Interest?";

    let answer4 = prompt(question4);

    let lowercasedAnswer4 = answer4.toLocaleLowerCase();

    let correctAnswer4 = lowercasedAnswer4 === "entrepreneurship";
    if (correctAnswer4) {
        let confirmation4 = "Sweet " + user + ", Nailed it!!";
        alert(confirmation4);
        correctCount++;
    } else {
        alert("Better luck on the next one :(" + user + "");
        wrongCount++;
    }

    let finalMessage = "Thanks for playing, " + user + "!\nYou got " + correctCount + " correct and " + wrongCount + " wrong answers.";
    alert(finalMessage);
}