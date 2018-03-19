const canvasReal = document.getElementById('canvas-real');
const contextReal = canvasReal.getContext('2d');
const canvasDraft = document.getElementById('canvas-draft');
const contextDraft = canvasDraft.getContext('2d');

let currentFunction;
let dragging = false;

const storeImg = HTMLImageElement;

const style = {
  strokeWth: 1,
  joint: 'round',
  curCol: {
    stroke: '#000000',
    fill: '#244a73',
    bgc: '#FFFFFF',
  },
  txt: {
    size: '48px',
    fontfamily: 'serif',
  },
};

$('#brushSize :input').change(function() {
  if (this.id === 'brushSize-xs') {
    style.strokeWth = 1;
  } else if (this.id === 'brushSize-sm') {
    style.strokeWth = 4;
  } else if (this.id === 'brushSize-lg') {
    style.strokeWth = 8;
  } else if (this.id === 'brushSize-2x') {
    style.strokeWth = 12;
  }
});

$('#test').click(() => {
  saveImage(canvasReal);
});
$('#retrive').click(() => {
  retriveImage(storeImg);
});

$('#canvas-draft').mousedown(e => {
  const mouseLoc = [e.offsetX, e.offsetY];
  currentFunction.onMouseDown(mouseLoc, e, style);
  dragging = true;
});

$('#canvas-draft').mousemove(e => {
  const mouseLoc = [e.offsetX, e.offsetY];
  if (dragging) {
    currentFunction.onDragging(mouseLoc, e, style);
  }
  currentFunction.onMouseMove(mouseLoc, e, style);
});

$('#canvas-draft').mouseup(e => {
  dragging = false;
  const mouseLoc = [e.offsetX, e.offsetY];
  currentFunction.onMouseUp(mouseLoc, e, style);
});

$('#canvas-draft').mouseleave(e => {
  dragging = false;
  const mouseLoc = [e.offsetX, e.offsetY];
  currentFunction.onMouseLeave(mouseLoc, e, style);
});

$('#canvas-draft').mouseenter(e => {
  const mouseLoc = [e.offsetX, e.offsetY];
  currentFunction.onMouseEnter(mouseLoc, e, style);
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
