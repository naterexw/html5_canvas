class Bucket extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
    }
  
    onMouseDown(coord, event) {
        let destinationColor = this.contextReal.getImageData(coord[0], coord[1], 1, 1).data;
        console.log(destinationColor[0]);
        console.log(destinationColor[1]);
        console.log(destinationColor[2]);
        console.log('test');

        console.log(hexToR(style.curCol.fill));
        console.log(hexToG(style.curCol.fill));
        console.log(hexToB(style.curCol.fill));
    }

    onDragging() {}
    onMouseMove() {}
    onMouseUp() { }
    onMouseLeave() {}
    onMouseEnter() {}
  
}

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

