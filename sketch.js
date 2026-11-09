let xCoords = [0,62.5,125,187.5]
let yCoords = [0,62.5,125,187.5]
let treeX1 = 0
let treeY1 = 10
let treeSpeed1 = 1
let treeX2 = 0
let treeY2 = 10
let treeSpeed2 = 1
let treeX3 = 0
let treeY3 = 10
let treeSpeed3 = 1

function setup() {
  createCanvas(800,800);
  // Help blind or low-vision users understand your sketch
  describe("A nature scene in p5.js")
}

function draw() {
  background('skyblue');
  sunShine();
  annoyingFly();
  treeX1 = treeX1 + treeSpeed1;
  tree1(treeX1,treeY1,0)
  if(treeX1 >= width + 200) {
    treeX1 = -120
    treeY1 = random(-100,10)
    treeSpeed1 = random(3,4)
  }
treeX2 = treeX2 + treeSpeed2;
  tree2(treeX2,treeY2,0)
  if(treeX2 >= width + 200) {
    treeX2 = -120
    treeY2 = random(-100,10)
    treeSpeed2 = random(3,4)
  }
  treeX3 = treeX3 + treeSpeed3;
  tree3(treeX3,treeY3,0)
  if(treeX3 >= width + 200) {
    treeX3 = -120
    treeY3 = random(-100,10)
    treeSpeed3 = random(3,4)
  }
}
function tree1(x,y,r){
  push();
  translate(x,y);
  rotate(r);
  noStroke();

  strokeWeight(7)
  fill('forestgreen')
  triangle(100,610,150,560,200,610)
  triangle(100,650,150,600,200,650)
  fill('brown')
  rect(135,650,30,40)
}
function tree2(x,y,r){
  push();
  translate(x,y);
  rotate(r);
  noStroke();

  strokeWeight(7)
  fill('lightgreen')
  triangle(100,610,150,560,200,610)
  triangle(100,650,150,600,200,650)
  fill('brown')
  rect(135,650,30,40)
}
function tree3(x,y,r){
  push();
  translate(x,y);
  rotate(r);
  noStroke();

  strokeWeight(7)
  fill('green')
  triangle(100,610,150,560,200,610)
  triangle(100,650,150,600,200,650)
  fill('brown')
  rect(135,650,30,40)
}

function sunShine(){
  fill('yellow')
  strokeWeight(0)
  rect(0,0,250,250,0,0,25,0)
  //sunrays going up and down(forloop)
  for (let y of yCoords){
    rect(240,y,100,25,10)
  }
  //sunrays going left and right(forloop)
  for (let x of xCoords){
    rect(x,240,25,100,10)
  }

function grassySpot(){
  
}

}

function annoyingFly(){
   push();
  fill('grey')
  ellipse(mouseX, mouseY, 25, 25)
  fill('black')
  ellipse(mouseX-20,mouseY-5,25,10)
  fill('white')
  ellipse(mouseX+20,mouseY-5,25,10)
  pop();
}