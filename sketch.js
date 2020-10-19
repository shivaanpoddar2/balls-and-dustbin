var dustbin,dustbin2,dustbin3,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	dustbin=createSprite(630, 680, 150,10);
	

	dustbin2=createSprite(500,650,10,100);

	dustbin3=createSprite(650,650,10,100);
	

	paper=createSprite(300,200,10,10);
    paper.scale=4;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  

}



