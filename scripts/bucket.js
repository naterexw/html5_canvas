class Bucket extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown(coord, event) {
    const pixelStack = [coord[0], coord[1]];

    while (pixelStack.length) {
      var newPos, x, y, pixelPos, reachLeft, reachRight;
      newPos = pixelStack.pop();
      x = newPos[0];
      y = newPos[1];

      pixelPos = (y * canvasWidth + x) * 4;
      while (y-- >= drawingBoundTop && matchStartColor(pixelPos)) {
        pixelPos -= canvasWidth * 4;
      }
      pixelPos += canvasWidth * 4;
      ++y;
      reachLeft = false;
      reachRight = false;
      while (y++ < canvasHeight - 1 && matchStartColor(pixelPos)) {
        colorPixel(pixelPos);

        if (x > 0) {
          if (matchStartColor(pixelPos - 4)) {
            if (!reachLeft) {
              pixelStack.push([x - 1, y]);
              reachLeft = true;
            }
          } else if (reachLeft) {
            reachLeft = false;
          }
        }

        if (x < canvasWidth - 1) {
          if (matchStartColor(pixelPos + 4)) {
            if (!reachRight) {
              pixelStack.push([x + 1, y]);
              reachRight = true;
            }
          } else if (reachRight) {
            reachRight = false;
          }
        }

        pixelPos += canvasWidth * 4;
      }
    }
    context.putImageData(colorLayer, 0, 0);

    function matchStartColor(pixelPos) {
      const r = colorLayer.data[pixelPos];
      const g = colorLayer.data[pixelPos + 1];
      const b = colorLayer.data[pixelPos + 2];

      return r == startR && g == startG && b == startB;
    }

    function colorPixel(pixelPos) {
      colorLayer.data[pixelPos] = fillColorR;
      colorLayer.data[pixelPos + 1] = fillColorG;
      colorLayer.data[pixelPos + 2] = fillColorB;
      colorLayer.data[pixelPos + 3] = 255;
    }
  }

  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
