class Platform{

    constructor(x){
        this.y=height-random([200,400,600,0])
        this.width=150
        this.body=createSprite(x ,this.y , this.width, 20)
this.body.addImage(platformImg)
this.body.scale=0.5

    }

}