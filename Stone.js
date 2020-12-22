class Stone{

    constructor(x,y,width,height){
    var op = {
        isStatic:false,
        restitution:0,
        friction:0.5,
        density:1.2
    }

    
        this.body = Bodies.rectangle(x,y,width,height)
    this.width = width;
  this.height = height;
    this.image = loadImage("stone.png");
    World.add(world,this.body);
    }

    
    
    display(){
    
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        rect (pos.x,pos.y,this.width,this.height)   
        fill ("white");
        imageMode (CENTER);
        image(this.image,0,0,this.r,this.r);
        pop ();
    }
    }