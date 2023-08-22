let firstNum,secondNum,operator;

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
function splitUp(){
    
}
function operate(firstNum,operator,secondNum){

}
/*
INPUT TO-DO LIST:
-Continious function execution
-Connect numpad button to calculator button press
-Create a running cancatenation of each 
 numpad/button press
-Display the running cancatenation on the screen
 but break the cancatenation after operator press
 (We'll figure it out later)


 CALCULATION TO-DO LIST:
 -
 -
 -
 -
 -
 -
*/




let  userInput='';

function displayToScreen(input,userInput) {
    const screen=document.querySelector('.screen');
    
    userInput=screen.textContent=userInput+input;
    return userInput;    
}


// userInput=screen.textContent=userInput+input;
// return userInput;

// function displayToScreen(input) {
//     const screen=document.querySelector('.screen');
//     screen.textContent=input;
// }
//location of numpad is 3
addEventListener('keydown',(e)=>{if(e.location==3)userInput=displayToScreen(e.key,userInput)});


const buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener("click",()=>userInput=displayToScreen(button.textContent,userInput)) //main functions go here
})
