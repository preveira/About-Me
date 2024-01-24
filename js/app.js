function buttonGame() {
    let userName = "What's your Name?";

    let user = prompt(userName);

    let answerString1 = "Hey " + user +"! let's begin a game of how good you know me.";

    alert(answerString1);

    let userConfirmed = confirm("Are you ready to play?");

    if (userConfirmed) {
        let confirmation = "Alright" + user +", here we GO!!!";
        alert(confirmation);
    } else {
        alert("Okay, maybe next time.");
    }

    let question1 = "What is my job title?";

    let answer1 = prompt(question1);

    let lowercasedAnswer = userAnswer.toLowerCase();

    let correctAnswer = lowercasedAnswer === "software development engineer";
    if (correctAnswer) {
        let confirmationOne = "Awesome" + user +"!!";
        alert(confirmationOne);
    } else {
        alert("Better luck on the next one :(" + user + "");
    }
}