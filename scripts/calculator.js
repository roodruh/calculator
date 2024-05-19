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
calcTitle.innerHTML = 'CALCULATOR';

//adding battery symbol to row 0
const battery = document.createElement('div');
row0.appendChild(battery);
battery.setAttribute('id', 'battery');
battery.innerHTML = '#####';

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

//creating row above numberpad of calculator
const topRow = document.createElement('div');
row2.appendChild('')
