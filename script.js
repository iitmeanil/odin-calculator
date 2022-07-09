// start with capturing user input 
// and displaying it on screen. 



let screenArr = []; // what gets displayed on the screen 
let num; // number that is getting entered with every click
let processingArr = []; // this will have all the elements for processing when one presses ""="

const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");

buttons.forEach((button) => {
button.addEventListener ('click', processClick)
});


// three things can happen - 
//1. presses numbers or ., then all gets concatenated. 
//2. operators, then previous numbers gets added to processing array and operator gets added to processing array
//3. presses = then clears the screen and we need to process the processing string 
function processClick(e) {
    //console.log(e.target.id);
    //console.log(typeof(e.target.id));

    switch (e.target.id) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            console.log("Number");
            break;
        case "*":
        case "/":
        case "+":
        case "-":
            console.log("Operator");
            break;
        case "=":
            console.log("equal");             
    
    }

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

