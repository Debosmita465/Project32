class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
          'isStatic':false,
            'restitution':0.8,
            'friction':0.8,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }
}