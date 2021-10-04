class Target{
    constructer(x,y){
        var options = {
            isStatic: false,
            restitution:1,
            friction:2,
            density:4,
            }
            this.body = Bodies.circle(x,y,25,options);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
        }
}