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
/*
    For now: Lets create a function that
    takes what the user inputed and split it into
    it's respective values
*/
function splitUp(){
    
}
function operate(firstNum,operator,secondNum){

}
/*
    FIRST WE NEED TO CONNECT THE BUTTON 'CLICK'
    TO SEND THE DESIRED SELECTION

    I CLICK '1'
    IT CONSOLE LOGS 1;
*/




// const numClick=document.querySelectorAll('button');
// function displayKey(){
//     const buttonClick=document.querySelector('button');
//     console.log(buttonClick.textContent);
// }
// numClick.forEach(num=>num.addEventListener('click',()=>displayKey()))

function displayToScreen(input) {
    const screen=document.querySelector('.screen');
    screen.textContent=input;
}
//location of numpad is 3
addEventListener('keydown',(e)=>{if(e.location==3){displayToScreen(e.key)}});


const buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener("click",()=>displayToScreen(button.textContent)) //main functions go here
})
