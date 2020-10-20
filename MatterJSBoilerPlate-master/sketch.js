
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1;
var b1,b2, b3, b4, b5;
var r1, r2, r3, r4, r5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1 = new roof(width/2, height/4, width/7, 20);
bobDiameter = 40;
startBobPositionX=width/2; 
startBobPositionY=height/4+500;
 b1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
 b2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
 b3=new bob(startBobPositionX,startBobPositionY,bobDiameter); 
 b4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
 b5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

 r1=new rope(b1.body,roof1.body,-bobDiameter*2, 0)
  r2=new rope(b2.body,roof1.body,-bobDiameter*1, 0) 
  r3=new rope(b3.body,roof1.body,0, 0) 
  r4=new rope(b4.body,roof1.body,bobDiameter*1, 0) 
  r5=new rope(b5.body,roof1.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  roof1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  r3.display();
  r4.display();
  r5.display();
  r2.display();


 
}

function drawLine(constraint)
 { bobBodyPosition=constraint.bodyA.position
   roofBodyPosition=constraint.bodyB.position 
   roofBodyOffset=constraint.pointB; roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
   roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
   line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); }




