// Color picker

$('#fill').spectrum({
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
