const cardsArray = [
  '🍎', '🍊', '🍋', '🍉', '🍇', '🍒', '🥝', '🍍', '🥥', '🍌',
  '🌟', '💧', '🔵', '📘', '🌐', '🦋', '🧩', '🧿', '🌀'
];

const gameBoard = document.getElementById('memory-game');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pairsFound = 0;

function createBoard() {
  const selectedCards = selectRandomCards(cardsArray, 8); 
  const cardArrayCopy = duplicateAndShuffle(selectedCards);
  cardArrayCopy.push('Ethik', 'Blau');
  cardArrayCopy.push('Deutsch', 'rot')
  cardArrayCopy.sort(() => 0.5 - Math.random());

  for (let i = 0; i < cardArrayCopy.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = cardArrayCopy[i];

    const span = document.createElement('span');
    span.classList.add('hidden');
    span.textContent = cardArrayCopy[i];
    card.appendChild(span);

    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
  }
}

function selectRandomCards(array, num) {
  const selected = [];
  const copy = array.slice(0);

  for (let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * copy.length);
    selected.push(copy.splice(index, 1)[0]);
  }

  return selected;
}

function duplicateAndShuffle(array) {
  const duplicatedArray = array.concat(array);
  duplicatedArray.sort(() => 0.5 - Math.random());
  return duplicatedArray.slice(0, 20);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkMatch();
}

function checkMatch() {
  let isMatch = firstCard.dataset.value === secondCard.dataset.value;
  if ((firstCard.dataset.value === 'Ethik' && secondCard.dataset.value === 'Blau') || 
      (firstCard.dataset.value === 'Blau' && secondCard.dataset.value === 'Ethik')  
      ) { 
    isMatch = true;
    alert('TEst')
  }
  if ((firstCard.dataset.value === 'Deutsch' && secondCard.dataset.value === 'rot') ||
      (firstCard.dataset.value === 'rot' && secondCard.dataset.value === 'Deutsch')){
    isMatch = true;
    alert('TEst')
  }
  if (isMatch) {
    disableCards();
    pairsFound++;
    if (pairsFound === 10) {
      setTimeout(() => {
        alert('Super! Du hast alle gefunden!');
      }, 500);
    }
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function restartGame() {
  const gameBoard = document.getElementById('memory-game');
  gameBoard.innerHTML = '';
  createBoard();
}
createBoard();
