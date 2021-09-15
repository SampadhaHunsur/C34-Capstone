
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dog,dogImg;
var rope, bone, ground;
var bone_con;
var cutButton, cutButtonImg
var dog_sad, dog_sadImg;
var background,bgImg;
var bone, boneImg;

function preload(){

  bgImg = loadImage("background.jpg");
  dogImg = loadImage("dog.png");
  dog_sadImg = loadImage("dog_sad.png");
  boneImg = loadImage("bone.png")
 // cutButton = loadImage("cutButton.png")

}

function setup() {
  createCanvas(400,400);

  dog = createSprite(100,300,100,100);
  dog.addImage(dogImg);

  cutButton = createImg('cutButton.png');
  cutButton.position(20,30);
  cutButton.size(50,50);
  cutButton.mouseClicked(drop);

  rope = new Rope(8,{x:40,y:30});

  bone = Bodies.rectangle(300,300,20);
  Matter.Composite.add(rope.body,bone);

  bone_con = new Link(rope,bone);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  image(bgImg,0,0,displayWidth+80, displayHeight);

  if(fruit!=null && fruit.position.y>=650)
  {
    bunny.changeImage(dog_sadImg);
    bone = null;
     
   }

   rope.show();
  
}

function drop()
{
  rope.break();
  bone_con.detach();
  bone_con = null; 
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,bone);
               bone = null;
               return true; 
            }
            else{
              return false;
            }
         }
}

