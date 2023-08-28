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
    if (key == 'Backspace'||key == '~') {
        key = '';
        // userInput = userInput.slice(0, userInput.length - 1)
    }
    if (key == 'c'||key == 'clear') {
        key = '';
    }

    if (key == 'Enter'||key == '=')
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
        inputObj.firstNum='';
        inputObj.secondNum='';
        inputObj.operator='';
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

const calcButtons = document.querySelectorAll('button');

calcButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        
        if (button.textContent == 'clear') {
            inputString = '';
            inputObj.firstNum='';
            inputObj.secondNum='';
            inputObj.operator='';
            inputString = displayToScreen(button.textContent, inputString);
        }
        
        if (button.textContent == '~') {
            inputString = inputString.slice(0, inputString.length - 1)
            inputString = displayToScreen(button.textContent, inputString);
        }
        if (button.textContent == 'clear') {
            inputString = '';
            inputString = displayToScreen(button.textContent, inputString);
        }


            inputString = displayToScreen(button.textContent, inputString);
    
            for (i = 0; i <= inputString.length; i++) {
                if (inputString[i] == '+' || inputString[i] == '-' ||
                    inputString[i] == '*' || inputString[i] == '/') {
                    inputObj.firstNum = inputString.substring(0, i);
                    inputObj.secondNum = inputString.substring(i + 1, inputString.length);
                    inputObj.operator = inputString[i];
                }
            }
    
    
            if ((inputObj.firstNum != '') && (inputObj.secondNum != '') && (inputObj.operator != '')) {
                console.log("BUTTON READY TO OPERATE");
                if (button.textContent == '=') {
                    cal = operate(inputObj);
                    inputString = displayToScreen(button.textContent, cal);
                }
                if (button.textContent == '+' || button.textContent == '-' || button.textContent == '*' || button.textContent == '/') {
                    cal = operate(inputObj);
                    inputString = displayToScreen(button.textContent, cal);
                }
            }

        // console.log(button.textContent)
        //displayToScreen(button.textContent,'');

    });
})

/*
-want button press and keypad press to append to the same variable
 inputString



let cal;
let inputObj = {
    firstNum: '',
    secondNum: '',
    operator: '',
};
*/