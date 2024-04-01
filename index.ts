#!/usr/bin/env node 
import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {massage:"Enter first number", type: "number", name:"firstNumber"},
    {massage:"Enter Second number", type: "number", name:"secondNumber"},
    {
    massage:"Select one of the operator to perform operation",
    type:"list",
    name:"operators",
    choices:["Addition","Subtraction","Multiplication","Division"]
},
])
if (answer.operators === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operators === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.operators === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.operators === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("please select valid operator")}

