// Giving attribute to the box on click
$(".col-pic").click(function(){
    
    $(".color-box").toggle();
    $(".color-box").attr("status",$(this).attr("id"));
})

// Picking color, depending on the attribute
$(".colors").click(function (event) {
    let nowColor = $(this).css("background-color");
     
    style.curCol[$(".color-box").attr("status")] = nowColor;
    $(`#${$(".color-box").attr("status")}`).css("background-color", nowColor);

    $("#col-display").css("background-color", nowColor);

    console.log(style);
})


function assignColor() {
    for (let j = 1; j < 11; j++) {
        let currentRow = $(`[id$='-${j}']`)
        for (let i = 0; i < currentRow.length; i++) {
            let colH = i * 30;
            $(currentRow[i]).css("background-color", `hsla(${colH},100%,${j*5}%)`);
        }
    }
}

assignColor();