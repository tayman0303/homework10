let xCoords = [0,62.5,125,187.5]
let yCoords = [0,62.5,125,187.5]

function setup() {
  createCanvas(800,800);
  // Help blind or low-vision users understand your sketch
  describe("A nature scene in p5.js")
}

function draw() {
  background('skyblue');
  fill('yellow')
  strokeWeight(0)
  rect(0,0,250,250,0,0,25,0)
  //sunrays going up and down(forloop)
  for (let y of yCoords){
    rect(240,y,100,25,10)
  }
  //sunrays going left and right (forloop)
  for (let x of xCoords){
    rect(x,240,25,100,10)
  }

  push();
  fill('grey')
  ellipse(mouseX, mouseY, 25, 25)
  fill('black')
  ellipse(mouseX-20,mouseY-5,25,10)
  ellipse(mouseX+20,mouseY-5,25,10)
  pop();
}