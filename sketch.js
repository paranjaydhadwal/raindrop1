// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var letters="qwertyuiopasdfghjklzxcvbnm";

// var engine, world;
// var hi;
function setup() {
 // createCanvas(800,400);
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  // engine = Engine.create();
  // world = engine.world;
 //hi = new paranjay(50,50,50,50);
 //hi.velocityY=5;
  //hi=createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  // for(var i = 0 ;i<1200;i=i+20){
  //  hello= createSprite(i,50,10,10);
  //  hello.shapeColor="orange"
  //  hello.velocityY=5;
  //  if(hello.y===400){
  //   hello.visible=false
  //   console.log(hello.x)
  //  }
  // }
  // for(var i = 0 ;i<1200;i=i+20){
  //   hi=new paranjay(i,50,10,10);
  // }
 // hi.display();
 //hi.velocityY=5;
 //hi.display();
 for(var i=0;i<letters.length;i++){
   var x=random(0,1200);
   var y=random(0,300);
   textSize(Math.round(random(30,70)));
   var r= Math.round(random(0,255));
   var g= Math.round(random(0,255));
   var b= Math.round(random(0,255));
   fill(r,g,b);
   for(var j=0;j<letters.length;j++){
   text(letters[Math.round(random(0,letters.length))],x,y);
   y=y+40;
   }
 }
  //Engine.update(engine);
//  raindrop.display();
 //s drawSprites();
}