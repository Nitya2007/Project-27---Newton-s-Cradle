class Roof{
    constructor(x,y,w,h)
    {
       
        this.body=Bodies.rectangle(x,y,w,h,{isStatic: true});
        World.add(world, this.body);
       this.w = w;
       this.h=h; 
    }
display(){
    push (); 
    translate (this.body.position.x, this.body.position.y); 
    rectMode(CENTER); 
    fill ("gray"); 
    rect(0,0,this.w, this.h); 
    pop ();
}

}

