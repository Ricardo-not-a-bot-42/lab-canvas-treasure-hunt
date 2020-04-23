// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height - 100;

const gridSizeX = 10;
const gridSizeY = 10;
const gridSpacingX = width / gridSizeX;
const gridSpacingY = height / gridSizeY;

let background = new Background(
  width,
  height,
  gridSizeX,
  gridSizeY,
  gridSpacingX,
  gridSpacingY,
  context
);
let character = new Character(0, 0);

// Iteration 1

function drawEverything() {
  treasure = createNewTreasure();
  background.drawGrid();
  character.drawPlayerInitial();
  treasure.drawTreasureInitial();
  character.drawScore();
}

function redrawEverything() {
  context.clearRect(0, 0, width, 600);
  background.drawGrid();
  character.drawPlayer();
  treasure.drawTreasure();
  character.drawScore();
}

const createNewTreasure = () => {
  const setTreasurePosition = () => {
    let positionX = Math.floor(Math.random() * gridSizeX);
    let positionY = Math.floor(Math.random() * gridSizeY);
    if (positionX === character.x && positionY === character.y) {
      console.log('treasure place occupied');
      return setTreasurePosition();
    }
    return [positionX, positionY];
  };
  let treasureX = setTreasurePosition()[0];
  let treasureY = setTreasurePosition()[1];
  return new Treasure(treasureX, treasureY);
};

const runGameLogic = () => {
  if (character.x === treasure.x && character.y === treasure.y) {
    delete treasure;
    character.score += 100;
    treasure = createNewTreasure();
  }
  redrawEverything();
};

window.addEventListener('keydown', (event) => {
  event.preventDefault();

  if (event.keyCode === 40) {
    // Perform logic
    character.moveDown();

    runGameLogic();
  }
  if (event.keyCode === 38) {
    // Perform logic
    character.moveUp();
    runGameLogic();
  }
  if (event.keyCode === 37) {
    // Perform logic
    character.moveLeft();
    runGameLogic();
  }
  if (event.keyCode === 39) {
    // Perform logic
    character.moveRight();
    runGameLogic();
  }
});

drawEverything();
