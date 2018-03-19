class Polygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.startX = [];
      this.startY = [];
      this.check = false;
  }
 
  onMouseDown(coord, event) {
      if (this.check == true) {
          this.startX = [];
          this.startY = [];
          this.contextReal.moveTo(coord[0], coord[1])
          this.check = false;
      }
  }
  
  onMouseUp(coord, event) {
      this.contextReal.strokeStyle = "#df4b26";
      this.contextReal.lineWidth = canvasSettings.brushSize;
      this.contextReal.lineJoin = "round";
      this.contextReal.lineTo(coord[0], coord[1]);
      this.origX = coord[0];
      this.origY = coord[1];
      this.startX.push(this.origX);
      this.startY.push(this.origY);
      if (Math.abs(this.origX - this.startX[0]) < 20 && Math.abs(this.origY - this.startY[0]) < 20 && this.startX.length > 1 && this.startY.length > 1) {
          this.check = true;
          this.contextReal.stroke();
      }
  }
  
  onMouseMove(coord, event) {
      if (this.check == false) {
          this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
          this.contextDraft.strokeStyle = "#df4b26";
          this.contextDraft.lineWidth = canvasSettings.brushSize;
          this.contextDraft.beginPath();
          this.contextDraft.moveTo(this.startX[0], this.startY[0]);
          var i;
          for (i = 0; i < this.startX.length; i++) {
              this.contextDraft.lineTo(this.startX[i], this.startY[i]);
          }
          this.contextDraft.lineTo(coord[0], coord[1]);
          this.contextDraft.stroke();
      }
  }
  
  onMouseLeave() { 
      this.check=true;
  }
}