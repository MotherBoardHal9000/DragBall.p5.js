class Circle {
  constructor(x, y, r) {
    this.r = r
    this.c = color(random(colorPalette));
    this.done = false;
    this.body = Bodies.circle(x, y, this.r);
    
    let magnitude = 5;
    let velocity = Vector.create(random(-magnitude, magnitude), random(-magnitude, magnitude));
    Body.setVelocity(this.body, velocity);
    Composite.add(engine.world, this.body);
  }
  
  checkEdges() {
    let x = this.body.position.x;
    let y = this.body.position.y;
    if (x + this.r < 0 || x - this.r > width ||
       y + this.r < 0 || y - this.r > height) {
      this.done = true;
    } else {
      this.done = false;
    }
  }
  
  removeCircle() {
    Composite.remove(engine.world, this.body);
  }
  
  display() {
    fill(this.c);
    ellipse(this.body.position.x, this.body.position.y, this.r*2, this.r*2);
  }
}