class Paper
{
constructor(x,y,z)
{
var options={
isStatic:false,
restitutin:0.3,
friction:0.5,
density:1.2

}
this.x=x;
this.y=y;
this.r=r;
this.body=Body.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body);


}
display();
{
    var paperpos=this.body.positon;

    push()
    translate(paperpos.x,paperpos.y);
    reactMode(CENTER)
    strokeWeight(3);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop()
}
}


