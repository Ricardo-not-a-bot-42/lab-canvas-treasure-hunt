class Character {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.context = context;
    this.score = 0;

    this.image = new Image();
    this.image.src = '/images/character-down.png';
  }

  drawPlayerInitial() {
    this.image.addEventListener('load', () => {
      context.drawImage(
        this.image,
        this.x * gridSpacingX,
        this.y * gridSpacingY,
        48,
        48
      );
    });
  }

  drawPlayer() {
    context.drawImage(
      this.image,
      this.x * gridSpacingX,
      this.y * gridSpacingY,
      48,
      48
    );
  }

  drawScore = () => {
    context.font = '30px Roboto, sans-serif';
    context.textAlign = 'center';
    context.fillText('Score: ' + this.score, canvas.width / 2, 550);
  };

  moveDown() {
    if (this.y < 9) {
      this.y++;
    } else {
      this.y = 0;
    }
    this.image.src = '/images/character-down.png';
  }

  moveUp() {
    if (this.y > 0) {
      this.y--;
    } else {
      this.y = 9;
    }
    this.image.src = '/images/character-up.png';
  }

  moveRight() {
    if (this.x < 9) {
      this.x++;
    } else {
      this.x = 0;
    }
    this.image.src = '/images/character-right.png';
  }

  moveLeft() {
    if (this.x > 0) {
      this.x--;
    } else {
      this.x = 9;
    }
    this.image.src = '/images/character-left.png';
  }
}
