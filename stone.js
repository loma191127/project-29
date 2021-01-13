class Stone {
    constructor(x, y, diameter) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, diameter/2, options);
      this.radius = diameter/2;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      fill("grey");
      push ();
      translate (pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(2);
      stroke("silver");
      ellipse(0, 0, this.radius,this.radius);
      pop ();
    }
  }