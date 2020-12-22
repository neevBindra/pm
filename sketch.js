
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5;
var ground,treeImg,boy,boyImg,stone;
var launcher; 
function preload()
{
  boyImg = loadImage("boy.png");
  treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	mango1 = new Mango(940,430,40,40);
	mango2 = new Mango(900,340,40,40);
	mango3 = new Mango(1040,310,40,40);
	mango4 = new Mango(930,300,40,40);
	mango5 = new Mango(1010,420,40,40);
	ground = new Ground(600,660,1200,20);
	stone = new Stone(115,530,30,20);
	launcher = new Launcher(stone.body,{x:115,y:530})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(treeImg,810,220,380,450)
  image(boyImg,100,455,150,270)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone.display();
  launcher.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
 
  
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
 }

 function mouseReleased(){
	launcher.fly();
 }

 function detectcollision(stone,mango){
mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position
if(stone.x - mango.x < (mango.width + stone.width)/2)
{
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=stone.x-mango.x){
      Matter.Body.setStatic(mango.body,false);
     }
}
 }

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:115 , y:520})
    launcher.attach(stone.body);
  }
}

