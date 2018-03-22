class PolygonFill extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.check = true;
  }

  onMouseDown(coord, event, style) {
    if (this.check == true) {
      this.contextReal.strokeStyle = style.curCol.stroke;
      this.contextReal.fillStyle = style.curCol.fill;
      this.contextReal.lineWidth = style.brushSize;
      this.contextReal.lineJoin = style.joint;
      this.contextReal.shadowBlur = 0;
      this.contextDraft.shadowBlur = 0;
      this.contextDraft.strokeStyle = style.curCol.stroke;
      this.contextDraft.fillStyle = style.curCol.fill;
      this.contextDraft.lineWidth = style.brushSize;
      this.contextDraft.lineJoin = style.joint;

      this.startX = [];
      this.startY = [];
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      this.check = false;
    }
  }

  onMouseMove(coord, event) {
    if (this.check == false) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.startX[0], this.startY[0]);
      for (let i = 0; i < this.startX.length; i++) {
        this.contextDraft.lineTo(this.startX[i], this.startY[i]);
      }
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    }
  }
  onMouseUp(coord, event) {
    this.contextReal.lineTo(coord[0], coord[1]);
    this.origX = coord[0];
    this.origY = coord[1];
    this.startX.push(this.origX);
    this.startY.push(this.origY);
    if (
      Math.abs(this.origX - this.startX[0]) < 20 &&
      Math.abs(this.origY - this.startY[0]) < 20 &&
      this.startX.length > 1 &&
      this.startY.length > 1
    ) {
      this.check = true;
      this.contextDraft.closePath();
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.stroke();
      this.contextReal.closePath();
      this.contextReal.fill();
      this.startX = 0;
      this.startY = 0;
      saveImage(canvasReal, storeImg);
    }
  }

  onMouseLeave() {
    this.check = true;
  }
}
