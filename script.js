let firstNum, secondNum, operator;

let inputObj = {
    firstNum: '',
    secondNum: '',
    operator: ''
};

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
    let inputObj = {};
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


/*
HMTL TO-DO LIST:
-(DONE) Add a backspace button
-Add a clear button to clear all executions and return to blank state

CSS TO-DO LIST:
-Connect numpad button to calculator button press
-Fit the clear button and backspace button fit on the calculator


INPUT TO-DO LIST:
-(DONE)Create a running cancatenation of each 
 numpad/button press
-(DONE)Display the running cancatenation on the screen 




-Convert userInput into firstNum,secondNum,operator

-but break the cancatenation after operator press
 (We'll figure it out later)


 CALCULATION TO-DO LIST:
-Continious function execution
-(DONE) Split input into three variables
-(DONE)Create a function that assigns operations
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
/*
CALCULATION PSEUDOCODE:
12+13

-i press 12
-then press plus
-then press 13

(A)
then I either press enter(which will be mapped to equals)

perform 12+13
return sum on screen

in case I press plus again

firstNum equals 25
operator equals +
second num awaits
return to (A) state

*/
function operate(userInput) {

    switch (userInput.operator) {
        case '+':
            console.log(add(+userInput.firstNum, +userInput.secondNum));
            break;
        case '-':
            console.log(subtract(+userInput.firstNum, +userInput.secondNum));

            break;

        case '*':
            console.log(multiply(+userInput.firstNum, +userInput.secondNum));

            break;

        case '/':
            console.log(divide(+userInput.firstNum, +userInput.secondNum));

            break;

    }

}

/*
HANDOFF FUNCTION PSEUDOCODE:
12+13+
check if there is more than one operator in the line of text
12+13+
     ^
if there is
then perform the previous calculation first
and then assign the result to the first number
*/


function handOff(userInput) {

}


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

    calcInput = splitUp(userInput);

    operate(calcInput);
});


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => userInput = displayToScreen(button.textContent, userInput)) //main functions go here
})