class Link{
    constructor(corpoA,corpoB){
      var lastlink = corpoA.body.bodies.length-2;
     this.link = Constraint.create({
          corpoA:corpoA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          corpoB:corpoB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01
        });
        World.add(motor.world,this.link);
    } 

    remove(){
      World.remove(motor.world,this.link);
     
    }
}