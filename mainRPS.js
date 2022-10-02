alert("Choose between Rock, Paper, or Scissors");
//Creating a Variable and prompting the user for a selection
let Choice;
Choice = prompt("Select 1 for rock, 2 for paper or 3 for Scissors");
//Actions depending on choice
if (Choice === "1"){
    console.log("The User selected Rock")
}
else if (Choice === "2"){
    console.log("The User selected Paper")
}
else if (Choice === "3"){
    console.log("The User selected Scissors")
}
else {
    console.log("Error")
}

//Creating a random variable for the computer
let ComputerSelection;
ComputerSelection = Math.random();
console.log(ComputerSelection)
//Actions depending on the outcome of the selection
if (ComputerSelection <= 0.34){
    let Computer = "Paper"
    console.log("The computer has choosen", Computer)
}
else if (0.35 <= ComputerSelection <= 0.67) {
    let Computer = "Scissors"
    console.log("The computer has choosen", Computer)
}
else if (0.68 <= ComputerSelection <= 1.0) {
    let Computer = "Rock"
    console.log("The computer has choosen", Computer)
}
else {
    let Computer = "Error"
    console.log(Computer)
}

if (Choice === "1"){
    if (Computer = "Paper"){
        console.log("The Computer Wins!")
    }
    else if (Computer = "Scissors"){
        console.log("The User Wins!")
    }
    else if (Computer = "Rock"){
        console.log("Its a Tie!")
    }
    else {
        console.log("Error")
    }
    
}
else if (Choice === "2"){
    if (Computer = "Paper"){
        console.log("Its a Tie!")
    }
    else if (Computer = "Scissors"){
        console.log("The Computer Wins!")
    }
    else if (Computer = "Rock"){
        console.log("The User Wins!")
    }
    else {
        console.log("Error")
    }
    
}
else if (Choice === "3"){
    if (Computer = "Paper"){
        console.log("The User Wins!")
    }
    else if (Computer = "Scissors"){
        console.log("Its a Tie!")
    }
    else if (Computer = "Rock"){
        console.log("The Computer Wins!")
    }
    else {
        console.log("Error")
    }
    
}
else {
    console.log("Error")
}
