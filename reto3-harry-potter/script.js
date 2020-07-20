console.log('Reto3: Harry Potter');

const stationName = document.querySelector('.station__name');
const passengersIn = document.querySelector('.passengers__in');
const passengersOut = document.querySelector('.passengers__out');
const buttonAddPassengers = document.querySelector('.button__add-passengers');
const passengersTotal = document.querySelector('.passengers__total');
const form = document.querySelector('form');

const stations = [
   "King's Cross",
   'Waverly',
   'Weasley',
   'Cardiff Central',
   'Hogsmeade',
];

const passengerLog = [];

function submitPassengerLog(e) {
   e.preventDefault();
   addToPassengerLog();
   let totalPassengers = calculatePassengersTotal();

   if (totalPassengers >= 0) {
      // Display total number of passengers onboard.
      // Change message on the last station to indicate arrival to Hogwarts.
      if (stationIndex === stationLength - 2) {
         passengersTotal.innerHTML = `${totalPassengers} passengers made it to Hogwarts.`;
      } else {
         passengersTotal.innerHTML = `Passengers onboard: ${totalPassengers}`;
      }
      // Clear input boxes.
      clearInputs();
      // Display next station
      stationIndex++;
      nextStation(stationIndex);
   } else {
      removeFromPassengerLog();
      clearInputs();
      window.confirm(
         "Check how many witches and wizards are on the train. You can't have more of them leaving the train than are onboard."
      );
   }
}

function addToPassengerLog() {
   let passengersInValue = passengersIn.value;
   let passengersOutValue = passengersOut.value;

   // Replace empty input boxes with 0 before adding to log
   // Add last entry to the passenger log
   // [ [passengersIn1,passengersOut1],[passengersIn2,passengersOut2]... ]
   if (passengersInValue && passengersOutValue) {
      return passengerLog.push([passengersInValue, passengersOutValue]);
   } else if (passengersInValue && !passengersOutValue) {
      return passengerLog.push([passengersInValue, 0]);
   } else if (!passengersInValue && passengersOutValue) {
      return passengerLog.push([0, passengersOutValue]);
   } else {
      return passengerLog.push([0, 0]);
   }
}

function removeFromPassengerLog() {
   // Remove last entry from passenger log
   return passengerLog.pop();
}

function clearInputs() {
   passengersIn.value = '';
   passengersOut.value = '';
}

function calculatePassengersTotal() {
   // Calculate number of passengers onboard.
   return passengerLog.reduce((onboard, [boarding, disembarking]) => {
      return (onboard += boarding - disembarking);
   }, 0);
}

let stationIndex = 0;
let stationLength = stations.length;

function nextStation(stationIndex) {
   // Display name of station.
   // For the last two stations the text on the button will change.
   // On the last station the button will be disabled.
   if (stationIndex == stationLength - 2) {
      buttonAddPassengers.textContent = 'Last Station Coming Up';
   } else if (stationIndex == stationLength - 1) {
      buttonAddPassengers.textContent = 'End of Journey';
      buttonAddPassengers.disabled = true;
   }
   return (stationName.innerHTML = stations[stationIndex]);
}

nextStation(stationIndex);

form.addEventListener('submit', submitPassengerLog);
