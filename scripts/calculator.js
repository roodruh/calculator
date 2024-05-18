const body = document.querySelector('body');

const app = document.createElement('div');
body.appendChild(app);
app.setAttribute('id', 'app');

const row0 = document.createElement('div');
app.appendChild(row0);
row0.setAttribute('id', 'row0');

const calcTitle = document.createElement('div');
row0.appendChild(calcTitle);
calcTitle.setAttribute('id', 'calc-title');
calcTitle.setAttribute('class', 'title');
calcTitle.innerHTML = 'CALCULATOR';

const battery = document.createElement('div');
row0.appendChild(battery);
battery.setAttribute('id', 'battery');
battery.innerHTML = '#####';

const hr = document.createElement('hr');
app.appendChild(hr);