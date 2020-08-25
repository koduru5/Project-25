class Box {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.image = loadImage("dustbin.png");
    }
    display(){
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill(250);
      rect(0, 0, this.width, this.height);
    }
  };