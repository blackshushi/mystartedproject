const {ccclass, property} = cc._decorator;
var result:number;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label;

    @property(cc.Button)
    Button: cc.Button = null;

    @property(cc.Prefab)
    private redballprefab: cc.Prefab = null;

    @property(cc.Prefab)
    private greenballprefab: cc.Prefab = null;

    @property(cc.Node)
    private ball: cc.Node = null;

    @property(cc.Vec2)
    private Position:cc.Vec2 = cc.v2()
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }

    private getPosition() {
        var PositionX = 0;  
        var PositionY = 0;  
        var maxX = this.node.parent.width;
        var maxY = this.node.parent.height;
        PositionX  = -320+Math.random()*maxX;
        PositionY  = -480+Math.random()*maxY;
        return cc.v2(PositionX,PositionY);  
    }

    private onButtonClick () {
        this.label.string = "What did you get?"

        if (this.ball) {
            this.ball.destroy();
        } 

        const result = this.getRandomInt();
        const Position = this.getPosition();

        if (result <= 30) {
            this.ball = cc.instantiate(this.redballprefab);
        } else {
            this.ball = cc.instantiate(this.greenballprefab);
        }  

    this.ball.parent = this.node.parent;   
    this.ball.setPosition(Position);
    }

    private getRandomInt(min=0, max=100): number {  
        var Range = max - min;  
        var Rand = Math.random();  
        return( result =min + Math.round(Rand * Range));  
    }

    // update (dt) {}

    private oncallback(){
        this.label.string = "Get Start!";
        if(this.ball){
            this.ball.destroy();
        }    
}
}