function makebuttons () {
    for (let i = 0; i < 14; i++) {
        let listElement = document.createElement('li');
        let box = document.createElement('button');
              box.setAttribute('class','button');
              box.setAttribute('id', makeId(i));
              box.setAttribute('')

        listElement.appendChild(box);      

        document.querySelector('.containerList').appendChild(listElement);
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
        return numOne/numtwo;
    }
}

function operate (operator, numOne, numTwo) {
    switch (operator) {
        case '*':
            return multiply (numOne, numTwo);
        case '/':
            return divide(numOne, numTwo);
        case '+':
            return add(numOne, numTwo);
        case '-':
            return subtract(numOne, numTwo);
        default:
            return 'Something went real bad wrong.'        
    }
}

module.exports = {
    add,
    subtract
}