class Paper {
    constructor(x, y, radius) {
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        this.image = loadImage("paper.png");
            
        World.add(world, this.body);
    }
    display(){
        circleMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill(240);
        circle(0, 0, this.radius);
    }

 }
