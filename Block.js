class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visibility = 255;
  }
  
display(){
  if(this.body.speed < 4){
  fill(255);
  strokeWeight(2);
  stroke('rgb(0,0,0)')
  super.display();
  }
  else{
    World.remove(world,this.body);
    push();
this.Visibility = this.Visibility - 5;
    tint(0,this.Visibility);
    pop();
  }
}

score(){
  if(this.Visibility < 0 && this.Visibility > -105){
    score++;
  }
}
}
