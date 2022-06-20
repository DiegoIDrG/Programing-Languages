function setup() {
	createCanvas(800, 800);
    background(220);
}


function draw() {
for (var x = 30; x < width; x += width / 5) { 
  for (var y = 30; y < height; y += height / 5) {
  circle(x, y, 30)
}  
}
}
  

