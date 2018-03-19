let storeImg = [];

$(document).ready(()=>{
  saveImage(canvasReal);
})

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
  if (map[17] && map[90] && storeImg.length>0) {
    retriveImage(storeImg[storeImg.length-2]);
    storeImg.pop();
    console.log("after changing the image array");
    console.log(storeImg);
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