$("#blur").on('keyup',function(e){

    // contextReal.filter = "blur(30px) opacity(0%)";
    contextReal.filter = `opacity(${$("#blur").val()}%)`;
    // $('.canvas').css("filter",`opacity(${$("#blur").val()}%)`);
    // console.log(contextReal);
    // canvasReal.filter = `blur(${10}px)`;
});

// $("#blur").val()