class Background {
  constructor(
    width,
    height,
    gridSizeX,
    gridSizeY,
    gridSpacingX,
    gridSpacingY,
    context
  ) {
    this.width = width;
    this.height = height;
    this.gridSizeX = gridSizeX;
    this.gridSizeY = gridSizeY;
    this.gridSpacingX = gridSpacingX;
    this.gridSpacingY = gridSpacingY;
    this.context = context;
  }

  drawGrid() {
    for (let i = 0; i <= gridSizeX; i++) {
      context.beginPath();
      context.moveTo(i * gridSpacingX, 0);
      context.lineTo(i * gridSpacingX, height);
      context.stroke();
      context.closePath();
    }

    for (let i = 0; i <= gridSizeY; i++) {
      context.beginPath();
      context.moveTo(0, i * gridSpacingY);
      context.lineTo(width, i * gridSpacingY);
      context.stroke();
      context.closePath();
    }
    // TODO: write the code of the function
  }
}
