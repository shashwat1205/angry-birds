class Log extends BaseClass {
  constructor(x, y) {
    super(x,y,50,50);
    this.image =loaImage("sprites/wood2.png");
    
    }
  
  display(){
    var pos =this.body.position;
   pos.x =mouseX;
   pos.y = mouseY;
   super.display();
  }
};
