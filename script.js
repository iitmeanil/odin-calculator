// start with capturing user input 
// and displaying it on screen. 



let screenTxt = ""; // what gets displayed on the screen 
let num = ""; // number that is getting entered with every click
let processingArr = []; // this will have all the elements for processing when one presses ""="

const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".screen");
let removedElement;
const dotElement = document.querySelector(".dot");

buttons.forEach((button) => {
button.addEventListener ('click', (e) => processClick(e.target.id));
});


const myDoc = document.querySelector("body");
myDoc.addEventListener('keypress', (e) => processClick(e.key));

function onKey (e) {
    console.log(e.key);
}


// three things can happen - 
//1. presses numbers or ., then all gets concatenated. 
//2. operators, then previous numbers gets added to processing array and operator gets added to processing array
//3. presses = then clears the screen and we need to process the processing string 
function processClick(e) {
    //console.log(e);
    //console.log(typeof(e));

    switch (e) {
        case "C":
            num = "";
            screenTxt ="";
            processingArr =[];
            display.textContent = screenTxt;
            addButtonAgain();
            break;
        case "back":
            if (num === "" && screenTxt != "") {
                console.log(`removing operator, screen = ${screenTxt}`);
                screenTxt = screenTxt.slice(0,-1);
                processingArr.pop();
                num = processingArr[processingArr.length - 1];
                console.log(processingArr[processingArr.length - 1]);
                processingArr.pop();
                console.log(screenTxt);

                display.textContent = screenTxt;
                //processingArr.length = processingArr.length -1;
            } else if (num != "") {
                screenTxt = screenTxt.slice(0,-1);
                num = num.slice(0,-1);
                display.textContent = screenTxt;
             }
            console.log(`back: ${processingArr}`);
            break;
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
                 //console.log("Number");
            num += e;
            screenTxt += e;
            display.textContent = screenTxt;
            break;
        case ".": //in this case we have to disable the button till operator or = is pressed.
            num += e;
            screenTxt += e;
            display.textContent = screenTxt;
            dotElement.classList.remove("button");
            dotElement.classList.add("removed");
            removedElement = document.querySelector(".removed");
            removedElement.removeEventListener("click",processClick);
            console.log(dotElement.classList.value);
            break;
        case "*":
        case "/":
        case "+":
        case "-":
            //console.log("Operator");
            screenTxt += e;
            if (num != "") processingArr.push(num);
            num = "";
            processingArr.push(e);
            display.textContent = screenTxt;
            addButtonAgain();
            break;
        case "=":
            //console.log("equal"); 
            if (processingArr[processingArr.length - 1] === "*" || processingArr[processingArr.length - 1] === "/" || processingArr[processingArr.length - 1] === "+" || processingArr[processingArr.length - 1] === "-") {
                if (num === ""){ 
                    alert("Check your equation");
                    break;
                }
            }
            processingArr.push(num);
            num = "";
            display.textContent = screenTxt;
            screenTxt = "";
            addButtonAgain();
            console.log(`before processing: ${processingArr}`);
            processEquation();            
    }
    
    console.log(processingArr);
}

//adds the event listener for . button
function addButtonAgain (){ 
    removedElement = document.querySelector(".removed");
    if (removedElement) {
        removedElement.addEventListener("click",processClick);
        removedElement.classList.add("button");
        removedElement.classList.remove("removed");
        //console.log(removedElement.classList.value);
    };
}

function processEquation () {
   
   // first process the mults, then / then + and then -
   processAll("*");
   processAll("/");
   processAll("+");
   processAll("-");   
   display.textContent = Math.round(processingArr[0]*10)/10;
    processingArr = [];
   
    //checks multiple times and checks for an operator and works on the number around the operator, then removes the sub equation, replacing with solution
   function processAll(operator){
       let index = processingArr.findIndex((element) => findElement(element,operator));
       let solution = 0;
       let newArr = [];
   
        while (index > 0) {
            solution = operate (processingArr[index -1],processingArr[index + 1],processingArr[index]);
            newArr = [...processingArr.slice(0,index-1),solution,...processingArr.slice(index+2)];
            processingArr = newArr;
            console.log(index);
            console.log(`newArr: ${newArr}`);
            index = processingArr.findIndex((element) => findElement(element,operator));
            console.log(index);
        }
        return;
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
    if(+b === 0){
        alert ("cant divide by 0 - check your equation")
        screenTxt = "";
        num = 0;
        processingArr = [];
        return;
    }
    return Math.round( (+a / +b)*100)/100 ; // ensures only two decimal is sent out
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