let saveImage = canvas => {
  canvas.toBlob(blob => {
    let newImg = document.createElement("img"),
      url = URL.createObjectURL(blob);

    newImg.src = url;
    newImg.onload = () => {
      // writeTempImg(newImg);
    };

    writeTempImg(newImg);
  });
};

function retriveImage(img) {
  contextReal.clearRect(0, 0, 800, 500);
  contextReal.drawImage(img, 0, 0);
}

function writeTempImg(imgElement) {
  storeImg = imgElement;
}
