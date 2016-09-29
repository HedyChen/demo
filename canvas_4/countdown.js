var canvas_width = 1024,
    canvas_height = 620,
    margin_top = 60,
    margin_left = 30,
    radius = 8;

var endTime = new Date(2016, 8, 29, 15);
var curShowTime = 0;

var balls = [];
var colors = ['#F77F7F','#F46EAA','#E763F4','#9B6EF1','#779AF2','#6EE1FC','#4BF7A2','#96FC71','#E5F562','#F9BD4F'];

window.onload=function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

   canvas.width = canvas_width;
   canvas.height = canvas_height;

   curShowTime = getCurShowTime();//距离目标时间的秒数
   setInterval(function(){
       rander(context);
       update();
   },50);
}

//编写用于显示下一个秒的update函数；
function update(){
    var nexShowTime = getCurShowTime(),
        nexhours = parseInt(nexShowTime/3600),
        nexminutes = parseInt((nexShowTime-nexhours*3600)/60),
        nexsecoends = nexShowTime%60;
        
    var curhours = parseInt(curShowTime/3600),
        curminutes = parseInt((curShowTime-curhours*3600)/60),
        cursecoends = curShowTime%60;

    if(cursecoends != nexsecoends){
       
            if (parseInt(curhours/10) != parseInt(nexhours/10)) {
                addBalls(margin_left,margin_top,parseInt(curhours/10));
            }
            if (curhours%10 != nexhours%10) {
                addBalls(15*(radius+1)+margin_left,margin_top,curhours%10);
            }
            
            if (parseInt(curminutes/10) != parseInt(nexminutes/10)) {
                addBalls(margin_left+39*(radius+1),margin_top,parseInt(curminutes/10));
            }
            if (curminutes%10 != nexminutes%10) {
                addBalls(margin_left+54*(radius+1),margin_top,curminutes%10);
            }


            if (parseInt(cursecoends/10) != parseInt(nexsecoends/10)) {
                addBalls(margin_left+78*(radius+1),margin_top,parseInt(cursecoends/10));
            }
            if (cursecoends%10 != nexsecoends%10) {
                addBalls(margin_left+93*(radius+1),margin_top,cursecoends%10);
            }

        curShowTime = nexShowTime;
    }

  updateBalls();
   
}

//让小球运动起来
 function updateBalls(){
    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
        if(balls[i].y >= canvas_height-radius){
            balls[i].y = canvas_height-radius;
            balls[i].vy = -balls[i].vy*0.78;
        }
         if(balls[i].x <= radius){
            balls[i].x = radius;
            balls[i].vx = -balls[i].vx*0.7;
        }
    }
 }

//小球属性
function addBalls(x,y,num){
    for(var i = 0;i < digit[num].length; i++){
        for (var j = 0; j < digit[num][i].length; j++) {
            if(digit[num][i][j] == 1){
                var aBall = {
                    x:x+2*j*(radius+1)+(radius+1),
                    y:y+2*i*(radius+1)+(radius+1),
                    g:1.5+Math.random(),
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
                    vy:-2,
                    color:colors[Math.floor(Math.random()*colors.length)]
                }
             balls.push(aBall);
            }
        }
    }
}
//距离目标时间的秒数的函数
function getCurShowTime(){
    var curTime = new Date();
    var rest = endTime.getTime()-curTime.getTime();
    rest = Math.round(rest/1000);

    return rest>=0?rest:0;
}
//计算倒计时的小时、分钟、秒，并调用函数将其显示；
function rander(cxt){
    //对屏幕进行刷新
    cxt.clearRect(0,0,canvas_width,canvas_height);
    //获取距离目标时间的小时数、分钟数、秒数
    var hours = parseInt(curShowTime/3600),
        minutes = parseInt((curShowTime-hours*3600)/60),
        secoends = curShowTime%60;
    //调用pint函数绘画各具体数字
    pint(margin_left,margin_top,parseInt(hours/10),cxt);
    pint(15*(radius+1)+margin_left,margin_top,hours%10,cxt);
    pint(margin_left+30*(radius+1),margin_top,10,cxt);
    
    pint(margin_left+39*(radius+1),margin_top,parseInt(minutes/10),cxt);
    pint(margin_left+54*(radius+1),margin_top,minutes%10,cxt);
    pint(margin_left+69*(radius+1),margin_top,10,cxt);
    
    pint(margin_left+78*(radius+1),margin_top,parseInt(secoends/10),cxt);
    pint(margin_left+93*(radius+1),margin_top, secoends%10,cxt);

    for (var i = 0; i < balls.length; i++) {
        cxt.fillStyle = balls[i].color;
        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,radius,0,2*Math.PI);
        cxt.closePath();

        cxt.fill();
    }
    
}
//绘画不同数字的函数
function pint(x,y,num,cxt){
    cxt.fillStyle = '#99BE77';
    for (var i = 0; i < digit[num].length; i++) {
         for (var j = 0; j < digit[num][i].length; j++) {
             if (digit[num][i][j]==1) {
                cxt.beginPath();
                cxt.arc(x+2*j*(radius+1)+(radius+1),y+2*i*(radius+1)+(radius+1),radius,0,2*Math.PI);
                cxt.closePath();

                cxt.fill();


             }
         }


    }
}
