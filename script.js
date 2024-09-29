var minNum = 1;
var maxNum = 100;
var answer = Math.floor(Math.random() * (maxNum - minNum + 1));
var attempt = 0;
var guess;
var running = true;

while (running) {
    guess = prompt('Guess a number between 1 - 100');
    guess = Number(guess);

    if (isNaN(guess)) {
        alert("Please enter number");
    }
    else {
        attempt++;
        if (guess < answer) {
            alert("Too Low!");
        }
        else if (guess > answer) {
            alert("Too High!");
        }
        else {
            alert("Correct!");
            running = false;
        }
    }
}