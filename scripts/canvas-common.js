const canvasReal = document.getElementById('canvas-real');
const contextReal = canvasReal.getContext('2d');
const canvasDraft = document.getElementById('canvas-draft');
const contextDraft = canvasDraft.getContext('2d');

let currentFunction;
let dragging = false;

// Styling setting of canvas, applicable to both draft and real canvas(s)
let canvasSettings = {
  brushSize: 1,
  joint: "round",
  curCol: {
      stroke: "#000000",
      fill: "#000000",
      bgc: "#FFFFFF"
  },
  txt: {
      size: "48px",
      fontfamily: "serif"
  }
}

// receiving input when performing mouse activity

$('#canvas-draft').mousedown(e => {
  const mouseLoc = [e.offsetX, e.offsetY];
  currentFunction.onMouseDown(mouseLoc, e, canvasSettings);
  dragging = true;
});

$('#canvas-draft').mousemove(e => {
  const mouseLoc = [e.offsetX, e.offsetY];
  if (dragging) {
    currentFunction.onDragging(mouseLoc, e, canvasSettings);
  }
  currentFunction.onMouseMove(mouseLoc, e, canvasSettings);
});

$('#canvas-draft').mouseup(e => {
  dragging = false;
  const mouseLoc = [e.offsetX, e.offsetY];
  currentFunction.onMouseUp(mouseLoc, e, canvasSettings);
});

$('#canvas-draft').mouseleave(e => {
  dragging = false;
  const mouseLoc = [e.offsetX, e.offsetY];
  currentFunction.onMouseLeave(mouseLoc, e, canvasSettings);
});

$('#canvas-draft').mouseenter(e => {
  const mouseLoc = [e.offsetX, e.offsetY];
  currentFunction.onMouseEnter(mouseLoc, e, canvasSettings);
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
