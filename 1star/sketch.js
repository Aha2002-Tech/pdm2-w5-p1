let button1, button2, button3;
let img;
let cat, monkey, bear;


function setup() {
  createCanvas(400, 400);
  background(220);
  fill(255, 0, 0);
  stroke(100, 0, 0);
  button1 = createButton('bear');
  button1.position(200, 500);
 
  fill(0, 255, 0);
  stroke(0, 100, 0);
  button2 = createButton('cat');
  button2.position(150, 500);

  console.log("cat");
 fill(0, 255, 255);
  stroke(10);
  button3 = createButton('monky');
  button3.position(50, 500, 100, 50);

  console.log("monky");

}
function draw() {

    try{

    image(img, 0, 0,  width, height);
} catch (error) {console.log ("no image");}

}


function getAnimalImage(name) {
    img = loadImage("assets/" + name + ".jpg");
     }



function mousePressed() {
 button1.mousePressed (function() {getAnimalImage("bear")});
  button2.mousePressed(function() {getAnimalImage("cat")});
  button3.mousePressed(function() {getAnimalImage("monky")});

}

