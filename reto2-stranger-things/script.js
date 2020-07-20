const form = document.querySelector('form');
const input = document.querySelector('#input__form');
const cardContent = document.querySelector('.card__content');
const card1 = document.querySelector('#card__back__one');
const card2 = document.querySelector('#card__back__two');
const card3 = document.querySelector('#card__back__three');
const cardBack = document.querySelectorAll('.card__back');
const btnBack = document.querySelectorAll('.btn__back');

function checkNumber(e) {
   e.preventDefault();

   let inputNumber = input.value;

   if (inputNumber == 6.62607015) {
      card1.classList.add('display');
   } else if (inputNumber == 6.62607004) {
      card2.classList.add('display');
   } else {
      card3.classList.add('display');
   }
   flipCard();
   form.reset();
}

function flipCard() {
   cardContent.classList.toggle('is-flipped');
}

function flipCardBack() {
   setTimeout(function () {
      card1.classList.remove('display');
      card2.classList.remove('display');
      card3.classList.remove('display');
   }, 3000);

   flipCard();
}

form.addEventListener('submit', checkNumber);
btnBack.forEach(function (btn) {
   btn.addEventListener('click', flipCardBack);
});
