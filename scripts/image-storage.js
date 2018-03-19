let storeImg = [0];

let saveImage = canvas => {
  canvas.toBlob(blob => {
    let newImg = document.createElement("img"),
      url = URL.createObjectURL(blob);

    newImg.src = url;
    newImg.onload = () => {
    };
    writeTempImg(newImg);
  });
};

function retriveImage(img) {
  contextReal.clearRect(0, 0, 800, 500);
  contextReal.drawImage(img, 0, 0);
}

function writeTempImg(imgElement) {
  storeImg.push(imgElement);
  console.log(storeImg);
}


let map = {};
$(window).on("keydown", (e) => {
  map[e.keyCode] = e.type == "keydown";
  if (map[17] && map[90]) {
    retriveImage(storeImg[storeImg.length-2]);
    storeImg.pop();
    map = {};
    return false;
  }
})



$("#test").click(() => {
  saveImage(canvasReal);
});
$("#retrive").click(() => {
  retriveImage(storeImg);
});