const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var a;
var circles=[];

var ground1;
var stand1, stand2;
var b1,b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var c1, c2, c3, c4, c5, c6, c7, c8, c9;
var polygon1;
var slingshot1;

var score = 0;
function setup() {
  createCanvas(2000,1000);
  stroke(255)
  engine = Engine.create();
    world = engine.world;
  

 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)

  ground1 = new Ground(1000,height,2000,30);
  stand1 = new Ground(1020,500,450,20);
  stand2 = new Ground(1700,300,450,20);

  //level1
  b1 = new Block(875,450,50,70);
  b2 = new Block(925,450,50,70);
  b3 = new Block(975,450,50,70);
  b4 = new Block(1025,450,50,70);
  b5 = new Block(1075,450,50,70);
  b6 = new Block(1125,450,50,70);
  b7 = new Block(1170,450,50,70);

  //level2
  b8 = new Block(920,380,50,70);
  b9 = new Block(970,380,50,70);
  b10 = new Block(1020,380,50,70);
  b11 = new Block(1070,380,50,70);
  b12 = new Block(1120,380,50,70);

  //level3
  b13 = new Block(970,310,50,70);
  b14 = new Block(1020,310,50,70);
  b15 = new Block(1070,310,50,70);

  //level4
  b16 = new Block(1020,240,50,70);

  //level1
  c1 = new Block(1600,250,50,70);
  c2 = new Block(1650,250,50,70);
  c3 = new Block(1700,250,50,70);
  c4 = new Block(1750,250,50,70);
  c5 = new Block(1800,250,50,70);

  //level2
  c6 = new Block(1650,180,50,70);
  c7 = new Block(1700,180,50,70);
  c8 = new Block(1750,180,50,70);

  //level3
  c9 = new Block(1700,110,50,70);

  polygon1 = new Polygon(250,300,45);
  slingshot1 = new SlingShot(polygon1.body,{x:250,y:300});

 
}

function draw() {
 background(0);  
 

 noStroke();
 textSize(35);
 fill("white");
 text("SCORE: " + score,width-1250,40);

  Engine.update(engine);
  
  
  ground1.display();
stand1.display();
stand2.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();

c1.display();
c2.display();
c3.display();
c4.display();
c5.display();
c6.display();
c7.display();
c8.display();
c9.display();

polygon1.display();
slingshot1.display();

b1.score();
b2.score();
b3.score();
b4.score();
b5.score();
b6.score();
b7.score();
b8.score();
b9.score();
b10.score();
b11.score();
b12.score();
b13.score();
b14.score();
b15.score();
b16.score();
c1.score();
c2.score();
c3.score();
c4.score();
c5.score();
c6.score();
c7.score();
c8.score();
c9.score();

}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon1.body,{x:250,y:300});
    slingshot1.attach(polygon1.body);
  }
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);

if(hour>=0600 && hour<=1800){
  background(150);
}
else{
  background(0);
}
}


