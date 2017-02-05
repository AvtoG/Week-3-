function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
	
var	x=0


	while (x<400) {

		noFill()
		ellipse (200,200,x,x);
		
		x=x+10
	}
}
