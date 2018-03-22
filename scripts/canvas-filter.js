const canvasFilterSetting = {
  blur: 0,
  brightness: 100,
  contrast: 100,
  dropshadow: [0, 0, 0, 'black'],
  grayscale: 0,
  huerotate: 0,
  invert: 0,
  opacity: 100,
  saturate: 100,
  sepia: 0,
};

function checkChangeFilter() {
  canvasFilterSetting.blur = $('#dw-blur-adj').val();
  $('#dw-blur-dsply').html(canvasFilterSetting.blur);

  canvasFilterSetting.brightness = $('#dw-brightness-adj').val();
  $('#dw-brightness-dsply').html(canvasFilterSetting.brightness);

  canvasFilterSetting.contrast = $('#dw-contrast-adj').val();
  $('#dw-contrast-dsply').html(canvasFilterSetting.contrast);

  canvasFilterSetting.grayscale = $('#dw-grayscale-adj').val();
  $('#dw-grayscale-dsply').html(canvasFilterSetting.grayscale);

  canvasFilterSetting.huerotate = $('#dw-huerotate-adj').val();
  $('#dw-huerotate-dsply').html(canvasFilterSetting.huerotate);

  canvasFilterSetting.invert = $('#dw-invert-adj').val();
  $('#dw-invert-dsply').html(canvasFilterSetting.invert);

  canvasFilterSetting.opacity = $('#dw-opacity-adj').val();
  $('#dw-opacity-dsply').html(canvasFilterSetting.opacity);

  canvasFilterSetting.saturate = $('#dw-saturate-adj').val();
  $('#dw-saturate-dsply').html(canvasFilterSetting.saturate);

  canvasFilterSetting.sepia = $('#dw-sepia-adj').val();
  $('#dw-sepia-dsply').html(canvasFilterSetting.sepia);

  canvasFilterSetting.dropshadow[0] = $('#dps-offset-x-adj').val();
  $('#dps-offset-x-dsply').html(canvasFilterSetting.dropshadow[0]);

  canvasFilterSetting.dropshadow[1] = $('#dps-offset-y-adj').val();
  $('#dps-offset-y-dsply').html(canvasFilterSetting.dropshadow[1]);

  canvasFilterSetting.dropshadow[2] = $('#dps-blur-radius-adj').val();
  $('#dps-blur-radius-dsply').html(canvasFilterSetting.dropshadow[2]);

  canvasFilterSetting.dropshadow[3] = $('#dps-color').val();

  const canvasFilterStringTemplate = `blur(${canvasFilterSetting.blur}px)brightness(${
    canvasFilterSetting.brightness
  }%) contrast(${canvasFilterSetting.contrast}%) grayscale(${canvasFilterSetting.grayscale}%) hue-rotate(${
    canvasFilterSetting.huerotate
  }deg) invert(${canvasFilterSetting.invert}%)  opacity(${canvasFilterSetting.opacity}%) saturate(${
    canvasFilterSetting.saturate
  }%) sepia(${canvasFilterSetting.sepia}%) drop-shadow(${canvasFilterSetting.dropshadow[0]}px ${
    canvasFilterSetting.dropshadow[1]
  }px ${canvasFilterSetting.dropshadow[2]}px ${canvasFilterSetting.dropshadow[3]})`;

  contextDraft.filter = canvasFilterStringTemplate;
  contextReal.filter = canvasFilterStringTemplate;
}

// Reset the sliders to their original min/max values
$('#slider-reset').on('click', () => {
  canvasFilterSetting.blur = $('#dw-blur-adj').val();
  $('#dw-blur-dsply').html(canvasFilterSetting.blur);

  canvasFilterSetting.brightness = $('#dw-brightness-adj').val();
  $('#dw-brightness-dsply').html(canvasFilterSetting.brightness);

  canvasFilterSetting.contrast = $('#dw-contrast-adj').val();
  $('#dw-contrast-dsply').html(canvasFilterSetting.contrast);

  canvasFilterSetting.grayscale = $('#dw-grayscale-adj').val();
  $('#dw-grayscale-dsply').html(canvasFilterSetting.grayscale);

  canvasFilterSetting.huerotate = $('#dw-huerotate-adj').val();
  $('#dw-huerotate-dsply').html(canvasFilterSetting.huerotate);

  canvasFilterSetting.invert = $('#dw-invert-adj').val();
  $('#dw-invert-dsply').html(canvasFilterSetting.invert);

  canvasFilterSetting.opacity = $('#dw-opacity-adj').val();
  $('#dw-opacity-dsply').html(canvasFilterSetting.opacity);

  canvasFilterSetting.saturate = $('#dw-saturate-adj').val();
  $('#dw-saturate-dsply').html(canvasFilterSetting.saturate);

  canvasFilterSetting.sepia = $('#dw-sepia-adj').val();
  $('#dw-sepia-dsply').html(canvasFilterSetting.sepia);

  canvasFilterSetting.dropshadow[0] = $('#dps-offset-x-adj').val();
  $('#dps-offset-x-dsply').html(canvasFilterSetting.dropshadow[0]);

  canvasFilterSetting.dropshadow[1] = $('#dps-offset-y-adj').val();
  $('#dps-offset-y-dsply').html(canvasFilterSetting.dropshadow[1]);

  canvasFilterSetting.dropshadow[2] = $('#dps-blur-radius-adj').val();
  $('#dps-blur-radius-dsply').html(canvasFilterSetting.dropshadow[2]);

  canvasFilterSetting.dropshadow[3] = $('#dps-color').val();

  const canvasFilterStringTemplate = `blur(${canvasFilterSetting.blur}px)brightness(${
    canvasFilterSetting.brightness
  }%) contrast(${canvasFilterSetting.contrast}%) grayscale(${canvasFilterSetting.grayscale}%) hue-rotate(${
    canvasFilterSetting.huerotate
  }deg) invert(${canvasFilterSetting.invert}%)  opacity(${canvasFilterSetting.opacity}%) saturate(${
    canvasFilterSetting.saturate
  }%) sepia(${canvasFilterSetting.sepia}%) drop-shadow(${canvasFilterSetting.dropshadow[0]}px ${
    canvasFilterSetting.dropshadow[1]
  }px ${canvasFilterSetting.dropshadow[2]}px ${canvasFilterSetting.dropshadow[3]})`;

  contextDraft.filter = canvasFilterStringTemplate;
  contextReal.filter = canvasFilterStringTemplate;
});

let mousedown = false;
$(window).on('mousedown', () => (mousedown = true));
$(window).on('mouseup', () => (mousedown = false));

$('input[type="range"]').on('mousemove', () => {
  if (mousedown) {
    checkChangeFilter();
  }
});

$('[type=reset],[type=range]').click(() => {
  window.setTimeout(checkChangeFilter, 50);
});

$(window).on('keyup', () => checkChangeFilter());
