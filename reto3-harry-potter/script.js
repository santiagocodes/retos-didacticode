console.log('Reto3: Harry Potter');

const stationName = document.querySelector('.station__name');
const passengersIn = document.querySelector('.passengers__in');
const passengersOut = document.querySelector('.passengers__out');
const buttonAddPassengers = document.querySelector('.button__add-passengers');
const passengersTotal = document.querySelector('.passengers__total');

var stations = [
   "King's Cross Station",
   'Waverly Station',
   'Weasley Station',
   'Cardiff Central Station',
   'Hogsmead Station',
];

var passengerLog = [];

function submitPassengerLog() {
   addToPassengerLog();
   calculatePassengersTotal();
   clearInputs();

   stationIndex++;
   nextStation(stationIndex);
}

function addToPassengerLog() {
   let passengersInNumber = parseInt(passengersIn.value, 10);
   let passengersOutNumber = parseInt(passengersOut.value, 10);

   if (passengersInNumber && passengersOutNumber) {
      return passengerLog.push([passengersInNumber, passengersOutNumber]);
   } else if (passengersInNumber && !passengersOutNumber) {
      return passengerLog.push([passengersInNumber, 0]);
   } else if (!passengersInNumber && passengersOutNumber) {
      return passengerLog.push([0, passengersOutNumber]);
   } else {
      return passengerLog.push([1, 1]);
   }
}

function calculatePassengersTotal() {
   let passegersTotalNumber = passengerLog.reduce((acc, passengers) => {
      return (acc += passengers[0] - passengers[1]);
   }, 0);

   if (stationIndex == stationLength - 2) {
      return (passengersTotal.innerHTML = `${passegersTotalNumber} passengers made it to Hogwarts.`);
   } else {
      return (passengersTotal.innerHTML = `Passengers onboard: ${passegersTotalNumber}`);
   }
}

function clearInputs() {
   passengersIn.value = '';
   passengersOut.value = '';
}

let stationIndex = 0;
let stationLength = stations.length;

function nextStation(stationIndex) {
   if (stationIndex == stationLength - 2) {
      buttonAddPassengers.textContent = 'Last Station Coming Up';
   } else if (stationIndex == stationLength - 1) {
      buttonAddPassengers.textContent = 'End of Journey';
      buttonAddPassengers.disabled = true;
   }
   return (stationName.innerHTML = stations[stationIndex]);
}

nextStation(stationIndex);

buttonAddPassengers.addEventListener('click', submitPassengerLog);
