const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var ground
var torre
var torreIMG
var canhao1
var canhaoIMG
var bola
var angulo
var barco1
var bolas=[]
var fundo_mar
var barcos=[]
var collide
var barcojson
var barcoimg
var navio=[]
var quebrado
var quebradojson
var barcoquebrado=[]
var boladecanhao
var boladecanhaoimg
var boladecannon=[]
var backgroundmusic
var cannonsound
var splashsound
var laungh

function preload() {
 ground=loadImage ("assets/background.gif")
 torreIMG=loadImage ("assets/tower.png")
 canhaoIMG=loadImage ("assets/canon.png")
 barcojson=loadJSON("assets/boat.json")
 barcoimg=loadImage("assets/boat.png")
 quebradojson=loadJSON("assets/brokenBoat.json")
 quebrado=loadImage("assets/brokenBoat.png")
 boladecanhao=loadJSON("assets/waterSplash.json")
 boadecanhaoimg=loadImage("assets/waterSplash.png")
 backgroundmusic=loadSound("assets/assets_background_music.mp3")
 cannonsound=loadSound("assets/assets_cannon_explosion.mp3")
 splashsound=loadSound("assets/assets_cannon_water.mp3")
 laungh=loadSound("assets/assets_pirate_laugh.mp3")
}
function setup() {
angleMode(DEGREES)
 angulo= 1
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var config={
    isStatic: true 
  }
  fundo_mar=Bodies.rectangle(600,560,1200,20,config)
  torre=Bodies.rectangle(50,220,150,300,config)
 World.add(world,torre)
 World.add(world,fundo_mar)
 canhao1=new canhao(120,270,100,100,angulo)
 var boats=barcojson.frames
 for (var i=0;i<boats.length;i++){
   var pos=boats[i].position
   var imagem=barcoimg.get(pos.x,pos.y,pos.w,pos.h)
   navio.push(imagem)
 }
 var boats1=quebradojson.frames
 for (var i=0;i<boats1.length;i++){
   var pos=boats1[i].position
   var imagem=quebrado.get(pos.x,pos.y,pos.w,pos.h)
   barcoquebrado.push(imagem)
 }
 //var boladecanhao1=boladecanhao.frames
 //for (var i=0;i<boladecanhao1.length;i++){
  // var pos=boladecanhao1[i].position
  // var imagem=boladecanhaoimg.get(pos.x,pos.y,pos.w,pos.h)
  // boladecannon.push(imagem)
 //}
}

function draw() {
  background(ground);

  Engine.update(engine);
   canhao1.display()
   image(torreIMG,torre.position.x,torre.position.y,150,300)
for (var i = 0;i<bolas.length;i++){
  exibirbola(bolas[i],i)
  colisão(i)
}
if (!backgroundmusic.isPlaying()){
  backgroundmusic.play()
  backgroundmusic.setVolume(0.3)
}

rectMode(CENTER)
exibirbarco()

}









function exibirbola (bola,i){
  if (bola){
    bola.display()
    if (bola.bola.position.y>=450){
bola.remove (i)
if (!splashsound.isPlaying()){
splashsound.play(
  splashsound.setVolume(0.3)
)
}
    }
  }
}

function keyReleased(){if(keyCode==32){
  bola=new bolacanhao(200,270) 
  bolas.push(bola)
  bolas[bolas.length-1].fire()
  cannonsound.play()
  cannonsound.setVolume(0.4)
}}
function exibirbarco (){
  if (barcos.length>0){
for (var i = 0;i<barcos.length;i++){
  if (barcos[i]){
    Matter.Body.setVelocity(barcos[i].barco1,{x:-1,y:0})
    barcos[i].display()
    barcos[i].animate()
    collides=Matter.SAT.collides(this.torre,barcos[i].barco1)
    if (collides.collided){
      gameover()
      if (!laungh.isPlaying()){
      laungh.play()
      laungh.setVolume(0.2)
  }
  }
  }
  
}
if (barcos[barcos.length-1]==undefined || barcos[barcos.length-1].barco1.position.x<500){
   barco1=new barco (1000,450,200,200,navio)
   barcos.push (barco1)
   }
  }
  else{
    barco1=new barco(1000,450,200,200,navio)
    barcos.push(barco1)
  }
}


function colisão(index){
  for (var i = 0;i<barcos.length;i++){
    if (bolas[index]!==undefined && barcos[i]!==undefined){
      collide=Matter.SAT.collides(bolas[index].bola,barcos[i].barco1)
      if (collide.collided){
        
        barcos[i].remove(i)
        Matter.World.remove(world,bolas[index].bola)
        delete bolas[index]
      }
    }
  }
}


function gameover(){
  swal({
    title:"Game Over",
    text:"Jack está decepcionado",
    imageUrl:"https://o.remove.bg/downloads/e7ffef2d-12a6-420a-b249-312d89f149d8/Jack-removebg-preview.png",
    confirmButtonText:"recomeçar jogo."
  },function(isConfirm){if(isConfirm){location.reload()}})
}
