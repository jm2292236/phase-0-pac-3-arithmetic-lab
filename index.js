function add(number1, number2) {
    return number1 += number2;
}

function subtract(number1, number2) {
    return number1 -= number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function increment(number) {
    return ++number;
}

function decrement(number) {
    return --number;
}

function makeInt(numberAsString) {
    return parseInt(numberAsString, 10);
}

function preserveDecimal(numberAsString) {
    return parseFloat(numberAsString, 10);
}

