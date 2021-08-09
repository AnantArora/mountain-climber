class Player {

    constructor(){
        this.body=createSprite(50,50)
        //this.body.addImage(playerImg)
        //this.body.scale=10

    }
    moveRight(){
        this.body.x+=5
    }

    moveLeft(){
        this.body.x-=5
    }
    moveUp(){
        this.body.velocityY=-20
    }
    gravity(){
        this.body.velocityY+=0.7
    }
}