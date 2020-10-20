class rope{ 
    constructor(body1,body2, offsetX, offsetY)
    { this.offsetX=offsetX;
    this.offsetY=offsetY;
    var options={ bodyA:body1, bodyB:body2, pointB:{x:this.offsetX, y:this.offsetY}   }

}
display()
{
var pointA = this.rope.bodyA.position
var pointB = this.rope.bodyB.position
strokeWeight(2)
var A1x = pointA.x;
var A1y = pointA.y;
var Bx = pointB.x + this.offsetX;
var By = pointB.y + this.offsetY;
line (A1x, A1y, Bx, By);
}

}


