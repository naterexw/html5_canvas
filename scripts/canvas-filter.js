// $("#blur").on('keyup',function(e){

//     // contextReal.filter = "blur(30px) opacity(0%)";
//     contextReal.filter = `opacity(${$("#blur").val()}%)`;
//     // $('.canvas').css("filter",`opacity(${$("#blur").val()}%)`);
//     // console.log(contextReal);
//     // canvasReal.filter = `blur(${10}px)`;
// });

// $("#blur").val()

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