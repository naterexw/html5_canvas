const canvasReal = document.getElementById('canvas-real');
const contextReal = canvasReal.getContext('2d');
const canvasDraft = document.getElementById('canvas-draft');
const contextDraft = canvasDraft.getContext('2d');

const canvasIndicator = document.getElementById('canvas-indicator');
const contextIndicator = canvasIndicator.getContext('2d');
const canvasRuler = document.getElementById('canvas-ruler');
const contextRuler = canvasRuler.getContext('2d');

const canvasAnimation = document.getElementById('animation');
const contextAnimation = canvasAnimation.getContext('2d');
const canvasAnimationDrawing = document.getElementById('animation-drawing');
const contextAnimationDrawing = canvasAnimationDrawing.getContext('2d');

let currentFunction;
let dragging = false;

// Styling setting of canvas, applicable to both draft and real canvas(s)
const canvasSettings = {
  brushSize: 8,
  joint: 'round',
  curCol: {
    stroke: '#ff0000',
    fill: '#00ff00',
    bgc: '#FFFFFF',
  },
  txt: {
    size: '48px',
    fontfamily: 'serif',
  },
};

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
