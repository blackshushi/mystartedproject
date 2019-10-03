const {ccclass, property} = cc._decorator;

@ccclass
export default class BallMovingScipt extends cc.Component {

    @property
    private defaultSpeed: number = 100;
    
    @property
    private bounceSpeed: number = 100 ;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    protected start () {
    }

    protected update (dt) {

            this.node.setPosition( this.node.position.x += this.defaultSpeed * dt , this.node.position.y += this.defaultSpeed * dt);

            if(this.node.position.x > this.node.parent.width/2 - this.node.width/2){ //out of screen(right side)
                
                this.node.setPosition( this.node.position.x -= this.defaultSpeed * dt, this.node.position.y += this.defaultSpeed * dt) //let the ball keep going up but at the same time going left now( couldn't work)
                
            }
            

    }
   
//another direction like going down and left should be same as above but this couldn't work so else also can't.
}
