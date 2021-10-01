//mecanismo de fisica
const Engine = Matter.Engine;
//mundo fisico
const World = Matter.World;
//objeto fisico
const Bodies = Matter.Bodies;

var engine, world;
var caixa1;



function setup() {
 createCanvas(400,400);

 engine = Engine.create();
 world  = engine.world;

caixa1 = new Box(200,300,50,50);

}

function draw() {
background("black");
//atualizar mecanismo fisico
Engine.update(engine);

caixa1.display();

}