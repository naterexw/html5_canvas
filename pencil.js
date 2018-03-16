class Pencil extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coord, event) {
        this.context.strokeStyle = "#df4b26";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
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