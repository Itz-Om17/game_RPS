let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const genCompChoice = () =>{                         // Genrates Computers Choice 
    const options = ["rock","paper","scissor"];
    randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
}
const winner = (userChoice, compChoice) =>
    {
        if(userChoice === compChoice)
            {
                let msg = document.querySelector("#msg");
                msg.innerText = "It's a Draw";
                msg.style.backgroundColor = "#808080";
                msg.style.color = "white";
            }
        else if(userChoice != compChoice)
            {
                if(userChoice ==="rock")
                    {
                        if(compChoice === "paper")
                            {
                                let msg = document.querySelector("#msg");
                                msg.innerText = "You Lost, Try Again. Paper 👊 Rock";
                                msg.style.backgroundColor = "#FF0000";
                                msg.style.color = "white";
                                compscore++;

                            }
                        else
                            {
                                let msg = document.querySelector("#msg");
                                msg.innerText = "You Won! Rock 👊 Scissor";
                                msg.style.backgroundColor = "#00FF00";
                                msg.style.color = "white";
                                userscore++;

                            }
                    }
                if(userChoice === "paper")
                    {
                        if(compChoice === "scissor")
                            {
                                let msg = document.querySelector("#msg");
                                msg.innerText = "You Lost, Try Again. Scissor 👊 Paper";
                                msg.style.backgroundColor = "#FF0000";
                                msg.style.color = "white";
                                msg.style.color = "white";
                                compscore++;
                            }
                            else
                            {
                                let msg = document.querySelector("#msg");
                                msg.innerText = "You Won! Paper 👊 Rock";
                                msg.style.backgroundColor = "#00FF00";
                                msg.style.color = "white";
                                userscore++;
                            }
                    }
                if(userChoice === "scissor")
                    {
                        if(compChoice === "rock")
                            {
                                let msg = document.querySelector("#msg");
                                msg.innerText = "You Lost, Try Again. Rock 👊 Scissor";
                                msg.style.backgroundColor = "#FF0000";
                                msg.style.color = "white";
                                msg.style.color = "white";
                                compscore++;
                            }
                            else
                            {
                                let msg = document.querySelector("#msg");
                                msg.innerText = "You Won! Scissor 👊 Paper";
                                msg.style.backgroundColor = "#00FF00";
                                msg.style.color = "white";
                                userscore++;
                            }
                    }
            }
            if(userscore>0)
                {
                    for(let i=userscore; i<=userscore; i++)
                        {
                            let score = document.querySelector("#user-score");
                            score.innerHTML = i;
                        }
                }
                if(compscore>0)
                    {
                        for(let i=compscore; i<=compscore; i++)
                            {
                                let score = document.querySelector("#comp-score");
                                score.innerHTML = i;
                            }
                    }
    }
const playGame = (userChoice) =>
    {
        console.log("User Choice is " , userChoice);
        const compChoice = genCompChoice();          // function call for computer choice
        console.log("Computer choice is", compChoice);
        const won =  winner(userChoice,compChoice);
        
    }
choices.forEach((element) =>{
    element.addEventListener("click", () =>{                              
        const userChoice = element.getAttribute("id");        // Gathers the users choice
        playGame(userChoice);                      //  function call for play game with user choice is passed
    })
})