class Bob {
    constructor(x,y,radius){
        var options= {
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8,
            gravity:5
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(255,52,204);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}