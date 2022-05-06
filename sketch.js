const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

let motor,mundo
let tijolo, tijoloImg
let fundoImg
let chao
let torre, torreImg
let corda
let link
let corte

function preload(){
  tijoloImg=loadImage("tijolo.png")
  fundoImg=loadImage("fundo.png")
  torreImg=loadImage("papai1.png")
}

function setup(){
  createCanvas(800,800);

  motor= Engine.create();
  mundo= motor.world;

  torre=createImg('papai1.png')
  torre.position(-40,0)
  torre.size(800,800)
  
  corte=createImg('cortar.png')
  corte.position(520,210)
  corte.size(50,50)
  corte.mouseClicked(caindo)

  chao=new Chao (400,750,800,100)
  
  corda=new Rope(3,{x:480,y:200})

  let cair={density:0.001}
  tijolo=Bodies.rectangle(480,200,70,30,cair)
  
  Composite.add(corda.body,tijolo);

  link=new Link(corda,tijolo)
}


function draw(){
  background(51);
  image(fundoImg,0,0,800,750)
  Engine.update(motor);

  chao.desenha()
  corda.desenha()

  push()

  if(tijolo!=null){
  image(tijoloImg,tijolo.position.x,tijolo.position.y,70,30)
}
  pop()
}

function caindo(){
link.remove()
link=null
corda.soltar()
}
