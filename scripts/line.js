class Line extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextDraft.strokeStyle = style.curCol.stroke;
    this.contextDraft.lineJoin = style.joint;
    this.contextDraft.lineWidth = style.strokeWth;

    this.contextReal.strokeStyle = style.curCol.stroke;
    this.contextReal.lineJoin = style.joint;
    this.contextReal.lineWidth = style.strokeWth;

    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.drawDraft(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.closePath();
    this.contextReal.stroke();
  }

  onMouseLeave() {}
  onMouseEnter() {}

  drawDraft(x, y) {
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(x, y);
    this.contextDraft.closePath();
    this.contextDraft.stroke();
  }
}
