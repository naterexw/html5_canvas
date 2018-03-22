class Rectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event, style) {
    this.contextDraft.strokeStyle = style.curCol.stroke;
    this.contextDraft.lineWidth = style.brushSize;
    this.contextReal.strokeStyle = style.curCol.stroke;
    this.contextReal.lineWidth = style.brushSize;
    this.contextDraft.shadowBlur = 'none';
    this.contextReal.shadowBlur = 'none';
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    saveImage(canvasReal, storeImg);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
