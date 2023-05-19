const BRANCO = 0;
const VERDE = 1;

let ESTADOMOUSE = BRANCO;

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 10);

  if(ESTADOMOUSE == 0)
  fill(20, 100, 20);

  if(ESTADOMOUSE == 1)
  fill(255)
  
}

function mousePressed(){
  if(ESTADOMOUSE == BRANCO)
  ESTADOMOUSE = VERDE
  
  else if(ESTADOMOUSE == VERDE)
  ESTADOMOUSE = BRANCO
  
  return false;
}