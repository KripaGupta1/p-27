const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ro1 = new Roof(400,100,650,50);
	
	bobObject1= new Bob(200,height-150,50);
	bobObject2= new Bob(300,height-150,50);
	bobObject3= new Bob(400,height-150,50);
	bobObject4= new Bob(500,height-150,50);
	bobObject5= new Bob(600,height-150,50);
	
	rope1 = new Rope(bobObject1.body,ro1.body,-100*2,0);
	rope2 = new Rope(bobObject2.body,ro1.body,-100*1,0);
	rope3 = new Rope(bobObject3.body,ro1.body,-100*0,0);
	rope4 = new Rope(bobObject4.body,ro1.body,+100*1,0);
	rope5 = new Rope(bobObject5.body,ro1.body,+100*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ro1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  keyPressed();
//   keyReleased();

}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
	}
}