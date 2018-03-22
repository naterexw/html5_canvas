class BrushType2 extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event, style) {
    this.context.strokeStyle = style.curCol.stroke;
    this.context.lineJoin = style.joint;
    this.context.lineWidth = style.brushSize;
    this.context.shadowBlur = 0;
    this.context.lineCap = 'round';
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
    for (var i = -10; i < 10; i += 4) {
      for (var j = -10; j < 10; j += 4) {
        if (Math.random() > 0.3) {
          this.context.fillStyle = ['red', 'orange', 'yellow', 'green', 'light-blue', 'blue', 'purple']
          [getRandomInt(0, 6)];
          this.context.fillRect(x + i, y + j, 4, 4);
        }
      }
    }
  }

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}