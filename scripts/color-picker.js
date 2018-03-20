// Color picker

$('#custom').spectrum({
  flat: false,
  showInput: true,

  change: color => {
    let col = color.toHexString();  
    canvasSettings.curCol.fill = col;
    canvasSettings.curCol.stroke = col;
    console.log(col);
    $('#fill').css('background-color', col);
  },
});
