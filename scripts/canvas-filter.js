// $("#blur").on('keyup',function(e){

//     // contextReal.filter = "blur(30px) opacity(0%)";
//     contextReal.filter = `opacity(${$("#blur").val()}%)`;
//     // $('.canvas').css("filter",`opacity(${$("#blur").val()}%)`);
//     // console.log(contextReal);
//     // canvasReal.filter = `blur(${10}px)`;
// });

// $("#blur").val()

let canvasFilterSetting = {
    blur: 0,
    brightness: 100,
    contrast: 100,
    dropshadow: [0,0,0,"black"],
    grayscale: 0,
    huerotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0
}

let mousedown = false;
$(window).on('mousedown',()=>mousedown = true);
$(window).on('mouseup',()=>mousedown = false);



$('#brightness-adjustment').on('mousemove',function(){
    if (mousedown){
        let brightness = $('#brightness-adjustment').val();
        $("#brightness-degree").html(brightness);
        contextDraft.filter = `brightness(${brightness}%)`;
        contextReal.filter = `brightness(${brightness}%)`;
    }
    
})


`blur(10px) brightness(100%) contrast(100%) drop-shadow(1px 1px 1px red) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)`