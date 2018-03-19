class Text extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
    }

    onMouseDown(coord, event, style) {
        this.contextReal.font = '48px serif';
    }
    
    onDragging() { }
    onMouseMove() { }
    
    onMouseUp(coord, event) {

        this.contextReal.fillText("Hello World", coord[0], coord[1]);
     }
    onMouseLeave() { }
    onMouseEnter() { }

}
