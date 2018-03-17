class RectangleFill extends PaintFunction {
  constructor(
    contextReal,
    contextDraft
  ) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event, style) {
    this.contextReal.fillStyle = style.curCol.fill;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event, style) {
    this.contextDraft.fillStyle = style.curCol.fill;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
