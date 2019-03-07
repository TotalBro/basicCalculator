function setDisplay() {
DISPLAY = document.getElementById('display');
console.log(document.getElementById('display'));
}

function makeButtons () {
    for (let i = 0; i < 16; i++) {
        let listElement = document.createElement('li');
        let box = document.createElement('button');
              box.classList.add('button');
              box.setAttribute('id', makeId(i));
              box.innerHTML=makeId(i);
              box.onclick = function () {displayOnScreen(this.id);};

        listElement.appendChild(box);
              

        document.querySelector('.btnList').appendChild(listElement);
    }
}

function makeId (num) {
    switch (num) {
        case 10:
            return '+';
        case 11:
            return '-';
        case 12:
            return '/';
        case 13:
            return '*';
        case 14:
            return '=';
        case 15:
            return 'C';    
        default:
            return num;        
    }
}

function add (numOne, numTwo) {
    return numOne + numTwo;
}

function subtract (numOne, numTwo) {
    return numOne - numTwo;
}

function multiply (numOne, numTwo) {
    return numOne * numTwo;
}

function divide (numOne, numTwo) {
    if (numTwo == 0) {
        return "Can't divide by zero!";
    }
    else {
        return Math.round(numOne/numTwo*100)/100;
    }
}

function operate (displayString) {
    let runningCalc = 0;
    recentReturn = true;
    let displayArray = displayString.split(/([+-/*])/);
    if (displayArray.length == 1) {
        return displayString;
    }
    while (displayArray.length > 1) {
    if (displayArray[0] == '') {
        displayArray.splice(0,1);
        displayArray[0] += displayArray[1];
        displayArray.splice(1, 1);
    }

    let operator = displayArray[1];
    let numOne = +displayArray[0];
    let numTwo = +displayArray[2];
    
     switch (operator) {
            case '*':
               runningCalc = multiply (numOne, numTwo);
               break;
            case '/':
               runningCalc = divide(numOne, numTwo);
               break;
            case '+':
               runningCalc = add(numOne, numTwo);
               break;
            case '-':
               runningCalc = subtract(numOne, numTwo);
               break;
            default:
                return 'Something went real bad wrong.'        
     }
    displayArray[0]=runningCalc;
    displayArray.splice(1,2);
    }
    return runningCalc;
}

function displayOnScreen (input) {
    if (DISPLAY.innerHTML.length >= 20) {
         DISPLAY.innerHTML = 'Overflow!';
        document.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        })
        return;
    }
    switch (input) {
        case '=':
            DISPLAY.innerHTML = operate(DISPLAY.innerHTML);            
            break;
        case 'C':
            DISPLAY.innerHTML = '';
            break;    
        default: 
            if (recentReturn === true && /[0-9]/.test(input)) {
                DISPLAY.innerHTML = input; 
                recentReturn = false;           
            }
            else {
                DISPLAY.innerHTML += input;
                recentReturn = false;
            }    
    }    
}


module.exports = {
    add, subtract, multiply, divide, operate
}
