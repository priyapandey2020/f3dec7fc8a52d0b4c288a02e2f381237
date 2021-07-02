const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);
  
     rubber=new Rubber(900,450,70);
    // rubber=Rubber(900,450,70);
    // rubber=new (900,450,70);
    // rubber=new Rubber();
    hammer = new Hammer(10,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
   
    rubber.display();
    iron.display()  
    hammer.display();

 
}
