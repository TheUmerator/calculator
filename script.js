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



function displayToScreen(input) {
    const screen=document.querySelector('.screen');
    screen.textContent=input;
}
//location of numpad is 3
addEventListener('keydown',(e)=>{if(e.location==3)displayToScreen(e.key)});


const buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener("click",()=>displayToScreen(button.textContent)) //main functions go here
})
