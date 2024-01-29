let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    console.log("draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win yous! ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost! yousr ${compChoice} beat ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () =>{
    const option = ["rock", "paper", "secissor"];
   const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}



const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //secssior, paper
           userWin = compChoice === "paper" ? true : false;
        }else if(userChoice === "paper"){
            //rock ,secissor
            userWin = compChoice === "secissor" ? false : true;
        }else {
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    } )
})