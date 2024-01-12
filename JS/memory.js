const cardsArray = [
    "CO2-Emissionen", "Bio-Lebensmittel", "Klimawandel", "Fleischkonsum", "Vegetation", "Forstwirtschaftliches Prinzip",
    "ökologischen Fußabdruck", "regionale Lebensmittel", "erneuerbare Energien", "Umwelt"
];

const gameBoard = document.getElementById('memory-game');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pairsFound = 0;
const kofetti = document.getElementById('konfetti')

function createBoard() {
  const selectedCards = selectRandomCards(cardsArray, 10); 
  const cardArrayCopy = duplicateAndShuffle(selectedCards);
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
  if (firstCard.dataset.value === 'CO2-Emissionen' && secondCard.dataset.value === 'CO2-Emissionen'){ 
    isMatch = true;
    alert('CO2-Emissionen bezeichnen den Ausstoß von Kohlenstoffdioxid, einem stark wirksamen Treibhausgas')
  }
  if (firstCard.dataset.value === 'Bio-Lebensmittel' && secondCard.dataset.value === 'Bio-Lebensmittel'){
    isMatch = true;
    alert('Als Bio-Lebensmittel werden Lebensmittel aus der ökologischen Landwirtschaft bezeichnet. Der Begriff ist in der EU gesetzlich definiert')
  }
  if (firstCard.dataset.value === 'Klimawandel' && secondCard.dataset.value === 'Klimawandel'){
    isMatch = true;
    alert('ein deutlicher, dramatischer, globaler, unaufhaltsamer, weltweiter Klimawandel')
  }
  if (firstCard.dataset.value === 'Fleischkonsum' && secondCard.dataset.value === 'Fleischkonsum'){
    isMatch = true;
    alert('Fleischkonsum ist der Verzehr von Fleisch als menschliches Nahrungsmittel, direkt oder in Form von Fleischprodukten oder im weiteren Sinne der gesamte Verbrauch von Fleisch durch den Menschen.')
  }
  if (firstCard.dataset.value === 'Vegetation' && secondCard.dataset.value === 'Vegetation'){
    isMatch = true;
    alert('ein bestimmtes Gebiet bedeckende Pflanzen; Pflanzendecke, Bestand an Pflanzen')
  }
  if (firstCard.dataset.value === 'Forstwirtschaftliches Prinzip' && secondCard.dataset.value === 'Forstwirtschaftliches Prinzip'){
    isMatch = true;
    alert('Nachhaltigkeit-forstwirtschaftliches Prinzip, nach dem nicht mehr Holz gefällt werden darf, als jeweils nachwachsen kann')
  }
  if (firstCard.dataset.value === 'ökologischen Fußabdruck' && secondCard.dataset.value === 'ökologischen Fußabdruck'){
    isMatch = true;
    alert('Mit dem „ökologischen Fußabdruck“ wird gemessen, wie viel Fläche auf der Erde gebraucht wird, um all das herzustellen und zu entsorgen, was ein Mensch für seinen persönlichen Lebensstil benötigt. Die Schätze unserer Erde sind begrenzt. Manche wachsen wieder nach, oft allerdings erst in vielen Jahren')
  }
  if (firstCard.dataset.value === 'regionale Lebensmittel' && secondCard.dataset.value === 'regionale Lebensmittel'){
    isMatch = true;
    alert('regionale Lebensmittel sind Lebensmittel, die in derselben Region erzeugt und verbraucht werden. Dabei ist der Begriff „Region“ als solcher weder geschützt noch gibt es eine allgemein verbindliche Definition oder Norm.')
  }
  if (firstCard.dataset.value === 'erneuerbare Energien' && secondCard.dataset.value === 'erneuerbare Energien'){
    isMatch = true;
    alert('Als erneuerbare Energien oder regenerative Energien, auch alternative Energien, werden Energiequellen bezeichnet, die im menschlichen Zeithorizont für nachhaltige Energieversorgung praktisch unerschöpflich zur Verfügung stehen oder sich verhältnismäßig schnell erneuern')
  }
  if (firstCard.dataset.value === 'Umwelt' && secondCard.dataset.value === 'Umwelt'){
    isMatch = true;
    alert('Alles, was einen Menschen umgibt, auf ihn einwirkt und seine Lebensbedingungen beeinflusst, insbesondere die Natur')
  }
  if (isMatch) {
    disableCards();
    pairsFound++;
    if (pairsFound === 10) {
      setTimeout(() => {
        alert('Super! Du hast alle gefunden!');
      }, 500);
      gameBoard.innerHTML = '';
      kofetti.style.opacity = 1;
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
  konfetti.innerHTML = '';
  createBoard();
}

//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();
});

createBoard();
