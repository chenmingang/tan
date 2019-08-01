// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {
        console.log("水流加载");
    },

    update (dt) {

    },
    // other是道具的碰撞器组件
    // self 是自己节点的碰撞器组件 
    // 碰撞器是一个组件，所以我们可以通过组件 -->节点
    // 碰撞开始
    onCollisionEnter: function (other, self) {
                console.log("水流碰撞");

        console.log("other.name = ", other.node.name, other.node.group, other.node.groupIndex);
        if (other.node.groupIndex === 0) { // 与道具相撞
            this.node.destroy();
        }
    },
    // 碰撞持续
    onCollisionStay: function (other, self) {
        console.log("水流碰撞");

    },
    // end 

    // 碰撞结束
    onCollisionExit: function (other, self) {

    },
});
