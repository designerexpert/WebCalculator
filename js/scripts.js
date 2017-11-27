const screen = document.getElementById('screen');
const printScreen = document.getElementById('MsgScreen');

let opNumbers = [];
let current = 0;
let opSign;
let result;
screen.value = 0;
printScreen.value = 0;
// print(currentNumber);
const resetCalc = () => {
    opNumbers = [];
    current = 0;
    opSign;
    result;
    screen.value = 0;
    printScreen.value = 0;
}

const updateScreen = () => {
    if (current >= 2) {
        if (opSign === '+') {
            opNumbers[0] = result;
            printScreen.value = opNumbers[0];
            opNumbers.pop();
            screen.value = 0;
        }
        if (opSign === '*') {
            opNumbers[0] = result;
            printScreen.value = opNumbers[0];
            opNumbers.pop();
            screen.value = 0;
        }
        if (opSign === '/') {
            opNumbers[0] = result;
            printScreen.value = opNumbers[0];
            opNumbers.pop();
            screen.value = 0;
        }
        if (opSign === '-') {
            opNumbers[0] = result;
            printScreen.value = opNumbers[0];
            opNumbers.pop();
            screen.value = 0;
        }
        current = 1;
    }
    if (opNumbers.length === 1 && opSign !== undefined) {
        return printScreen.value = `${opNumbers[0]} ${opSign}`;
    }
    if (opNumbers.length === 1 && opSign === undefined) {
        return printScreen.value = `${opNumbers[0]}`;
    }
    if (opNumbers.length === 2 && current === 1) {
        if (opSign === '+') {
            printScreen.value = `${opNumbers[0]} ${opSign} ${opNumbers[1]} = ` + (opNumbers[0] + opNumbers[1]);
            result = opNumbers[0] + opNumbers[1];
            return;
        }
        if (opSign === '*') {
            printScreen.value = `${opNumbers[0]} ${opSign} ${opNumbers[1]} = ` + (opNumbers[0] * opNumbers[1]);
            result = opNumbers[0] * opNumbers[1];
            return;
        }
        if (opSign === '/') {
            printScreen.value = `${opNumbers[0]} ${opSign} ${opNumbers[1]} = ` + (opNumbers[0] / opNumbers[1]);
            result = opNumbers[0] / opNumbers[1];
            return;
        }
        if (opSign === '-') {
            printScreen.value = `${opNumbers[0]} ${opSign} ${opNumbers[1]} = ` + (opNumbers[0] - opNumbers[1]);
            result = opNumbers[0] - opNumbers[1];
            return;
        }
    }
}

const addToScreen = (evt) => {
    let add = evt.toString();
    if (screen.value === '0') {
        opNumbers[current] = Number(`${add}`);
        screen.value = add;
        updateScreen();
    } else {
        opNumbers[current] = Number(`${screen.value}${add}`);
        screen.value = `${screen.value}${add}`;
        updateScreen();
    }
}

const addPeriod = () => {
    let add = '.';
    let currentNumber = screen.value.split('');
    if (currentNumber.includes('.')) {
        screen.value = screen.value;
    } else {
        opNumbers[current] = Number(`${screen.value}.`);
        screen.value += '.';
    }
}

const remFromScreen = () => {
    let currentNumber = screen.value.split('');
    if (currentNumber.length === 0) return;
    currentNumber.pop();

    let numPop = opNumbers[current].toString().split(''); // Break the current element in opNumbers aray into an arary of strings.
    numPop.pop(); // remove the last member.
    opNumbers[current] = Number(numPop.join('')); // assign opNumbers the Joined version of the array without the last element in it.
    screen.value = currentNumber.join(''); // change the main screen's message
    updateScreen(); // Update the result screen.

}

const addOperator = (mOperator) => {
    opSign = mOperator;
    current++;
    screen.value = 0;
    updateScreen();
}