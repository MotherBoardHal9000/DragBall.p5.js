/*
----- Coding Tutorial by Patt Vira ----- 
Name: Bouncing Balls with matter.js
Video Tutorial: https://youtu.be/dTwz2q6yYeQ

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

const {Engine, Body, Bodies, Composite, Vector} = Matter;

let engine; 
let balls = []; 

let bottomEdge, topEdge, rightEdge, leftEdge;
let thickness = 20;

let colorPalette = ["#abcd5e", "#14976b", "#2b67af", "#62b6de", "#f589a3", "#ef562f", "#fc8405", "#f9d531"]; 

function setup() {
  createCanvas(1200, 1200);
  engine = Engine.create();
  engine.gravity = Vector.create(0, 0);
  
  bottomEdge = new Boundary(width/2, height - thickness/2, width, thickness);
  topEdge = new Boundary(width/2, thickness/2, width, thickness);
  leftEdge = new Boundary(thickness/2, height/2, thickness, height);
  rightEdge = new Boundary(width - thickness/2, height/2, thickness, height);
}

function draw() {
  background(220);
  Engine.update(engine);
  
  bottomEdge.display();
  topEdge.display();
  leftEdge.display();
  rightEdge.display();

  for (let i=balls.length-1; i>0; i--) {
    balls[i].checkEdges();
    balls[i].display();
    
    if (balls[i].done) {
      balls[i].removeCircle();
      balls.splice(i, 1);
    }
  }
  
  
 

}

function mouseDragged() {
  balls.push(new Circle(mouseX, mouseY, random(10, 60)));
}

