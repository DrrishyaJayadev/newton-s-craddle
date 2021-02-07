
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(380,280);
	bobObject2=new Bob(340,280);
	bobObject3=new Bob(320,280);
	bobObject4=new Bob(310,280);
	bobObject5=new Bob(290,280);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



