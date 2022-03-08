
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ballImage;
var ground;
var leftSide;
var rightSide

function preload() {
	ballImage = loadImage("bola d epapel.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Matter.Bodies.circle(400, 200, 20, ball_options);
	World.add(world, ball);
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1350,600,20,120)
	ground = new Ground(width / 2, 670, width, 20)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	imageMode(CENTER);




	
	background("orange");
	ground.display()
	leftSide.display()
	rightSide.display()
	ellipse(ball.position.x, ball.position.y, 20);
	push()
	image(ballImage,ball.position.x, ball.position.y, 45, 45);
	pop()
	drawSprites();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


