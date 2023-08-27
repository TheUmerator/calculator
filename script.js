//STARTING FROM EXTRA SCRATCH
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

//INPUT: OBJECT
//OUTPUT: NUMBER
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

//INPUTS: PRESSED KEY(STRING), STRING
function displayToScreen(key, userInput) {
    const screen = document.querySelector('.screen');
    if (key == 'Backspace') {
        key = '';
        // userInput = userInput.slice(0, userInput.length - 1)
    }
    if (key == 'c') {
        key = '';
    }

    if (key == 'Enter')
        key = '';

    userInput = screen.textContent = userInput + key;
    return userInput;

}
let inputString = '';
let cal;
let inputObj = {
    firstNum: '',
    secondNum: '',
    operator: '',
};
addEventListener('keydown', (e) => {
    if (e.key == 'Backspace') {
        inputString = inputString.slice(0, inputString.length - 1)
        inputString = displayToScreen(e.key, inputString);
    }
    if (e.key == 'c') {
        inputString = '';
        inputString = displayToScreen(e.key, inputString);
    }
    if (e.location == 3) //3 is the code for the keypad location
    {
        inputString = displayToScreen(e.key, inputString);

        for (i = 0; i <= inputString.length; i++) {
            if (inputString[i] == '+' || inputString[i] == '-' ||
                inputString[i] == '*' || inputString[i] == '/') {
                inputObj.firstNum = inputString.substring(0, i);
                inputObj.secondNum = inputString.substring(i + 1, inputString.length);
                inputObj.operator = inputString[i];
            }
        }


        if ((inputObj.firstNum != '') && (inputObj.secondNum != '') && (inputObj.operator != '')) {
            if (e.key == 'Enter') {
                cal = operate(inputObj);
                inputString = displayToScreen(e.key, cal);
            }
            if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
                cal = operate(inputObj);
                inputString = displayToScreen(e.key, cal);
            }
        }
    }
});

