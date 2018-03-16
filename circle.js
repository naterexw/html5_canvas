class Circle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.strokeStyle = "#df4b26";
        this.contextDraft.strokeStyle = "#df4b26";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        var newX = (coord[0] + this.origX) / 2
        var newY = (coord[1] + this.origY) / 2
        this.contextDraft.beginPath();
        this.contextDraft.arc(newX, newY, newX, 0, 2 * Math.PI);
        this.contextDraft.stroke();
    }
    onMouseMove() { }
    onMouseUp(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc((coord[0] + this.origX) / 2, (coord[1] + this.origY) / 2, (coord[0] + this.origX) / 2, 0, 2 * Math.PI);
        this.contextReal.stroke();
    }

    onMouseLeave() { }
    onMouseEnter() { }

}