const {ccclass, property} = cc._decorator;

@ccclass
export default class BallMovingScipt extends cc.Component {

    @property
    private defaultSpeed: number = 100;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    protected start () {
    }

    protected update (dt) {

        this.node.setPosition(this.node.position.x -= this.defaultSpeed * dt, this.node.position.y += this.defaultSpeed * dt);
    
}
     
    }
