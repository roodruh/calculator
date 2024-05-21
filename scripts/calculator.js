const body = document.querySelector('body');
const hr = document.createElement('hr');

//creating app window
const app = document.createElement('div');
body.appendChild(app);
app.setAttribute('id', 'app');

//creating row 0 of the app window
const row0 = document.createElement('div');
app.appendChild(row0);
row0.setAttribute('class', 'row');

//adding calculator title to row 0
const calcTitle = document.createElement('div');
row0.appendChild(calcTitle);
calcTitle.setAttribute('id', 'calc-title');
calcTitle.setAttribute('class', 'title');
calcTitle.innerText = 'CALCULATOR';

//adding battery symbol to row 0
const battery = document.createElement('div');
row0.appendChild(battery);
battery.setAttribute('id', 'battery');
battery.innerText = '#####';

//adding hr element after row 0
app.appendChild(hr);

//creating row 1
const row1 = document.createElement('div');
app.appendChild(row1);
row1.setAttribute('class', 'row');

//adding form elemnt to row 1
const calcInput = document.createElement('input');
row1.appendChild(calcInput);
calcInput.setAttribute('type', 'form');
calcInput.setAttribute('id', 'calc-input');

//creating row 2
const row2 = document.createElement('div');
app.appendChild(row2);
row2.setAttribute('class', 'row');

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
changeSign.setAttribute('type', 'btn light');
changeSign.innerText = '+/-';

//creating modulus button
const modulus = document.createElement('button');
topRow.appendChild(modulus);
modulus.setAttribute('type', 'button');
modulus.setAttribute('type', 'btn light');
modulus.innerText = '%';

//creating middle row for left column
const midRow = document.createElement('div');
leftColumn.appendChild(midRow);
midRow.setAttribute('class', 'row, mid-row');

//creating number pad
const numPad = document.createAttribute('div');
midRow.appendChild(numPad);

    //creating for loop for generating number keys
    for(let i = 0; i < 9; i++){
        const numKey = stringTo
    }
