$(document).ready(() => {
    $("#animation").width(window.innerWidth);
    $("#animation").height(window.innerHeight);

    $("#animation").hide();

    // centerText("Canvas",contextAnimation, canvasAnimation);
    
    // looping();
    // looping();
    // looping();
    // looping();
    // looping();
    // looping();
    // looping();
    // looping();
    // looping();
    
})



let ballCounter = 0;
let maxCounter = 5000000000;

class Ball {
    constructor(coord, radius, color) {
        this.x = coord[0];
        this.y = coord[1];
        this.r = radius;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
    }
}


function randInclusive(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function looping() {
    if (ballCounter < maxCounter) {
        // Create random coordinates
        let coordinate = [randInclusive(0, $("#animation").width()), randInclusive(0, $("#animation").height())];

        if (checkPix(contextAnimation,coordinate[0],coordinate[1])){
            let ball = new Ball(coordinate, 2, "black");
        // Actually draw that ball
        ball.draw(contextAnimation);
        ballCounter++;
        
        }
        // Create the ball with coord, radius and color
        setTimeout(looping,0.5);
    }

}

function centerText(centxt, context, canvas){
    context.fillStyle = "rgba(254, 254, 254, 1)";
    context.font = '120px serif';
    context.textAlign = 'center';
    context.fillText(centxt, canvas.width/2, canvas.height/2);
}

function checkPix(context, _x ,_y){
    // Take context and check the pixel to see if it is trasparent
    let pixelData = context.getImageData(_x, _y,1,1).data;
    // console.table([pixelData[0],pixelData[1],pixelData[2],pixelData[3]]);
    return ((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0));
}