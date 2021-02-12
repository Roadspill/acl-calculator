// Global Constants and Variables
const addInput1 = document.getElementById('addition-input-1');
const addInput2 = document.getElementById('addition-input-2');
const addButton = document.getElementById('addition-button');
const addDisplay = document.getElementById('addition-display');
const subtractionInput1 = document.getElementById('subtraction-input-1');
const subtractionInput2 = document.getElementById('subtraction-input-2');
const subtractionButton = document.getElementById('subtraction-button');
const subtractionDisplay = document.getElementById('subtraction-display');
const multiplicationInput1 = document.getElementById('multiplication-input-1');
const multiplicationInput2 = document.getElementById('multiplication-input-2');
const multiplicationButton = document.getElementById('multiplication-button');
const multiplicationDisplay = document.getElementById('multiplication-display');
const divisionInput1 = document.getElementById('division-input-1');
const divisionInput2 = document.getElementById('division-input-2');
const divisionButton = document.getElementById('division-button');
const divisionDisplay = document.getElementById('division-display');

// import functions and grab DOM elements
function addCalc() {

}

addButton.addEventListener('click', () => {
    var x = parseFloat(addInput1.value);
    var y = parseFloat(addInput2.value);
    var total = x + y;
  
    addDisplay.textContent = total;
});

subtractionButton.addEventListener('click', () => {
    var x = parseFloat(subtractionInput1.value);
    var y = parseFloat(subtractionInput2.value);
    var total = x - y;

    subtractionDisplay.textContent = total;
});

multiplicationButton.addEventListener('click', () => {
    var x = parseFloat(multiplicationInput1.value);
    var y = parseFloat(multiplicationInput2.value);
    var total = x * y;
    
    multiplicationDisplay.textContent = total;
});

divisionButton.addEventListener('click', () => {
    var x = parseFloat(divisionInput1.value);
    var y = parseFloat(divisionInput2.value);
    var total = x / y;
      
    divisionDisplay.textContent = total;
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