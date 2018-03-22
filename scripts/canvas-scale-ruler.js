let gridFocusDisplay = false;
$(document).ready(()=>{
    $("#canvas-indicator").hide();
    $("#focus").click(()=>{
        if (gridFocusDisplay){
            $("#canvas-indicator").hide();
            gridFocusDisplay = false;
        }
        else{
            $("#canvas-indicator").show();
            gridFocusDisplay = true;
        }
    });
    $(".canvas").on('mousemove', function(e){
        if(gridFocusDisplay){
            const locOfMouse = [e.offsetX, e.offsetY];
            drawFocus(canvasIndicator, contextIndicator, locOfMouse);
        }
    });
});

function drawFocus (canvas,context, xyloc){
    // console.log(xyloc);
    context.clearRect(0,0, canvas.width, canvas.height);
    context.strokeStyle = canvasSettings.curCol.stroke;

    // Horizontal path
    context.beginPath();
    context.moveTo(0,xyloc[1]);
    context.lineTo(canvas.width, xyloc[1]);
    context.closePath();
    context.stroke();

    // Vertical
    context.beginPath();
    context.moveTo(xyloc[0], canvas.height);
    context.lineTo(xyloc[0], 0);
    context.closePath();
    context.stroke();

    // Draw target circle
    context.beginPath();
    context.arc(xyloc[0], xyloc[1], canvas.width/350, 0, 2 * Math.PI, false);
    context.closePath();
    context.stroke();
}