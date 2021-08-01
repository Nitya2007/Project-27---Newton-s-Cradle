class Rope{
    constructor(body1, body2, x,y ){
        var option = {bodyA:body1, 
        bodyB:body2, pointB:{x:x, y:y}}
        this.rope=Matter.Constraint.create(option); 
        World.add(world,this.rope); 
this.x = x; 
this.y = y; 

    }
display(){
var pointA = this.rope.bodyA.position; 
var pointB = this.rope.bodyB.position; 
line (pointA.x, pointA.y, pointB.x+this.x, pointB.y+this.y)
}
}