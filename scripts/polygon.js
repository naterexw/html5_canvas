let check = false;
class Polygon extends PaintFunction {
    constructor(contextReal,contextDraft, _fill, _strokeCol,_strokeWidth,_joint) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event, style) {
        this.contextReal.strokeStyle = style.curCol.stroke;
        this.contextDraft.strokeStyle = style.curCol.stroke;
        this.contextReal.lineJoin = style.joint;
        this.contextReal.lineWidth = style.strokeWth;

        if (check = false) { 
            this.origX = coord[0];
            this.origY = coord[1];
            check = true;
        } else {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.lineTo(coord[0], coord[1]);
            this.contextReal.closePath();
            this.contextReal.stroke();
        };
    }

    onDragging() { }

    onMouseMove(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.drawDraft(coord[0], coord[1]);
        // this.origX = coord[0];
        // this.origY = coord[1];
    }

    onMouseUp() { }

    onMouseLeave() { }
    onMouseEnter() { }

    drawDraft(x, y) {
        this.contextDraft.beginPath();
        // this.contextDraft.setLineDash([5, 15]);
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(x, y);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }
}