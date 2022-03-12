class canhao{
    constructor(x,y,largura,altura,angulo){
        this.x=x
        this.y=y
        this.largura=largura
        this.altura=altura
        this.angulo=angulo
        this.canhaoIMG=loadImage ("assets/canon.png")
        
    }
    display(){
        if (keyIsDown(RIGHT_ARROW)&& this.angulo<26){
            this.angulo+=1
        }
        if (keyIsDown(LEFT_ARROW)&& this.angulo>-10){
            this.angulo-=1
        }
        push()
        translate (this.x,this.y)
        rotate (this.angulo)
        image(this.canhaoIMG,0,0,this.largura,this.altura)
        pop()
         console.log(this.angulo)
    }
}