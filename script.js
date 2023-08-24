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
HMTL TO-DO LIST:
-Add a backspace button
-Add a clear button to clear all executions and return to blank state

INPUT TO-DO LIST:
-(DONE)Create a running cancatenation of each 
 numpad/button press
-(DONE)Display the running cancatenation on the screen 


-Connect numpad button to calculator button press

-Convert userInput into firstNum,secondNum,operator

-but break the cancatenation after operator press
 (We'll figure it out later)


 CALCULATION TO-DO LIST:
-Continious function execution

 -
 -
 -
 -
 -
*/




let  userInput='';

function displayToScreen(input,userInput) {
    const screen=document.querySelector('.screen');
    
    if(input=='Backspace')
    input='';

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
addEventListener('keydown',(e)=>{
    if(e.location==3)
    userInput=displayToScreen(e.key,userInput);

    else if(e.key=='Backspace'){
    userInput=userInput.slice(0,userInput.length-1)
    console.log(userInput);
    displayToScreen(e.key,userInput);
}
    //console.log(userInput.length);
    
    //userInput.pop;
});


const buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener("click",()=>userInput=displayToScreen(button.textContent,userInput)) //main functions go here
})
