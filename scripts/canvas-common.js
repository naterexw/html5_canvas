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
      stroke: "#fff228",
      fill: "#244a73",
      bgc: "#FFFFFF"
  },
  txt: {
      size: "48px",
      fontfamily: "serif"
  }
}

// Initiate canvas function when clicking corresponding button on canvas
currentFunction = new Pencil(contextReal, contextDraft);

$('#pencil').click(() => {
  currentFunction = new Pencil(contextReal, contextDraft);
});
$('#eraser').click(() => {
  currentFunction = new Eraser(contextReal, contextDraft);
});
$('#rectangle').click(() => {
  currentFunction = new Rectangle(contextReal, contextDraft);
});
$('#rectangle-fill').click(() => {
  currentFunction = new RectangleFill(contextReal, contextDraft);
});
$('#circle').click(() => {
  currentFunction = new Circle(contextReal, contextDraft);
});
$('#circle-fill').click(() => {
  currentFunction = new CircleFill(contextReal, contextDraft);
});
$('#line').click(() => {
  currentFunction = new Line(contextReal, contextDraft);
});
$('#polygon').click(() => {
  currentFunction = new Polygon(contextReal, contextDraft);
});
$('#img-fill').click(() => {
  currentFunction = new ImageFill(contextReal, contextDraft, deImage);
});
$('#reset').click(() => {
  currentFunction = new Reset(contextReal, contextDraft);
  currentFunction = new Pencil(contextReal, contextDraft);
});

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
