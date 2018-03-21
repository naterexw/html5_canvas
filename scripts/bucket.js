let canvasWidth = 800;
let canvasHeight = 500;

class Bucket extends PaintFunction {
    constructor(context) {
        super();
        this.context = context;
    }

    onMouseDown(coord, event) {
        var startX = event.clientX - 10;
        var startY = event.clientY - 10;
        let startColor = this.context.getImageData(coord[0], coord[1], 1, 1).data;
        if (startColor[0] == hexToR(canvasSettings.curCol.fill) && startColor[1] == hexToG(canvasSettings.curCol.fill)
            && startColor[2] == hexToB(canvasSettings.curCol.fill)) {
            return;
        } else {
            floodFill(coord[0], coord[1], {
                r: hexToR(canvasSettings.curCol.fill),
                g: hexToG(canvasSettings.curCol.fill), b: hexToB(canvasSettings.curCol.fill)
            });
            saveImage(canvasReal);
        };
    }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
}

var canvas = canvasReal;
var ctx = contextReal;

var getPixelPos = function (x, y) {

    return (y * canvas.width + x) * 4;
};

var matchStartColor = function (data, pos, startColor) {
    return (data[pos] === startColor.r &&
        data[pos + 1] === startColor.g &&
        data[pos + 2] === startColor.b &&
        data[pos + 3] === startColor.a);
};

var colorPixel = function (data, pos, color) {
    data[pos] = color.r || 0;
    data[pos + 1] = color.g || 0;
    data[pos + 2] = color.b || 0;
    data[pos + 3] = color.hasOwnProperty("a") ? color.a : 255;
};

var floodFill = function (startX, startY, fillColor) {
    var dstImg = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var dstData = dstImg.data;
    var startPos = getPixelPos(startX, startY);
    var startColor = {
        r: dstData[startPos],
        g: dstData[startPos + 1],
        b: dstData[startPos + 2],
        a: dstData[startPos + 3]
    };
    var todo = [[startX, startY]];
    while (todo.length) {
        var pos = todo.pop();
        var x = pos[0];
        var y = pos[1];
        var currentPos = getPixelPos(x, y);
        while ((y-- >= 0) && matchStartColor(dstData, currentPos, startColor)) {
            currentPos -= canvas.width * 4;
        }
        currentPos += canvas.width * 4;
        ++y;
        var reachLeft = false;
        var reachRight = false;
        while ((y++ < canvas.height - 1) && matchStartColor(dstData, currentPos, startColor)) {
            colorPixel(dstData, currentPos, fillColor);
            if (x > 0) {
                if (matchStartColor(dstData, currentPos - 4, startColor)) {
                    if (!reachLeft) {
                        todo.push([x - 1, y]);
                        reachLeft = true;
                    }
                }
                else if (reachLeft) {
                    reachLeft = false;
                }
            }
            if (x < canvas.width - 1) {
                if (matchStartColor(dstData, currentPos + 4, startColor)) {
                    if (!reachRight) {
                        todo.push([x + 1, y]);
                        reachRight = true;
                    }
                }
                else if (reachRight) {
                    reachRight = false;
                }
            }
            currentPos += canvas.width * 4;
        }
    }
    ctx.putImageData(dstImg, 0, 0);
};

function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16) }
function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16) }
function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16) }
function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h }