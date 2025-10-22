class Boundary {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    
    this.body = Bodies.rectangle(x, y, this.w, this.h, {isStatic: true});
    Composite.add(engine.world, this.body);
  }
  
  display() {
    fill(0);
    rectMode(CENTER);
    let x = this.body.position.x;
    let y = this.body.position.y;
    rect(x, y, this.w, this.h);
  }
}