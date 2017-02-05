function setup() { 
  createCanvas(400, 400);
}

var	x=200
var	y=0
var      x1=200

function draw() { 
	
	while (y<200) {
		
		line (x,y,x1,y);
		
		x=x-5
		y=y+5
		x1=x1+5
		
	}
	
	while (y>=200) {
		
		line (x,y,x1,y);
		
		x=x+5
		y=y+5
		x1=x1-5
	}
}
