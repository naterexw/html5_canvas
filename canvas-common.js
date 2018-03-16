const canvasReal = document.getElementById('canvas-real');
const contextReal = canvasReal.getContext('2d');
const canvasDraft = document.getElementById('canvas-draft');
const contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;

let curCol = {
    "stroke": "#000000",
    "fill": "#FFFFFF",
    "bgc": "#FFFFFF"
}

let strokeSize  = 5;
$('#canvas-draft').mousedown(e => {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$('#canvas-draft').mousemove(e => {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$('#canvas-draft').mouseup(e => {
  dragging = false;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$('#canvas-draft').mouseleave(e => {
  dragging = false;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$('#canvas-draft').mouseenter(e => {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
