class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:0.8		
			}
            this.image=loadImage("images/stone.png");
		this.x=x;
        this.y=y;
        this.r=r;
		this.body=Bodies.circle(this.x, this.y,this.r/2, options);
 		World.add(world, this.body);
    }
    display(){
    //   this.body.position.x = mouseX;
    //   this.body.position.y = mouseY;
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    // eliipseMode(radius);
    image( this.image,0, 0,this.r*2, this.r*2);
    pop();

    }
  }