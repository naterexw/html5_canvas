// initialize brush size display
$('#brush-size-dsply').html(canvasSettings.brushSize);

// Brush size
function checkBrushSize() {
  canvasSettings.brushSize = $('#brush-size-adj').val();
  $('#brush-size-dsply').html(canvasSettings.brushSize);
  $('#brushSize')
    .css('width', canvasSettings.brushSize)
    .css('height', canvasSettings.brushSize);
}

$('input[type="range"]').on('mousemove', () => {
  if (mousedown) {
    checkBrushSize();
  }
});

$(window).on('keyup', () => checkBrushSize());
