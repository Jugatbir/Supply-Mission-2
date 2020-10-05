var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,basketBase

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	basketBaseSprite=createSprite(400,665,120,10);
	basketBaseSprite.shapeColor=color(255,0,0)

	basketLeftSprite=createSprite(455,630,10,60);
	basketLeftSprite.shapeColor=color(255,0,0)

	basketRightSprite=createSprite(345,630,10,60);
	basketRightSprite.shapeColor=color(255,0,0)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create a basket
	basketLeft = Bodies.rectangle( 455,630,10,60, {isStatic:true} );
 	World.add(world, basketLeft);

	basketRight = Bodies.rectangle( 345,630,10,60, {isStatic:true} );
	World.add(world, basketRight);
	 
	basketBase = Bodies.rectangle( 400,665,120,10, {isStatic:true} );
	 World.add(world, basketBase);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}



