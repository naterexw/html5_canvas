$(document).ready(()=>{
    $("#animation").width(window.innerWidth);
    $("#animation").height(window.innerHeight);
})

$("#animation").on("click", function(){
    $(this).hide();
})

class Ball {
    constructor(coord, radius, color){
        this.x = coord[0];
        this.y = coord[1];
        this.r = radius;
        this.color = color;
    }

    draw(context){
        context.fillStyle = color;
        context.beginPath();
        context.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        context.closePath();
        context.fill();
    }
}