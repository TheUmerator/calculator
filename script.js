let firstNum, secondNum, operator;

let inputObj={firstNum:'',secondNum:'',operator:''};

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function splitUp(typedInput) {
let inputObj={};
    for (i = 0; i <= typedInput.length; i++) {

        // if (typedInput[i] == '+' || typedInput[i] == '-' || typedInput[i] == '*' || typedInput[i] == '/') {
        //     firstNum = typedInput.substring(0, i);
        //     secondNum = typedInput.substring(i + 1, typedInput.length);
        //     operator = typedInput[i];
        // }

        if (typedInput[i] == '+' || typedInput[i] == '-' || typedInput[i] == '*' || typedInput[i] == '/') {
            inputObj.firstNum = typedInput.substring(0, i);
            inputObj.secondNum = typedInput.substring(i + 1, typedInput.length);
            inputObj.operator = typedInput[i];
        }
    }
return inputObj;
    console.log(firstNum);
    console.log(secondNum);
    console.log(operator);
}

function operate(firstNum, operator, secondNum) {

}
/*
HMTL TO-DO LIST:
-(DONE) Add a backspace button
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
-(DONE) Split input into three variables

 -
 -
 -
 -
 -
*/

// firstNum,secondNum,operator


let userInput = '';




function displayToScreen(input, userInput) {
    const screen = document.querySelector('.screen');

    if (input == 'Backspace')
        input = '';

    if (input == 'c')
        input = '';

    userInput = screen.textContent = userInput + input;
    return userInput;
}


// userInput=screen.textContent=userInput+input;
// return userInput;

// function displayToScreen(input) {
//     const screen=document.querySelector('.screen');
//     screen.textContent=input;
// }
//location of numpad is 3

//NEED TO MAKE THIS ITS OWN FUNCTION FOR CLARITY LATER ON
addEventListener('keydown', (e) => {
    if (e.location == 3)
        userInput = displayToScreen(e.key, userInput);

    else if (e.key == 'Backspace') {
        userInput = userInput.slice(0, userInput.length - 1)
        displayToScreen(e.key, userInput);
    } else if (e.key == 'c') {
        userInput = '';
        displayToScreen(e.key, userInput);
    }

    //console.log(userInput.length);

    //userInput.pop;
});


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => userInput = displayToScreen(button.textContent, userInput)) //main functions go here
})