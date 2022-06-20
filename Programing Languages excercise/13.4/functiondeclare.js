function setup(){
    createCanvas(800, 300);
    sayHello(); //function call
}

function draw(){
    background(220);
  sayClick()
}

function sayHello() //function declaration
{
    let message = "Hello World";
    console.log(message);
}

function sayClick(){
  if (mouseIsPressed === true){
    let message1 = "Hello Worlds";
    console.log(message1);
  }
}