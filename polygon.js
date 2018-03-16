class Polygon extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft;        
    }
    
    onMouseDown(coord,event){
        this.startX = coord[0];
        this.startY = coord[1];
        this.contextDraft.strokeStyle = "#df4b26";
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 5;
        this.contextReal.strokeStyle = "#df4b26";
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 5;

        this.contextDraft.moveTo(coord[0],coord[1]);
        this.drawDraft(coord[0],coord[1]);
    }

    onDragging(coord,event){
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.drawDraft(coord[0],coord[1]);        
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.drawReal(coord[0],coord[1]);
    }
    onMouseLeave(){}
    onMouseEnter(){}

    drawDraft(x,y){
        this.contextDraft.beginPath();
        this.contextDraft.lineTo(this.startX, this.startY);
        this.contextDraft.moveTo(x,y);
        this.contextDraft.closePath();
        this.contextDraft.stroke();    
    }

    drawReal(x,y){
        this.contextReal.lineTo(this.startX, this.startY);
        this.contextReal.moveTo(x,y);
        this.contextReal.closePath();
        this.contextReal.stroke();    
    }
}