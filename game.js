

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var paddleHeight = 10;
var paddleWidth = 50;
var paddleX = (canvas.width-paddleWidth)/2;

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2; 
var dy = -2;
var ballRadius = 10;

var rightPressed = false;
var leftPressed = false;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y,  ballRadius, 0, Math.PI*2), 
        ctx.fillStyle= "#0095DD";
    ctx.fill();
    ctx.closePath();

}

function draw() {
    
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    x += dx;
    y += dy;
    
//    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius){
//        dy = -dy;
//    }    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
        dx = -dx;
    }
    
    if (y + dy < ballRadius) {
        dy = -dy;
    }else if(y + dy > canvas.height-ballRadius){
        if (x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        }
        else {
            alert ("Game OVER");
            document.location.reload();    
        }
        
    }
    
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX +=7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle= "#0095DD";
    ctx.fill()
    ctx.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
            leftPressed = true;
        }
    }
function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed = false;
    }
    else if(e.keyCode == 37){
        leftPressed = false;
    }
}

setInterval(draw, 10);
