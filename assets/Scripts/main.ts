const {ccclass, property} = cc._decorator;
let result:number;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Label)
    private label: cc.Label;

    @property(cc.Button)
    private buttonNode: cc.Button = null;

    @property(cc.Prefab)
    private redBallPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    private greenBallPrefab: cc.Prefab = null;

    @property(cc.Node)
    private ballNode: cc.Node = null;

    @property(cc.Vec2)
    private position: cc.Vec2 = new cc.Vec2(0,0);
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    protected start () {
    }

    private getPosition() {
        let positionX = 0;  
        let positionY = 0; 
        const maxX = this.node.parent.width;
        const maxY = this.node.parent.height;
        const startingPositionX = -(this.node.parent.width/2);
        const startingPositionY = -(this.node.parent.height/2);

        positionX  = startingPositionX + Math.random()*maxX;
        positionY  = startingPositionY + Math.random()*maxY;

        return new cc.Vec2( positionX, positionY );  
    }

    private onButtonClick () {

        const { label, ballNode, redBallPrefab, greenBallPrefab } = this;

        label.string = "What did you get?"

        if (ballNode) {
            ballNode.destroy();
        } 

        const result = this.getRandomInt();
        const position = this.getPosition();

        if (result < 40) {
            this.ballNode= cc.instantiate(redBallPrefab);
        } else{
            this.ballNode = cc.instantiate(greenBallPrefab );
        }

        this.ballNode.parent = this.node.parent;   
        this.ballNode.setPosition(position);
    }

    private getRandomInt(min=0, max=100): number {  
        let Range = max - min;  
        let Rand = Math.random();  
        const result =min + Math.round(Rand * Range);
        return result; 
    }

    // update (dt) {}

    private oncallback(){
        this.label.string = "Get Start!";
        if(this.ballNode){
            this.ballNode.destroy();
        }    
}
}