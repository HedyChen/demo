 var ball = {x:512,y:100,g:2,r:20,vx:-4,vy:0,color:'#D44C4C'}
 
 window.onload=function(){
 var canvas = document.getElementById('canvas');

 canvas.width = 1024;
 canvas.height = 576;

 var context = canvas.getContext('2d');

  setInterval(function(){
    renter(context);
    update();
  },50)
}

function update(){
   ball.x += ball.vx;
   ball.y += ball.vy;
   ball.vy +=ball.g;

   if(ball.y>=576-ball.r){
    ball.vy = - ball.vy+8;
   }
   if(ball.x<=0+ball.r){
    ball.vx = -ball.vx+2;
   }
}

function renter(cxt){
   cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height);
   cxt.fillStyle = ball.color;
   cxt.beginPath();
   cxt.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
   cxt.closePath();

   cxt.fill();

}