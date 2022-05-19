const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4, log5;
var bird1;
var fundao="sprites/bg.png";
var sling;

var pontuachone =0

var  gameState = "onSling"

function preload(){
//fundao=loadImage ("sprites/bg.png");
//fundaoNoturno=loadImage ("sprites/bg2.jpg");
getTime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(150, 305, 300, 170);

    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);

    bird1 = new Bird(200, 50);

    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);

    sling=new SlingShot(bird1.body,{x:200, y:50})
}

function draw(){
    if(fundao) {
        background(fundao);
    }
    Engine.update(engine);
    textSize(36)
    fill("#00FFFF")
    text("pontuachone:"+pontuachone,900,50)

    pig1.pontuachone()
    pig2.pontuachone()

    platform.display();
   
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();


    log1.display();
    log2.display();
    log3.display();
    log4.display();



    sling.display();

    bird1.display();

}
function mouseDragged(){
    if (gameState != "launched"){
    Matter.Body.setPosition(bird1.body, {x:mouseX, y:mouseY})


    }
    

}
function mouseReleased(){
sling.fly()
gameState="launched"
}

function keyPressed(){
if (keyCode ===32){
    bird1.trajectory= []
    Matter.Body.setPosition(bird1.body, {x:200, y:50})
    sling.attach(bird1.body)
    gameState = "onSling"
}

}

async function getTime(){
    var response = await fetch ("https://worldtimeapi.org/api/timezone/America/Sao_Paulo");
    var responseJson= await response.json()
    //console.log(responseJson)
    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13)
    if(hour >=06 && hour<=19){
        fundinho = "sprites/bg.png";
    } else {
        fundinho = "sprites/bg2.jpg";
    }

    fundao = loadImage(fundinho);

}