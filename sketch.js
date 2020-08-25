
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	ground = new Ground(400,height,800,20);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1= new Dustbin(440, 650, 200, 20);
	box2= new Dustbin(370,610,20,50);
	box3= new Dustbin(550,610,20,50);

	paperObject= new Paper(100,610,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(PaperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



