function fiveRounds()
{
    const com = document.querySelector('.computer');
    const comSelec = document.createElement('div');
    comSelec.classList.add('comSelec');

    function computerSelection() 
    {
        let num=Math.floor(Math.random()*3);
        if(num==0) 
        {
            comSelec.textContent = "rock";
            com.appendChild(comSelec);
            return "rock";
        } 
        else if(num==1) 
        {
            comSelec.textContent = "paper";
            com.appendChild(comSelec);
            return "paper";
        } 
        else 
        {
            comSelec.textContent = "scissors";
            com.appendChild(comSelec);
            return "scissors";
        }
    }

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    function rockButton()
    {
        playRound(computerSelection(),"rock");
    }
    rock.addEventListener('click', rockButton);

    function paperButton()
    {
        playRound(computerSelection(),"paper");
    }
    paper.addEventListener('click', paperButton);

    function scissorsButton()
    {
        playRound(computerSelection(),"scissors");
    }
    scissors.addEventListener('click', scissorsButton);

    let cScore = 0;
    let yScore = 0;
    const youScoreBox = document.querySelector('#youScore');
    const youScore = document.createElement('span');
    youScore.textContent = 0;
    youScoreBox.appendChild(youScore);

    const comScoreBox = document.querySelector('#comScore');
    const comScore = document.createElement('span');
    comScore.textContent = 0;
    comScoreBox.appendChild(comScore);

    const youPlusOne = document.getElementById("youPlusOne");
    const comPlusOne = document.getElementById("comPlusOne");

    const winner = document.createElement('div');
    const winnerContainer = document.querySelector('.winnerContainer');
    winner.classList.add('winner');

    let gameOver = false;

    const playAgain = document.createElement('button');
    playAgain.textContent = "Play Again"
    playAgain.classList.add('playAgain');
    playAgain.addEventListener('click', function(){
    location.reload()});
    const playAgainContainer = document.querySelector('.playAgainContainer');

    function playRound(computer,player) 
    {
        console.log("computer "+computer);
        console.log("player "+player);
        if(player=="rock") 
        {
            if(computer=="rock") 
            {
                console.log(yScore + " " + cScore);
            } 
            else if(computer=="paper") 
            {
                comPlusOne.classList.remove('plusOneAnimation');
                comScore.textContent = `${++cScore}`;
                comScoreBox.appendChild(comScore);
                console.log(yScore + " " + cScore);
                comPlusOne.classList.add('plusOneAnimation');
                setTimeout(function(){comPlusOne.classList.remove('plusOneAnimation');},1000);
            } else 
            {
                youPlusOne.classList.remove('plusOneAnimation');
                youScore.textContent = `${++yScore}`;
                youScoreBox.appendChild(youScore);
                console.log(yScore + " " + cScore);
                youPlusOne.classList.add('plusOneAnimation');
                setTimeout(function(){youPlusOne.classList.remove('plusOneAnimation');},1000);
            }
        } 
        else if(player=="paper") 
        {
            if(computer=="rock") 
            {
                youPlusOne.classList.remove('plusOneAnimation');
                youScore.textContent = `${++yScore}`;
                youScoreBox.appendChild(youScore);
                console.log(yScore + " " + cScore);
                youPlusOne.classList.add('plusOneAnimation');
                setTimeout(function(){youPlusOne.classList.remove('plusOneAnimation');},1000);
            } 
            else if(computer=="paper") 
            {
                console.log(yScore + " " + cScore);
            } 
            else 
            {
                comPlusOne.classList.remove('plusOneAnimation');
                comScore.textContent = `${++cScore}`;
                comScoreBox.appendChild(comScore);
                console.log(yScore + " " + cScore);
                comPlusOne.classList.add('plusOneAnimation');
                setTimeout(function(){comPlusOne.classList.remove('plusOneAnimation');},1000);
            }
        } 
        else
        {
            if(computer=="rock") 
            {
                comPlusOne.classList.remove('plusOneAnimation');
                comScore.textContent = `${++cScore}`;
                comScoreBox.appendChild(comScore);
                console.log(yScore + " " + cScore);
                comPlusOne.classList.add('plusOneAnimation');
                setTimeout(function(){comPlusOne.classList.remove('plusOneAnimation');},1000);
            } 
            else if(computer=="paper") 
            {
                youPlusOne.classList.remove('plusOneAnimation');
                youScore.textContent = `${++yScore}`;
                youScoreBox.appendChild(youScore);
                console.log(yScore + " " + cScore);
                youPlusOne.classList.add('plusOneAnimation');
                setTimeout(function(){youPlusOne.classList.remove('plusOneAnimation');},1000);
            } 
            else 
            {
                console.log(yScore + " " + cScore);
            }
        } 
        if(cScore==5)
        {
            winner.textContent = "Computer Wins!"
            winnerContainer.appendChild(winner);
            gameOver = true;
        }
        if(yScore==5)
        {
            winner.textContent = "You Win!"
            winnerContainer.appendChild(winner);
            gameOver = true;
        }
        if(gameOver)
        {
            rock.removeEventListener('click', rockButton);
            paper.removeEventListener('click', paperButton);
            scissors.removeEventListener('click', scissorsButton);

            playAgainContainer.appendChild(playAgain);
        }
    }
}

fiveRounds();