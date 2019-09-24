const {ccclass, property} = cc._decorator;
var a:number;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label;

    @property(cc.Button)
    Button: cc.Button = null;

    @property(cc.Sprite)
    redball: cc.Sprite = null;

    @property(cc.Sprite)
    blueball: cc.Sprite = null;

    @property(cc.Sprite)
    result: cc.Sprite;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }

    onButtonClick () {
        this.label.string = "Harlo"
      
        function getRandomInt(min: 0, max: 100): number {  
            var Range = max - min;  
            var Rand = Math.random();  
            return(a=min + Math.round(Rand * Range));  
        }
        if (a<=30) {
            this.result = this.redball
        } else {
            this.result = this.blueball
        }
        
    }
    // update (dt) {}
}
    