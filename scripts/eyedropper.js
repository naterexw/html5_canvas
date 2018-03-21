let destinationColor;

class Eyedropper extends PaintFunction {
    constructor(context) {
        super();
        this.context = context;
    }

    onMouseDown(coord, event) {
        destinationColor = this.context.getImageData(coord[0], coord[1], 1, 1).data;
    }

    onDragging() { }
    onMouseMove() { }

    onMouseUp(coord, event) {
        let selectedColor = rgbToHex(destinationColor[0], destinationColor[1], destinationColor[2]);
        if (destinationColor[0] + destinationColor[1] + destinationColor[2] + destinationColor[3] == 0) {
            selectedColor = '#ffffff';
        };
        canvasSettings.curCol.fill = selectedColor;
        canvasSettings.curCol.stroke = selectedColor;
        $("#custom").spectrum("set", selectedColor);
        console.log(selectedColor);
    }

    onMouseLeave() { }
    onMouseEnter() { }
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
