class Pencil extends PaintFunction {
    constructor(contextReal,contextDraft, _fill, _strokeCol,_strokeWidth,_joint) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coord, event, style) {
        this.context.strokeStyle = style.curCol.stroke;
        this.context.lineJoin = style.joint;
        this.context.lineWidth = style.strokeWth;
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }
}