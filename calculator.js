const buttonSound = document.querySelector('#clickSound');
const display = document.getElementById('display');
let memory = 0;

function playSound() {
    buttonSound.currentTime = 0;
    buttonSound.play();
}

function appendToDisplay(value) {
    display.value += value;
    playSound();
}

function clearDisplay() {
    display.value = '';
    playSound();
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        playSound();
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryRecall() {
    display.value = memory;
    playSound();
}

function memoryClear() {
    memory = 0;
    playSound();
}

function memoryAdd() {
    memory += parseFloat(display.value) || 0;
    playSound();
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
    playSound();
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (key === 'Escape') {
        display.value = '';
    } else if (key === 'm') {
        memoryRecall();
    } else if (key === 'c') {
        memoryClear();
    } else if (key === 'a') {
        memoryAdd();
    } else if (key === 's') {
        memorySubtract();
    }
});
