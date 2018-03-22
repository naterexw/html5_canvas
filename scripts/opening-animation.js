// let ballCounter = 0;
// let maxCounter = 500000000;


let animationStylePicker = {
    shades:["#C70039","#FF5733","#FFC305"],
    r:[1.5,3,5],
    ballCounter: 0,
    maxCounter: 500000000
}


$(document).ready(() => {
    $(".navbar").click(()=>$("#animation, #animation-drawing").toggle());
    
    $("#animation").width(window.innerWidth);
    $("#animation").height(window.innerHeight);
    
    // $("#animation").hide();

    centerText("Canvas",contextAnimationDrawing, canvasAnimationDrawing);
    // looping();

        
    parallelFx(looping, 1000);
})




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


function parallelFx(callback, howManyTimes){
    let arrOfFx=[];
    for(let i = 0; i< howManyTimes; i++){
        arrOfFx.push(setInterval(callback,200));
    }
}

function randInclusive(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function looping() {
    if (animationStylePicker.ballCounter < animationStylePicker.maxCounter) {
        // Create random coordinates
        let coordinate = [randInclusive(0, $("#animation").width()), randInclusive(0, $("#animation").height())];

        if (checkPix(contextAnimationDrawing,coordinate[0],coordinate[1])){
            let ball = new Ball(coordinate, animationStylePicker.r[randInclusive(0,animationStylePicker.r.length)],animationStylePicker.shades[randInclusive(0,animationStylePicker.shades.length)] );
        // Actually draw that ball
        ball.draw(contextAnimation);
        animationStylePicker.ballCounter++;
        }
        // Create the ball with coord, radius and color
        // setTimeout(looping,1);
    }
    console.log(animationStylePicker.ballCounter);

}

function centerText(centxt, context, canvas){
    context.fillStyle = "rgba(254, 254, 254, 1)";
    context.font = '400px serif';
    context.textAlign = 'center';
    context.fillText(centxt, canvas.width/2, (canvas.height/2)+100);
}

function checkPix(context, _x ,_y){
    let pixelData = context.getImageData(_x, _y,1,1).data;
    return ((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0));
}