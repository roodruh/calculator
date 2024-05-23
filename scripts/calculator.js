const body = document.querySelector('body');
const hr = document.createElement('hr');

//creating app window
const app = document.createElement('div');
body.appendChild(app);
app.setAttribute('id', 'app');

// //creating row 0 of the app window
// const row0 = document.createElement('div');
// app.appendChild(row0);
// row0.setAttribute('class', 'row');

// //adding calculator title to row 0
// const calcTitle = document.createElement('div');
// row0.appendChild(calcTitle);
// calcTitle.setAttribute('id', 'calc-title');
// calcTitle.setAttribute('class', 'title');
// calcTitle.innerText = 'CALCULATOR';

// //adding battery symbol to row 0
// const battery = document.createElement('div');
// row0.appendChild(battery);
// battery.setAttribute('id', 'battery');
// battery.innerText = '#####';

//adding hr element after row 0
// app.appendChild(hr);

//adding form elemnt to row 1
const calcInput = document.createElement('input');
app.appendChild(calcInput);
calcInput.setAttribute('type', 'form');
calcInput.setAttribute('id', 'calc-input');

//creating row 2
const row2 = document.createElement('div');
app.appendChild(row2);
row2.setAttribute('id', 'row-2');

//creating left column
const leftColumn = document.createElement('div');
row2.appendChild(leftColumn);
leftColumn.setAttribute('id', 'l-col')
leftColumn.setAttribute('class', 'col');

//creating top row for left column
const topRow = document.createElement('div');
leftColumn.appendChild(topRow);
topRow.setAttribute('class', 'row, top-row');

//creating AC button
const resetButton = document.createElement('button');
topRow.appendChild(resetButton);
resetButton.setAttribute('type', 'button');
resetButton.setAttribute('class', 'btn light');
resetButton.innerText = 'AC';

//creating change sign button
const changeSign = document.createElement('button');
topRow.appendChild(changeSign);
changeSign.setAttribute('type', 'button');
changeSign.setAttribute('class', 'btn light');
changeSign.innerText = '+/-';

//creating modulus button
const modulus = document.createElement('button');
topRow.appendChild(modulus);
modulus.setAttribute('type', 'button');
modulus.setAttribute('class', 'btn light');
modulus.innerText = '%';

//creating middle row for left column
const midRow = document.createElement('div');
leftColumn.appendChild(midRow);
midRow.setAttribute('class', 'row, mid-row');

//creating number pad
const numPad = document.createElement('div');
midRow.appendChild(numPad);
numPad.setAttribute('id', 'num-pad');

//function to generate numKeys for each row
function KeyGen(m, n, rowName) {
    for(m ; m < n + 1; m++) {
        const numKey = document.createElement('button');
        rowName.appendChild(numKey);
        numKey.setAttribute('type', 'button')
        numKey.setAttribute('id', m);
        numKey.setAttribute('class', 'num-key btn dark');
        numKey.innerText = m;
    }
}

//creating 7,8,9 row for top row of numpad
const numPadT = document.createElement('div');
numPad.appendChild(numPadT);
numPadT.setAttribute('class', 'num-row');
KeyGen(7, 9, numPadT);

const numPadM = document.createElement('div');
numPad.appendChild(numPadM);
numPadM.setAttribute('class', 'num-row');
KeyGen(4, 6, numPadM);

const numPadB = document.createElement('div');
numPad.appendChild(numPadB);
numPadB.setAttribute('class', 'num-row');
KeyGen(1, 3, numPadB);

const bottomRow = document.createElement('div');
leftColumn.appendChild(bottomRow);
bottomRow.setAttribute('class', 'bottom-row');

const zeroBtn = document.createElement('button');
bottomRow.appendChild(zeroBtn);
zeroBtn.setAttribute('class', 'btn dark zero-btn');
zeroBtn.innerText = 0;


//creating right column
const rightColumn = document.createElement('div');
row2.appendChild(rightColumn);
rightColumn.setAttribute('id', 'r-col')
rightColumn.setAttribute('class', 'col');

//creating division btn
const divBtn = document.createElement('btn');
rightColumn.appendChild(divBtn);
divBtn.setAttribute('type', 'button');
divBtn.setAttribute('class', 'btn warning');
divBtn.innerText = '/';

//creating multiplication button
const multBtn = document.createElement('btn');
rightColumn.appendChild(multBtn);
multBtn.setAttribute('type', 'button');
multBtn.setAttribute('class', 'btn warning');
multBtn.innerText = 'x';

//creating minus button
const minusBtn = document.createElement('btn');
rightColumn.appendChild(minusBtn);
minusBtn.setAttribute('type', 'button');
minusBtn.setAttribute('class', 'btn warning');
minusBtn.innerText = '-';

//creating addition button
const addBtn = document.createElement('button');
rightColumn.appendChild(addBtn);
addBtn.setAttribute('type', 'button');
addBtn.setAttribute('class', 'btn warning');
addBtn.innerText = '+';

//creating equal to button;
const equalBtn = document.createElement('button');
rightColumn.appendChild(equalBtn);
equalBtn.setAttribute('type', 'button');
equalBtn.setAttribute('class', 'btn warning');
equalBtn.innerText = '=';










