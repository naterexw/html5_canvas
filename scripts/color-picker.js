// Color picker

$('#fill').spectrum({
  flat: false,
  showInput: true,
  change: color => {
    let col = color.toHexString();  
    canvasSettings.curCol.fill = col;
    $('[value=fill]').css('background-color', col);
  },
});

$('#stroke').spectrum({
  flat: false,
  showInput: true,
  change: color => {
    let col = color.toHexString();  
    canvasSettings.curCol.stroke = col;
    $('[value=stroke]').css('background-color', col);
  },
});

$('#bgc').spectrum({
  flat: false,
  showInput: true,
  change: color => {
    let col = color.toHexString();  
    canvasSettings.curCol.bgc = col;
    $('[value=stroke]').css('background-color', col);
    $('#canvas-real').css('background-color', col);
  },
});
