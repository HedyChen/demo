window.onload=function(){
	var canvas = document.getElementById('canvas');
	canvas.width = 400;
	canvas.height = 400;
	var context = canvas.getContext('2d');
   
    var info=[
    {p:[{x:0,y:0},{x:400,y:0},{x:200,y:200}],
     color:'#89FD6F'},
    {p:[{x:0,y:0},{x:200,y:200},{x:0,y:400}],
     color:'#F68DC0'},
    {p:[{x:0,y:400},{x:200,y:400},{x:100,y:300}],
     color:'#5DF2E1'},
    {p:[{x:200,y:400},{x:300,y:300},{x:200,y:200},{x:100,y:300}],
     color:'#F3BE3E'},
    {p:[{x:300,y:300},{x:300,y:100},{x:200,y:200}],
     color:'#D16FF6'},
    {p:[{x:300,y:300},{x:400,y:200},{x:400,y:0},{x:300,y:100}],
     color:'#EAF083'},
    {p:[{x:200,y:400},{x:400,y:400},{x:400,y:200}],
     color:'#99BBFC'},
    ] 

    for (var i=0;i < info.length;i++) {
    	var point = info[i].p;
    	var color = info[i].color;

    	draw(point,context,color);
    }

    function draw(pices,content,cl){
    	content.beginPath();
    	content.moveTo(pices[0].x,pices[0].y);
    	for (var j = 1; j<pices.length; j++) {
    		content.lineTo(pices[j].x,pices[j].y);
        }
    content.closePath();
    content.fillStyle = cl;
    content.fill();
    }
}

