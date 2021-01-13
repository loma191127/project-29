
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bgimg;
var base1,base2,base3;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10;
var b1,b2,b3,b4,b5;
var c1,c2,c3,c4,c5;
var stone,sling;
function preload(){
 bgimg=loadImage("bg.jpg");
}
function setup(){
 createCanvas(1290, 620);
 engine = Engine.create();
 world = engine.world;
 base1=new Base(100,200,200,20);
 base2=new Base(600,400,400,20);
 base3=new Base(1000,200,400,20);

 a1=new Objects(420,380,40,40);
 a2=new Objects(460,380,40,40);
 a3=new Objects(500,380,40,40);
 a4=new Objects(540,380,40,40);
 a5=new Objects(580,380,40,40);
 a6=new Objects(620,380,40,40);
 a7=new Objects(660,380,40,40);
 a8=new Objects(700,380,40,40);
 a9=new Objects(740,380,40,40);
 a10=new Objects(780,380,40,40);

 b1=new Objects(440,300,80,80);
 b2=new Objects(520,300,80,80);
 b3=new Objects(600,300,80,80);
 b4=new Objects(680,300,80,80);
 b5=new Objects(760,300,80,80);

 c1=new Objects(1000,175,400,50);
 c2=new Objects(850,25,100,100);
 c3=new Objects(950,25,100,100);
 c4=new Objects(1050,25,100,100);
 c5=new Objects(1150,25,100,100);

 stone=new Stone(50,180,40);
 sling=new SlingShot(stone.body,{x:100,y:100});
 Engine.run(engine);  
}
function draw(){
 rectMode(CENTER);
 background(bgimg);
 base1.display();
 base2.display();
 base3.display();
 a1.display();
 a2.display();
 a3.display();
 a4.display();
 a5.display();
 a6.display();
 a7.display();
 a8.display();
 a9.display();
 a10.display();

 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();

 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();

 stone.display();
 sling.display();
 drawSprites();
}
function mouseDragged(){
 Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
 sling.fly();
}



