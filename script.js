function computerSelection() 
{
    let num=Math.floor(Math.random()*3);
    if(num==0) 
    {
        return "rock";
    } 
    else if(num==1) 
    {
        return "paper";
    } 
    else 
    {
        return "scissors";
    }
}
function playerSelection() 
{
    let answer=prompt("rock, paper, or scissors?");
    answer=answer.toLowerCase();
    while(answer!="rock"&&answer!="paper"&&answer!="scissors") 
    {
        alert("that's not rock, paper, or scissors!")
        answer=prompt("rock, paper, or scissors?");
        answer=answer.toLowerCase();
    }
    return answer;
}
function playRound(computer,player) 
{
    if(player=="rock") 
    {
        if(computer=="rock") 
        {
            alert("Tie! rock and rock.");
        } 
        else if(computer=="paper") 
        {
            alert("You lose! paper beats rock.");
        } else 
        {
            alert("You win! rock beats scissors.");
        }
    } 
    else if(player=="paper") 
    {
        if(computer=="rock") 
        {
            alert("You win! paper beats rock.");
        } 
        else if(computer=="paper") 
        {
            alert("Tie. paper and paper.");
        } 
        else 
        {
            alert("You lose! scissor beats paper.");
        }
    } 
    else
    {
        if(computer=="rock") 
        {
            alert("You lose! rock beats scissors.");
        } 
        else if(computer=="paper") 
        {
            alert("You win! scissors beats paper.");
        } 
        else 
        {
            alert("Tie! scissors and scissors.");
        }
    }   
}
for(let i=0;i<5;i++)
{
    playRound(computerSelection(),playerSelection());
}