$(document).ready(()=>{
    $("#animation").width(window.innerWidth);
    $("#animation").height(window.innerHeight);

    for(let i = 0; i< 300; i++){
        let coordinate = [randInclusive(0,$("#animation").width()),randInclusive(0,$("#animation").height())];
        let ball = new Ball(coordinate,5,"black");
        ball.draw(contextAnimation);
        console.log("run");
    }
})

$("#animation").on("click", function(){

})

class Ball {
    constructor(coord, radius, color){
        this.x = coord[0];
        this.y = coord[1];
        this.r = radius;
        this.color = color;
    }

    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        context.closePath();
        context.fill();
    }
}


function randInclusive(min, max){
    let num = Math.floor(Math.random()*(max-min+1))+min;
    return num;
}

