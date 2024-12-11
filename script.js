'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

var playerActif = 0;
var switchPlayer = function () {
  playerActif = 1 - playerActif;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function (e) {
  e.preventDefault();
  var diceRandom = Math.ceil(Math.random() * 6);
  dice.src = `dice-${diceRandom}.png`;
  dice.classList.remove('hidden');
  if (diceRandom != 1) {
    document.querySelector(`#current--${playerActif}`).textContent =
      Number(document.querySelector(`#current--${playerActif}`).textContent) +
      diceRandom;
  } else switchPlayer();
});

btnHold.addEventListener('click', function (e) {
  document.querySelector(`#score--${playerActif}`).textContent =
    Number(document.querySelector(`#current--${playerActif}`).textContent) +
    Number(document.querySelector(`#score--${playerActif}`).textContent);
  if (
    Number(document.querySelector(`#score--${playerActif}`).textContent) >= 20
  ) {
    document
      .querySelector(`.player--${playerActif}`)
      .classList.add('player--winner');
    dice.classList.add('hidden');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
  }
  switchPlayer();
});

btnNew.addEventListener('click', function (e) {
  e.preventDefault();
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  if (playerActif != 0) {
    switchPlayer();
  }
});
