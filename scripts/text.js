let hasInput = false;

class Text extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown(coord, event) {
    addText(event);
  }

  onDragging() { }
  onMouseMove() { }
  onMouseUp() { }
  onMouseLeave() { }
  onMouseEnter() { }
}

function addText(e) {
  const font = '14px sans-serif';
  
  function addInput(x, y) {
    const input = document.createElement('input');
    input.style.zIndex = 100;
    input.type = 'text';
    input.placeholder = 'Input text and press enter when complete';
    input.style.background = 'transparent';
    input.style.width = `${350}px`;
    input.style.position = 'fixed';
    input.style.left = `${x}px`;
    input.style.top = `${y}px`;
    input.onkeydown = handleEnter;
    document.body.appendChild(input);

    hasInput = true;
  }

  function handleEnter(e) {
    const keyCode = e.keyCode;
    if (keyCode === 13) { //<<<---- add here, keycode for esc key is 27
      drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
      document.body.removeChild(this);
      hasInput = false;
    }
  }

  function drawText(txt, x, y) {
    contextReal.textBaseline = 'top';
    contextReal.textAlign = 'left';
    contextReal.font = font;
    contextReal.fillText(txt, e.offsetX, e.offsetY + 6);
  }
  addInput(e.clientX, e.clientY);
  saveImage(canvasReal, storeImg);
}
