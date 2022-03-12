class barco{
    constructor(x,y,largura,altura,navio){
        var barco_options={
            isStatic:true
        }
        this.animation=navio
        this.speed=0.5
        this.largura=largura
        this.altura=altura
        this.barco1=Bodies.rectangle(x,y,largura,altura)
        this.barcoIMG=loadImage("assets/PIRATA.png")
        World.add(world,this.barco1)

    }
    display(){
        var indice=floor(this.speed%this.animation.length)
        push()
       translate (this.barco1.position.x,this.barco1.position.y)
       rotate (this.barco1.angle)
       imageMode(CENTER)
        image(this.animation[indice],0,0,this.largura,this.altura)
      pop()
      }
      remove(index){
          this.animation=barcoquebrado
          this.speed=0.01
          this.largura=300
          this.altura=300
          setTimeout(()=>{
              Matter.World.remove(world,barcos[index].barco1)
              delete barcos[index]
          },500
              
          )
      }

       animate(){this.speed+=0.05}
    }