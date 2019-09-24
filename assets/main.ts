const {ccclass, property} = cc._decorator;
var result:number;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label;

    @property(cc.Button)
    Button: cc.Button = null;

    @property(cc.Prefab)
    private redball: cc.Prefab = null;

    @property(cc.Prefab)
    private blueball: cc.Prefab = null;

    private ball: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }

    private onButtonClick () {
        this.label.string = "Harlo"
      
        if(this.ball){
            this.ball.destroy;
        } 

        const result = this.getRandomInt();
        if (result <= 30) {
            this.ball = cc.instantiate(this.redball);
        } else {
            this.ball = cc.instantiate(this.blueball);
        }
    this.ball.parent = this.node.parent;    
    }

    private getRandomInt(min=0, max=100): number {  
        var Range = max - min;  
        var Rand = Math.random();  
        return( result =min + Math.round(Rand * Range));  
    }

  
    // update (dt) {}
}
    