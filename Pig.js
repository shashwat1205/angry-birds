class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }

  
  display(){
    var pos =this.body.position;
   pos.x =mouseX;
   pos.y = mouseY;
   super.display();
  }

}; 