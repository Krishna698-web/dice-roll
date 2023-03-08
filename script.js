// Variable selectors
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
let score0 = document.querySelector("#score-0");
let score1 = document.querySelector("#score-1");
let currentScoreOfPlayer0 = document.querySelector('.current-score-0')
let currentScoreOfPlayer1 = document.querySelector('.current-score-1')

// Selecting buttons
const scrollBtn = document.querySelector(".scroll");
const resetBtn = document.querySelector(".reset");
const holdBtn = document.querySelector(".hold");

// Image selector
let image = document.querySelector(".img");

// Adding hidden class to image element
image.classList.add("hidden");

// Initial variables
let score, currentScore, activePlayer, playing;

// Function that sets all the variables to its initial value
let init = () => {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    currentScoreOfPlayer0.textContent = 0;
    currentScoreOfPlayer1.textContent = 0;

    image.classList.add("hidden");
    player0.classList.add('player-active');
    player1.classList.remove('player-active');
    player0.classList.remove('winner');
    player1.classList.remove('winner');
}

// Calling / Invoking the init function 
init();

// For switching between players
const switchPlayer = () => {
    currentScore = 0;
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player-active");
    player1.classList.toggle("player-active");
};

// Scrolling the dice
scrollBtn.addEventListener("click", () => {
    // If you are playing then playing: true
    if (playing) {
        let randomScroll = Math.trunc(Math.random() * 6) + 1;

        image.classList.remove("hidden");
        image.src = `assets/img-${randomScroll}.png`;

        if (randomScroll !== 1) {
            currentScore += randomScroll;
            document.querySelector(`.current-score-${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
});

// When the current value is to be hold 
holdBtn.addEventListener("click", () => {
    score[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
        score[activePlayer];

    if (score[activePlayer] >= 100) {
        document.querySelector(`.player-${activePlayer}`).classList.add("winner");
        playing = false;
    } else {
        switchPlayer();
    }
});

// Resets the game
resetBtn.addEventListener('click', init)
