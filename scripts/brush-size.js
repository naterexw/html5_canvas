$("#brushSize :input").change(function () {
    if (this.id == 'brushSize-xs') {
        canvasSettings.brushSize = 1;
    } else if (this.id == 'brushSize-sm') {
        canvasSettings.brushSize = 4;
    } else if (this.id == 'brushSize-lg') {
        canvasSettings.brushSize = 8;
    } else if (this.id == 'brushSize-2x') {
        canvasSettings.brushSize = 12;
    }
});