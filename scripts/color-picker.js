// Color picker

$('#fill').spectrum({
  color: canvasSettings.curCol.fill,
  flat: false,
  showButtons: false,
  showInitial: true,
  showInput: true,
  allowEmpty: true,
  showPalette: true,
  palette: [],
  maxSelectionSize: 5,
  hideAfterPaletteSelect: true,
  showAlpha: true,

  change: color => {
    const col = color.toHexString();
    canvasSettings.curCol.fill = col;
  },
});

$('#stroke').spectrum({
  color: canvasSettings.curCol.stroke,
  flat: false,
  showButtons: false,
  showInitial: true,
  showInput: true,
  allowEmpty: true,
  showPalette: true,
  palette: [],
  maxSelectionSize: 5,
  hideAfterPaletteSelect: true,
  showAlpha: true,
  change: color => {
    const col = color.toHexString();
    canvasSettings.curCol.stroke = col;
  },
});

$('#bgc').spectrum({
  color: canvasSettings.curCol.bgc,
  flat: false,
  showButtons: false,
  showInitial: true,
  showInput: true,
  allowEmpty: true,
  showPalette: true,
  palette: [],
  maxSelectionSize: 5,
  hideAfterPaletteSelect: true,
  showAlpha: true,
  change: color => {
    const col = color.toHexString();
    canvasSettings.curCol.bgc = col;
    $('#canvas-real').css('background-color', col);
  },
});

$('#dps-color').spectrum({
  flat: false,
  showButtons: false,
  showInitial: true,
  showInput: true,
  allowEmpty: true,
  showPalette: true,
  palette: [],
  maxSelectionSize: 5,
  hideAfterPaletteSelect: true,
  showAlpha: true,
  change: color => {
    const col = color.toHexString();
    $('#dps-color').val(col);
  },
});
