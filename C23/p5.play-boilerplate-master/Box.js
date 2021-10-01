class Box{
    constructor(x,y,widht,height){
        //this.
     var options ={
         restitution: 0.4
     }

        this.body = Bodies.rectangle(x,y,widht,height,options);
       // this.width = width;
        //this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}