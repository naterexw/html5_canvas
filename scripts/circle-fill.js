class CircleFill extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event, style) {
    this.contextReal.fillStyle = style.curCol.fill;
    this.contextDraft.fillStyle = style.curCol.fill;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.radius = Math.sqrt(Math.pow(this.origX - coord[0], 2) + Math.pow(this.origY - coord[1], 2));
    this.contextDraft.beginPath();
    this.contextDraft.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI, false);
    this.contextDraft.fill();
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI, false);
    this.contextReal.fill();
    saveImage(canvasReal);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
