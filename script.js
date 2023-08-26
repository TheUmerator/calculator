let inputObj = {
    firstNum: '',
    secondNum: '',
    operator: '',
    opCount: 0
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

//takes in string, returns an object
function splitUp(typedInput) {
    let inputObj = {};
    for (i = 0; i <= typedInput.length; i++) {

        // if (typedInput[i] == '+' || typedInput[i] == '-' || typedInput[i] == '*' || typedInput[i] == '/') {
        //     firstNum = typedInput.substring(0, i);
        //     secondNum = typedInput.substring(i + 1, typedInput.length);
        //     operator = typedInput[i];
        // }

        if (typedInput[i] == '+' || typedInput[i] == '-' || typedInput[i] == '*' || typedInput[i] == '/') {
            inputObj.opCount = inputObj.opCount + 1 || 1;
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

//triggers when opCount >=2. Sets it back to 1 while calculating the first
//expression
//TAKES a string as input
//splits it up into respective objects
//evalutes the calculation
//reset opcount to 1 and then
//should return the number obtained
function firstCal(firstNum) {
    let firstObj;
    let cal=0;
    console.log('firstNum is'+firstNum);

    firstObj = splitUp(firstNum);
    cal=operate(firstObj);
    console.log(firstNum+'is '+cal)
    return cal;
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



//the main variable manipulated by the eventlistern
let userInput = '';



//takes button press (input) and string(userInput) and returns nothing
function displayToScreen(input, userInput) {
    const screen = document.querySelector('.screen');

    if (input == 'Backspace')
        input = '';

    if (input == 'c')
        input = '';

    if (input == 'Enter')
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
//currently, takes an object as input
//RETURNS a number 
function operate(userInput) {

    switch (userInput.operator) {
        case '+':
            return add(+userInput.firstNum, +userInput.secondNum);
            break;
        case '-':
            return subtract(+userInput.firstNum, +userInput.secondNum);
            break;

        case '*':
            return multiply(+userInput.firstNum, +userInput.secondNum);
            break;

        case '/':
            return divide(+userInput.firstNum, +userInput.secondNum);
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




//NEED TO MAKE THIS ITS OWN FUNCTION FOR CLARITY LATER ON

addEventListener('keydown', (e) => {
    if (e.location == 3) //3 is the code for the keypad location
        userInput = displayToScreen(e.key, userInput);

    else if (e.key == 'Backspace') {
        userInput = userInput.slice(0, userInput.length - 1)
        displayToScreen(e.key, userInput);
    } else if (e.key == 'c') {
        userInput = '';
        displayToScreen(e.key, userInput);
    }
    //if enter key is pressed, then evaluate the equation
    //OR more than one operator is pressed, perform evaluation
    if (e.key == 'Enter') {
        console.log('ENTER PRESSED, EVALUATE');

    }
    console.log(userInput);
    console.log('split input');
    splitInput = splitUp(userInput);
    console.log(splitInput);

    if (splitInput.opCount >= 2) {
        splitInput.firstNum = firstCal(splitInput.firstNum);
        console.log('splitInput.firstNum is now '+splitInput.firstNum)
        splitInput.opCount=0;

        operate(splitInput);
    }
    else
    operate(splitInput);


    

    //calcInput = splitUp(userInput);
    //operate(calcInput);
});


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => userInput = displayToScreen(button.textContent, userInput)) //main functions go here
})