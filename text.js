class Text extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
    }

    onMouseDown(coord, event) {
        this.contextReal.font = '48px serif';
    }
    
    onDragging() { }
    onMouseMove() { }
    
    onMouseUp(coord, event) {
        console.log(coord);
        console.log(event);
        this.contextReal.fillText("Hello World", coord[0], coord[1]);
     }
    onMouseLeave() { }
    onMouseEnter() { }

}