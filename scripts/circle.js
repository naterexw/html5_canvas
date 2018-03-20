class Circle extends PaintFunction {
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

        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.radius = Math.sqrt(Math.pow(this.origX - coord[0], 2) + Math.pow(this.origY - coord[1], 2));
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI, false);
        this.contextDraft.stroke();
    }

    onMouseMove() {}
    onMouseUp(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI, false);
        this.contextReal.stroke();
        saveImage(canvasReal);
    }
    onMouseLeave() {}
    onMouseEnter() {}
}
