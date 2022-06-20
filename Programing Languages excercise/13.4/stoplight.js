function setup() {
    createCanvas(300, 300);
  }
  
  function draw() {
    background('black');
    fill('grey');
    circle(150, 100, 40);
    circle(150, 150, 40);
    circle(150, 200, 40);
    
    if ((mouseY > 79 && mouseY< 120)&&(mouseX >129 && mouseX<169)&&(mouseIsPressed === true))
            { fill('red');
            circle(150, 100, 40);
            }  
            else if ((mouseY > 180 && mouseY< 220)&&(mouseX >129 && mouseX<169)&&(mouseIsPressed === true)){ 
                fill('green');
                circle(150, 200, 40);
                }  
            else if ((mouseY>130 && mouseY<170)&&(mouseX >129 && mouseX<169)&&(mouseIsPressed === true)){
                fill('yellow');
                circle(150, 150, 40);      
            }
            
        }
        