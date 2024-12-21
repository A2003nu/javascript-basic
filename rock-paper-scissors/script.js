let score=JSON.parse(localStorage.getItem('score'))|| {
    wins:0,
    losses:0,
    ties:0
};

updateScoreElement();

let isAutoPlaying=false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId=setInterval(() => {
            let playerMove=pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying=true;
    }
    else{
        clearInterval(intervalId);
    isAutoPlaying=false;
    }
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('scissors');
});

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        return playGame('rock');
    }
    else if(event.key=== 'p'){
        return playGame('paper');
    }
    else if(event.key=== 's'){
        return playGame('scissors');
    }

})
function playGame(playerMove){
    let computerMove=pickComputerMove();
    let result='';
    if(playerMove === 'paper'){
        if(computerMove === 'paper'){
            result='It\'s a tie!';
            score.ties++;
        }
        else if(computerMove === 'scissors'){
            result='Computer wins!';
            score.losses++;
        }
        else{
            result='You win!';
            score.wins++;
        }
    }
    else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result='It\'s a tie !';
            score.ties++;
    }
    else if(computerMove === 'scissors'){
        result='You win!';
        score.wins++;
    }
    else{
        result='You Lose!';
        score.losses++;
    }
}
else if(playerMove === 'scissors'){
    if(computerMove === 'scissors'){
        result='It\'s a tie!';
        score.ties++;
}
else if(computerMove === 'rock'){
    result='Computer wins!';
    score.losses++;
}
else{
    result='You win!';
    score.wins++;
}
}
localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-move').innerHTML=`You
<img src="images/${playerMove}-emoji.png" class='move-icon'/>
<img src="images/${computerMove}-emoji.png" class='move-icon'/>
Computer`;
}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins:${score.wins} , Looses:${score.losses} , Ties:${score.ties}`;
}

function pickComputerMove(){
    let randomNumber=Math.random();
    if(randomNumber >=0 && randomNumber < 1/3){
        return 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}