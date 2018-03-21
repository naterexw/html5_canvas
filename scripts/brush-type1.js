let points = [];

class BrushType1 extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event, style) {
    this.contextReal.strokeStyle = style.curCol.stroke;
    this.contextReal.lineJoin = style.joint;
    this.contextReal.lineWidth = style.brushSize + 1;
    this.contextDraft.strokeStyle = style.curCol.stroke;
    this.contextDraft.lineJoin = style.joint;
    this.contextDraft.lineWidth = style.brushSize;
    points = [];
    this.contextDraft.beginPath();

    this.contextReal.beginPath();

    // this.contextDraft.moveTo(coord[0], coord[1]);
    points.push({ x: event.clientX, y: event.clientY });
  }

  onDragging(coord, event) {
    this.drawDraft(coord[0], coord[1]);
    points.push({ x: event.clientX, y: event.clientY });
  }

  onMouseMove() { }

  onMouseUp(coord, event) {
    this.contextDraft.closePath();
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.moveTo(points[0].x-232, points[0].y-127);
    for (var i = 1; i < points.length; i++) {
      console.log ('real' + points[i].x, points[i].y);
      this.contextReal.lineTo(points[i].x-232, points[i].y-127);
    }
    // this.contextReal.closePath();
    console.log('real closed');
    this.contextReal.stroke();
    this.contextReal.closePath();
    saveImage(canvasReal, storeImg);

  }

  onMouseLeave() { }
  onMouseEnter() { }

  drawDraft(x, y) {
    this.contextDraft.lineTo(x, y);
    this.contextDraft.moveTo(x, y);
    console.log ('draft' + x, y);
    this.contextDraft.stroke();
  }
}
