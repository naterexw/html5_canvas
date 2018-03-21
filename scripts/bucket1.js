class Bucket extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
    }

    onMouseDown(coord, event) {
        let newX = coord[0];
        let newY = coord[1];
        let destinationColor = this.contextReal.getImageData(coord[0], coord[1], 1, 1).data;
        let oneUp = this.contextReal.getImageData(coord[0], coord[1] - 1, 1, 1).data;
        let fillColor = style.curCol.fill;
        let matchingPixel = [];

        console.log(destinationColor);
        console.log(oneUp);
        

        while (newY >= 0) {
            if (this.contextReal.getImageData(newX, newY, 1, 1).data[0] == this.contextReal.getImageData(newX, newY - 1, 1, 1).data[0]) {
                this.contextReal.putImageData(fillColor, newX, newY);
                // matchingPixel.push([newX, newY]);
            };
            newY--;
        };

        // if (destinationColor[0] == hexToR(style.curCol.fill) && destinationColor[1] == hexToG(style.curCol.fill) && destinationColor[2] != hexToB(style.curCol.fill)) {
        //     return;
        // } else {
        //     matchingPixel.push(coord);
        // }
        // console.log(matchingPixel);


        // console.log(destinationColor[0]);
        // console.log(destinationColor[1]);
        // console.log(destinationColor[2]);
        // console.log('test');
        // console.log(hexToR(style.curCol.fill));
        // console.log(hexToG(style.curCol.fill));
        // console.log(hexToB(style.curCol.fill));
    }

    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }

}

function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16) }
function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16) }
function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16) }
function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h }
