const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;

var ball
var groundObj
var left
var right
//var button

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

ball_options={
	isStatic: false,
	restitution: 0.3,
    friction: 0,
	density: 1.2
}
//button1=createImg("up.png") 
//button1.position(220,30)
//button1.size(50,50) 
//button1.mouseClicked(vForce)


groundObj=new Ground(width/2,380,700,20)
left=new Ground(950,335,15,70)
right=new Ground(1100,335,15,70)

	//Create the Bodies Here.
ball=Bodies.circle(600,100,30, ball_options)
World.add(world,ball)


	Engine.run(engine);

}


function draw() {
	ellipseMode(RADIUS);
	rectMode(CENTER);

  background("green");

  groundObj.show()
  left.show()
  right.show()

  ellipse(ball.position.x,ball.position.y, 20)
  

  drawSprites();
 
}
function keyPressed(){ 
  
  if(keyCode === UP_ARROW){

	
		Matter.Body.applyForce(ball,ball.position,{x:40,y:-40})
	  
	  


  }

  }
 




