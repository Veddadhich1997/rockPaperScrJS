const playBtn = document.querySelector('.intro button');
const introScreen = document.querySelector('.intro');
const match = document.querySelector('.match');
let pScore = 0;
let cScore = 0;

playBtn.addEventListener('click',()=>{
    introScreen.classList.add('unactive');
    match.classList.add('active');
})

// play match function
function playMatch(){
    const options = document.querySelectorAll('.options button');
    const computerOptions = ['rock','paper','scissors'];
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    options.forEach(option => {
        option.addEventListener('click',function(){
            const computerNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(()=>{
                 // call compare hand function
                compareHands(this.textContent,computerChoice);

                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            },2000)
           

            // working on animation
            playerHand.style.animation = 'shakePlayer 2s ease';
            computerHand.style.animation = 'shakeComputer 2s ease';
        })
    })
    hands.forEach(hand => {
        hand.addEventListener('animationend',function(){
            this.style.animation ="";
        })
    })
}
playMatch();

// compare hands function
function compareHands(playerChoice,computerChoice){
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
        winner.textContent = "It is a tie";
        return;
    }
    // checking for rock
    if(playerChoice==='rock'){
        if(computerChoice==='scissors'){
            winner.textContent='You Won';
            pScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='Computer Won';
            cScore++;
            updateScore();
            return;
        }
    }

     // checking for paper
     if(playerChoice==='paper'){
        if(computerChoice==='scissors'){
            winner.textContent='Computer Won';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='You Won';
            pScore++;
            updateScore();
            return;
        }
    }

    // checking for scissors
    if(playerChoice==='scissors'){
        if(computerChoice==='rock'){
            winner.textContent='Computer Won';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='You Won';
            pScore++;
            updateScore();
            return;
        }
    }
}

// score function
function updateScore(){
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}