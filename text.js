let hasInput = false;

class Text extends PaintFunction {
    constructor(context) {
        super();
        this.context = context;
    }

    onMouseDown(coord, event) {
        console.log('error');
        addText(event);
    }

    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }

    onMouseLeave() { }
    onMouseEnter() { }
}

function addText(e) {
    var canvas = canvasReal;
    var ctx = contextReal;
    var font = '14px sans-serif';

    // canvas.onclick = function (e) {


    function addInput(x, y) {

        var input = document.createElement('input');

        input.type = 'text';
        input.style.position = 'fixed';
        input.style.left = (x - 4) + 'px';
        input.style.top = (y - 4) + 'px';

        input.onkeydown = handleEnter;

        document.body.appendChild(input);

        input.focus();

        hasInput = true;
    }

    function handleEnter(e) {
        var keyCode = e.keyCode;
        if (keyCode === 13) {
            drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
            document.body.removeChild(this);
            hasInput = false;
        }
    }

    function drawText(txt, x, y) {
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.font = font;
        ctx.fillText(txt, x - 4, y - 4);
    }

    console.log('erroe333')
    addInput(e.clientX, e.clientY);


}