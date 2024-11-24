let userScore = 0;
let compScore = 0;
let drawScore = 0;
let userWin = true;
let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('.msg')
const userScorePara = document.querySelector('.user-score')

const compScorePara = document.querySelector('.comp-score')
const draw = document.querySelector('.draw');





// Play Game function:
const playGame = (userChoice)=>{
console.log(`User Choice = ${userChoice}`)


const compChoice = genCompChoice();
console.log(`Computer Choice = ${compChoice}`);

// Condational statement on the basis on the statements user and computer will lose and win the game.



let user
if(userChoice == compChoice){
    gameDraw();


}else{

    if(userChoice === 'Rock'){
        userWin = compChoice === 'Paper' ? false :true;
    }else if(userChoice === 'Paper'){
        userWin = compChoice  === 'Scissor'? false:true;
    }else{
        userWin = compChoice === 'Rock' ? false:true;
    }
    showWinner(compChoice,userChoice);
}




};

// Show Winner fucntion 
const showWinner = (userChoice,compChoice)=>{
    if(userWin){
userScore++;
userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! ${userChoice} beats ${compChoice}`
        
        msg.style.backgroundColor = 'blue';
    }else{
      
compScore++;
compScorePara.innerHTML = compScore;
         msg.innerHTML = `You Loss! ${compChoice} beats ${userChoice}`
       msg.style.backgroundColor = 'red';
    }
}
// 


// Computer Choice Function:
const genCompChoice = ()=>{
let userSign = ['Rock','Paper','Scissor'];

const randIdx = Math.floor(Math.random()*choices.length)
return userSign[randIdx];
}

// Draw game function
const gameDraw = ()=>{
drawScore++;
draw.innerHTML = drawScore;
    msg.innerHTML = 'Game draw.Play again.'
    msg.style.backgroundColor = 'grey'
}




  

// We use forEach loop for choices variables and then we use click Event Listiner.
choices.forEach((choice)=>{
choice.addEventListener('click',()=>{
const userChoice = choice.getAttribute("id")
playGame(userChoice);

})


});
// 