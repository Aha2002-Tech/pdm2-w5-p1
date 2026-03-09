

function setup() {  

  createCanvas(400, 600);

 
}

function draw() {

  background(220);
    fill(0, 255, 0);
  rect(width / 2, height / 2, 250, 250);

  fill(255, 0, 0);
    stroke(100, 0, 0);
    rect(150, 500, 100, 50);
    
    textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('2 star Exercise solution', 50, 50);


}
function windowResized() {
  
}