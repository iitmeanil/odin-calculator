// start with capturing user input 
// and displaying it on screen. 



let screenTxt = ""; // what gets displayed on the screen 
let num = ""; // number that is getting entered with every click
let processingArr = []; // this will have all the elements for processing when one presses ""="

const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".screen");

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
            //console.log("Number");
            num += e.target.id;
            screenTxt += e.target.id;
            break;
        case "*":
        case "/":
        case "+":
        case "-":
            //console.log("Operator");
            screenTxt += e.target.id;
            processingArr.push(num);
            num = "";
            processingArr.push(e.target.id);
            break;
        case "=":
            //console.log("equal"); 
            processingArr.push(num);
            num = "";
            processEquation();            
    }
    display.textContent = screenTxt;
    //console.log(num);
    console.log(processingArr);
}

function processEquation () {
   
   // first process the mults, then / then + and then -
   while (processingArr.findIndex((element) => findElement(element,"*"))){
    let index = processingArr.findIndex((element) => findElement(element,"*"));
    let solution = operate (processingArr[index -1],processingArr[index + 1],processingArr[index]);
    //console.log(index);
    let newArr = [...processingArr.slice(0,index-1),solution,...processingArr.slice(index+2)];
    console.log(`newArr: ${newArr}`);
   }

   function findElement (element,operator) {
    if (element === operator) return true;
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

