let answer=Math.floor(Math.random() * 20) + 1;


function guess() {
    let guesscheck=document.getElementById("num").value
    if (guesscheck>answer) {
        document.getElementById("guesstext").innerHTML="Your answer is too high. Try again."
    }
    else if (guesscheck<answer) {
        document.getElementById("guesstext").innerHTML="Your answer is too low. Try again."
    }
    else if (guesscheck==answer) {
        document.getElementById("guesstext").innerHTML="Congratulations! You Win! Randomizing the number again!"
        answer=Math.floor(Math.random() * 20) + 1;
    }
    else {
        document.getElementById("guesstext").innerHTML="Your guess was invalid. Please press again."
    }
}
