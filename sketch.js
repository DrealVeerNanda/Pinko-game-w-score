const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,division;
var divisionHeight=300;

var particles= [];
var plinkos= [];
var divisions=[];

var score=0;
var count=0;
var particle;
var gameState="start"

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground= new Ground(200,800,800,20);
  side= new Ground(493,400,10,800);
  side2 = new Ground(-18,400,10,800);


  for (var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j= 40; j<= width; j=j+60){
    plinkos.push(new Plinko(j,75));
  }
  for (var j= 15; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j= 40; j<= width; j=j+60){
    plinkos.push(new Plinko(j,275));
  }
  for (var j= 15; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  
  
  
 
}

function draw() {
  background("black");  
  textSize(30)
  fill("white");
  text("Score : "+score,20,50);

  textSize(30)
  text(" 1000 ", -5, 550);
  text(" 1000 ", 80, 550);
  textSize(35)
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  Engine.update(engine);

  ground.display();
  side.display();
  side2.display();

  if ( gameState ==="end") {
    
    textSize(90);
    text("GameOver", 20, 250);
    //return
  }
  
  for (var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 150) 
              {
                  score=score+1000;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 300 && particle.body.position.x > 151 ) 
              {
                    score = score + 500;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 301 )
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

  
  
  for (var k=0; k <divisions.length; k++){
    divisions[k.display();
  }
 
}





function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}





