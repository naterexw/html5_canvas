let canvasFilterSetting = {
    blur: 0,
    brightness: 100,
    contrast: 100,
    dropshadow: [0, 0, 0, "black"],
    grayscale: 0,
    huerotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0
};



let mousedown = false;
$(window).on('mousedown', () => mousedown = true);
$(window).on('mouseup', () => mousedown = false);

$('#brightness-adjustment').on('mousemove', function () {
    if (mousedown) {
        canvasFilterSetting.brightness = $('#brightness-adjustment').val();
        $("#brightness-degree").html(canvasFilterSetting.brightness);


        let canvasFilterStringTemplate =
            `
            blur(${canvasFilterSetting.blur}px) 
            brightness(${canvasFilterSetting.brightness}%) 
            contrast(${canvasFilterSetting.contrast}%) 
            grayscale(${canvasFilterSetting.grayscale}%) 
            hue-rotate(${canvasFilterSetting.huerotate}deg) 
            invert(${canvasFilterSetting.invert}%) 
            opacity(${canvasFilterSetting.opacity}%) 
            saturate(${canvasFilterSetting.saturate}%) 
            sepia(${canvasFilterSetting.sepia}%)
            `;

        contextDraft.filter = canvasFilterStringTemplate;
        contextReal.filter = canvasFilterStringTemplate;
    }

})


// drop-shadow(${canvasFilterSetting.dropshadow})