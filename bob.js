class bob {
    constructor( x,y,radius ){
        var options  = {
            isStatic : true,
            restitution : 1,
            friction:0,
            density:7.8,
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        
 
        World.add(world,this.body)
        console.log(this.body)
    }
      display(){
          
        
          push()
        
          
             ellipseMode(RADIUS)
             fill ("blue")
             ellipse(this.body.position.x,this.body.position.y,25,25)
             pop ();
      }
 
 
 };