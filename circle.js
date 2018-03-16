class Circle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord, event){
        this.contextReal.strokeStyle = "#f44";
        this.contextDraft.strokeStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.radius = Math.sqrt( Math.pow(this.origX - coord[0] , 2) + Math.pow(this.origY - coord[1], 2) );
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, this.radius, 0, 2*Math.PI, false);
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX, this.origY, this.radius, 0, 2*Math.PI, false);
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

// alt
// this.cX = (this.centerX + coord[0]) / 2;
// this.cY = (this.centerY + coord[1]) / 2;
// this.r = ( (coord[0] - this.centerX) ) / 2;
// this.contextDraft.arc(this.cX, this.cY, this.r, 0, 2*Math.PI, false);