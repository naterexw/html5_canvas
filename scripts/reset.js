class Reset extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.reset();
  }

  reset() {
    this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    saveImage(canvasReal);
  }

  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
