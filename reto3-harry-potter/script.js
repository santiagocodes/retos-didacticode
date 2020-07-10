console.log('Reto3: Harry Potter');

const stationName = document.querySelector('.station__name');
const inputIn = document.querySelector('.passangers__in');
const inputOut = document.querySelector('.passangers__out');
const buttonAddPassengers = document.querySelector('.button__add-passengers');
const buttonTotal = document.querySelector('.button__total');
const pTotal = document.querySelector('.p__total');

var data = [];

var stations = [
   "King's Cross Station",
   'Waverly Station',
   'Weasley Station',
   'Cardiff Central Station',
   'Hogsmead Station',
];

let stationIndex = 0;
let stationLength = stations.length;

stationName.innerHTML = stations[stationIndex];

function nextStation(stationIndex) {
   return (stationName.innerHTML = stations[stationIndex]);
}

nextStation(0);

function clearInputs() {
   inputIn.value = '';
   inputOut.value = '';
}

function addData(e) {
   e.preventDefault();
   let input1 = parseInt(inputIn.value, 10);
   let input2 = parseInt(inputOut.value, 10);

   data.push([input1, input2]);

   //    stationIndex++;
   nextStation(stationIndex++);
   clearInputs();
   console.log(data);
   return data;
}

function pasajerosTotal() {
   let pasajerosFinales = data.reduce((acc, pasajeros) => {
      return (acc += pasajeros[0] - pasajeros[1]);
   }, 0);
   console.log(data, pasajerosFinales);
   return (pTotal.innerHTML = pasajerosFinales);
}

buttonAddPassengers.addEventListener('click', addData);
buttonTotal.addEventListener('click', pasajerosTotal);
