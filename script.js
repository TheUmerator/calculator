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
-(DONE)Convert userInput into firstNum,secondNum,operator


INPUT REDUNDANCY TO-DO LIST:
-No more than one operator consecutively

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

let userInput = '';
let splitInput = {
    firstNum: '',
    secondNum: '',
    operator: '',
    twoOp: false,
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
//triggers when twoOp >=2. Sets it back to 1 while calculating the first
//expression
//TAKES a string as input
//splits it up into respective objects
//evalutes the calculation
//reset twoOp to 1 and then
//should return the number obtained
function firstCal(firstNum) {
    let firstObj;

    firstObj = splitUp(firstNum);
    cal = operate(firstObj);
    return cal;
}
//takes in string('12+13'), 
//returns an object
/*EXAMPLE OF FUNCTION RETURN
inputObj = {
    firstNum: '12',
    secondNum: '13',
    operator: '+',
    twoOp: 1
};
*/
function splitUp(typedInput, preValue) {
    let inputObj = {};
    let count = 0;
    for (i = 0; i <= typedInput.length; i++) {
        if (typedInput[i] == '+' || typedInput[i] == '-' || typedInput[i] == '*' || typedInput[i] == '/') {
            count++;
            //^I used this method because inputObj.twoOp++ did not work
            inputObj.firstNum = typedInput.substring(0, i);
            inputObj.secondNum = typedInput.substring(i + 1, typedInput.length);
            inputObj.operator = typedInput[i];
        }
    }
    if (count > 1) {
        inputObj.twoOp = true;
        inputObj.firstNum=preValue;
    }
    return inputObj;
}

// function splitUp(typedInput) {
//     let inputObj = {};
//     let count=0;
//     for (i = 0; i <= typedInput.length; i++) {
//         if (typedInput[i] == '+' || typedInput[i] == '-' || typedInput[i] == '*' || typedInput[i] == '/') {
//             count++;
//             //^I used this method because inputObj.twoOp++ did not work
//             inputObj.firstNum = typedInput.substring(0, i);
//             inputObj.secondNum = typedInput.substring(i + 1, typedInput.length);
//             inputObj.operator = typedInput[i];
//         }
//     }
//     if (count>1)
//     inputObj.twoOp=true;
//     return inputObj;
// }
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
//NEED TO MAKE THIS ITS OWN FUNCTION FOR CLARITY LATER ON
let calcFirstNum;

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
    // if (e.key == 'Enter') {
    //     console.log('ENTER PRESSED, EVALUATE');

    // }


    console.log(userInput);
    splitInput = splitUp(userInput,calcFirstNum);
    console.log('split input');
    console.log(splitInput);

    if (splitInput.twoOp == true) {
        console.log("splitInput.firstNum is currently " + splitInput.firstNum);

        calcFirstNum = firstCal(splitInput.firstNum);
        // splitInput.firstNum = calcFirstNum;

        console.log('splitInput.firstNum is now ' + splitInput.firstNum)
        console.log('split input after firstCal');
        console.log(splitInput);

        splitInput.twoOp = false;

        // splitInput.twoOp=count;
        // splitInput.twoOp = splitInput.twoOp - 1 || 1;
        //THIS IS WHERE IT IS NOT DECREMENTING

        // operate(splitInput);
    } else
        console.log(userInput + ' is ' + operate(splitInput));




    //calcInput = splitUp(userInput);
    //operate(calcInput);
});


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => userInput = displayToScreen(button.textContent, userInput)) //main functions go here
})