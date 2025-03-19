//! Selecting the display element
const display = document.getElementById('display')

//! Add event listener for keydown
document.addEventListener('keydown',handleKeyPress)

//* Function to input values into display
function input(value){
    display.innerText = display.innerText === "0" ? value : display.innerText + value
}

//* Function to calculate %
function calcPer(){
    let currentValue = parseFloat(display.innerText)
    display.innerText = !isNaN(currentValue) ? currentValue/100 : "Error"
}

//* Function to clear screen
function clearDisplay(){
    display.innerText = "0"
}

//* Function to delete last character
function deleteLast(){
    display.innerText = display.innerText.length > 1 ? display.innerText.slice(0,-1) : "0"
}

//! Function to calculate
function Calculate(){
    try {
        display.innerText = eval(display.innerText)
    } catch {
        display.innerText = "Error 404"
    }
}

//* Function for key press
function handleKeyPress(event) {
    const key = event.key

    if ( key>='0' && key<='9'){
        input(key)
    } else if (key === '+' || key === '-' || key === '*' || key === '/' ) {
        input(key)
    } else if (key === '%'){
        calcPer()
    } else if (key === 'Enter') {  
        Calculate();
    } else if (key === 'Backspace') {  
        deleteLast();
    } else if (key === 'Escape') {  
        clearDisplay();
    }
}