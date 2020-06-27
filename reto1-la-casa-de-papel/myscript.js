const formulario = document.querySelector('form');
const box = document.querySelector('.wrapper-box');
const input = document.querySelector('input');
const resultado = document.querySelector('.resultado');
const caso = document.querySelector('h1');

const atracadores = [
   'NAIROBI',
   'TOKIO',
   'BERLIN',
   'ESTOCOLMO',
   'HELSINKI',
   'LISBOA',
   'DENVER',
   'MOSCU',
   'RIO',
   'OSLO',
   'PALERMO',
];

function esAtracador(e) {
   e.preventDefault();
   let sospechoso = input.value;

   let posibleSospechoso = sospechoso.split(' ').join('').toUpperCase();

   if (atracadores.includes(posibleSospechoso)) {
      resultado.innerHTML = `"${posibleSospechoso}" pertenece a la banda de El Profesor.`;
      box.classList.add('alert');
      caso.classList.add('alert-h1');
      caso.innerHTML = '¡Alerta!';
      formulario.reset();
   } else {
      resultado.innerHTML = `"${posibleSospechoso}" es inocente en este caso.`;
      box.classList.remove('alert');
      caso.classList.remove('alert-h1');
      caso.innerHTML = 'Caso';
      formulario.reset();
   }
}

formulario.addEventListener('submit', esAtracador);
