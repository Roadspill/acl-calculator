// Global Constants and Variables
const addInput1 = document.getElementById('input-addition-1');
const addInput2 = document.getElementById('input-addition-2');
const addButton = document.getElementById('button-addition');
const addDisplay = document.getElementById('display-addition');
const subtractionInput1 = document.getElementById('input-subtraction-1');
const subtractionInput2 = document.getElementById('input-subtraction-2');
const subtractionButton = document.getElementById('button-subtraction');
const subtractionDisplay = document.getElementById('display-subtraction');
const multiplicationInput1 = document.getElementById('input-multiplication-1');
const multiplicationInput2 = document.getElementById('input-multiplication-2');
const multiplicationButton = document.getElementById('button-multiplication');
const multiplicationDisplay = document.getElementById('display-multiplication');
const divisionInput1 = document.getElementById('input-division-1');
const divisionInput2 = document.getElementById('input-division-2');
const divisionButton = document.getElementById('button-division');
const divisionDisplay = document.getElementById('display-division');

// Number Formatter (Testing)
const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,      
    maximumFractionDigits: 5,
 });

// import functions and grab DOM elements
function addCalc() {

}

addButton.addEventListener('click', () => {
    var x = parseFloat(addInput1.value);
    var y = parseFloat(addInput2.value);
    var total = x + y;
    
    addDisplay.textContent = formatter.format(total);
});

subtractionButton.addEventListener('click', () => {
    var x = parseFloat(subtractionInput1.value);
    var y = parseFloat(subtractionInput2.value);
    var total = x - y;

    subtractionDisplay.textContent = formatter.format(total);
});

multiplicationButton.addEventListener('click', () => {
    var x = parseFloat(multiplicationInput1.value);
    var y = parseFloat(multiplicationInput2.value);
    var total = x * y;
    
    multiplicationDisplay.textContent = formatter.format(total);
});

divisionButton.addEventListener('click', () => {
    var x = parseFloat(divisionInput1.value);
    var y = parseFloat(divisionInput2.value);
    var total = x / y;
      
    divisionDisplay.textContent = formatter.format(total);
});



//   nameDisplay.textContent = nameInput.value;
//   nameDisplay.classList.add("extra-bold");
//   nameInput.value = '';


// **** Attempt to build with no ID's. ****
// const button = document.querySelectorAll('button');
// button.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(button.closest('div'));
// });

// Nametag Javascript - Using for 
// const nameInput = document.getElementById('name-input');
// const changeButton = document.getElementById('name-change-button');
// const nameDisplay = document.getElementById('name-display');

// changeButton.addEventListener('click', () => {
//   // console.log('Button Clicked');
//   nameDisplay.textContent = nameInput.value;
//   nameDisplay.classList.add("extra-bold");
//   nameInput.value = '';
// });

// nameInput.addEventListener('keyup', function(event) {
//   var key = event.key || event.keyCode;
//   if (key === 'Enter' || key === 13) {
//     event.preventDefault
    
//     changeButton.click();  // document.getElementById('name-change-button').click();
//   }
// });

// console.log('Hello')