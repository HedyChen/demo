window.onload=function(){
	var canvas = document.getElementById('canvas');
	canvas.width = 800;
	canvas.height = 600;
	var context = canvas.getContext('2d');
     
     context.strokeStyle = "#C93D6A";
     context.lineWidth = 2;
     context.fillStyle = '#71F67C';
    for(var i = 0;i<10;i++){
        context.beginPath();
        context.arc(50+70*i,60,30,0,2*Math.PI*(i+1)/10);
        context.closePath();
        context.stroke();

    }
    
    for(var j = 0;j<10;j++){
        context.beginPath();
        context.arc(50+70*j,170,30,0,2*Math.PI*(j+1)/10);
         context.stroke();
    }

      for(var i = 0;i<10;i++){
        context.beginPath();
        context.arc(50+70*i,280,30,0,2*Math.PI*(i+1)/10,true);
        context.closePath();
        context.stroke();

    }

    for(var j = 0;j<10;j++){
        context.beginPath();
        context.arc(50+70*j,390,30,0,2*Math.PI*(j+1)/10,true);
        context.stroke();
    }


    for(var i = 0;i<10;i++){
        context.beginPath();
        context.arc(50+70*i,500,30,0,2*Math.PI*(i+1)/10);
        context.closePath();
        context.fill();

    }


    
}

