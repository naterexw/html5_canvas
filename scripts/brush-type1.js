class BrushType1 extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event, style) {
    this.context.fillStyle = style.curCol.fill;
    this.context.lineJoin = style.joint;
    this.context.lineWidth = style.brushSize;
    this.context.shadowBlur = 20;
    this.context.lineCap = 'round';
    this.context.shadowColor = style.curCol.fill;
    this.draw(coord[0], coord[1]);
  }

  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() { }

  onMouseUp() {
    saveImage(canvasReal, storeImg);
  }

  onMouseLeave() { }
  onMouseEnter() { }

  draw(x, y) {
    if (Math.random() > 0.2) {
      this.context.beginPath();
      this.context.arc(x, y, getRandomInt(0, 15), 0, 2 * Math.PI, false);
      this.context.closePath();
      this.context.fill();
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}