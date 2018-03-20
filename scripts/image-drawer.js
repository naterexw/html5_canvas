// Initiate image for storage purpose
let deImage = document.createElement("img");

// Trigger img storage when load image by users
$("#dr-img").on("change", function (e) {
    deImage.src = URL.createObjectURL($("#dr-img")['0'].files['0']);
})

// Instantiate
// Note: the only function that is accessing global variable because of other functions
class ImageFill extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event, style) {
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event, style) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.drawImage(
            deImage,
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
        );
    }

    onMouseMove() {}
    onMouseUp(coord, event, style) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.drawImage(
            deImage,
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
        );
        saveImage(canvasReal);
    }
    onMouseLeave() {}
    onMouseEnter() {}
}



