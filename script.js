// start with capturing user input 
// and displaying it on screen. 


const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");
let inputArr = [];
buttons.forEach((button) => {
button.addEventListener ('click', processClick)
});


// three things can happen - 
//1. presses numbers or ., then all gets concatenated. 
// 2. operators, then previous numbers gets added to processing array and operator gets a

function processClick(e) {
    console.log(e.target.id);

}



function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return +a - +b;
}

function multiply(a,b){
    return +a * +b;
}

function divide(a,b){
    return +a / +b;
}

function operate (a,b,operator){
switch(operator) {
    case "+": 
        return add(a,b);
        break;

    case "-": 
        return subtract(a,b);
        break;    
        
    case "*": 
        return multiply(a,b);
        break;    

    case "/": 
        return divide(a,b);
        break;    
}
}

