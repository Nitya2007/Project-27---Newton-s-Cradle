class Bob{
    constructor(x,y,r)
    {
        var option={
            isStatic: false,
            restitution:1, 
            friction:0,
            density:0.8
        }
        this.body=Bodies.circle(x,y,r/2, option);
        World.add(world, this.body);
        this.r=r; 
    }
display(){
    push (); 
    translate (this.body.position.x, this.body.position.y); 
    rectMode(CENTER); 
    fill ("pink"); 
    ellipse(0,0,this.r, this.r); 
    pop ();
}
}

