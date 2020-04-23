class Treasure {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.context = context;
    this.image = new Image();
    this.image.src = '/images/treasure.png';
  }

  drawTreasureInitial() {
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

  drawTreasure() {
    context.drawImage(
      this.image,
      this.x * gridSpacingX,
      this.y * gridSpacingY,
      48,
      48
    );
  }
}
