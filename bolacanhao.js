class bolacanhao{
  constructor(x,y){
      var bola_options={
          isStatic:true
      }
      this.bola=Bodies.circle(x,y,30,bola_options)
      this.bolaIMG=loadImage("assets/cannonball.png")
      World.add(world,this.bola)
  }  
  display(){
    push()
    image(this.bolaIMG,this.bola.position.x,this.bola.position.y,30,30)
  pop()
  }

fire (){
  var newAngle=canhao1.angulo;
   newAngle = newAngle *(3.14/180) 
   var velocity = p5.Vector.fromAngle(newAngle); 
  velocity.mult(0.25);
   Matter.Body.setStatic(this.bola, false); 
  Matter.Body.setVelocity(this.bola, { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
}
remove(index){
  Matter.Body.setVelocity(this.bola, { x:0, y:0 });

  setTimeout(()=>{
      Matter.World.remove(world,bolas[index].bola)
      delete bolas[index]
  },1000
      
  )
}
}


































