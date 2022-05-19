class Pig extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png");
      
      this.Visibility=255
    }
 
    pontuachone(){
      if (this.Visibility<0 && this.Visibility>-1005){
        pontuachone++
        
      }

    }

    display(){
      if (this.body.speed<3){
        super.display()

      } else {
        var pos = this.body.position
        push()
        this.Visibility-=5
        tint(255,this.Visibility)
        image(this.image,pos.x,pos.y,50,50)
        pop()
        World.remove(world,this.body)
       
      }
      

    }

  };
  