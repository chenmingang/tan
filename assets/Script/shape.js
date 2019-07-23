cc.Class({
    extends: cc.Component,

    properties: {
        speed: cc.v2(0,0)   
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var self = this;
        var url = "face/2.png";
        this.width = 100;
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
         var node = new cc.Node("node");
         var sprite = node.addComponent(cc.Sprite);

         sprite.spriteFrame = spriteFrame;

         node.parent = self.node
         node.width = 100;
         node.height = 100;
         node.color = new cc.Color(100, 255, 255);

        });

        this.node.opacity = 255;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log('Drag stated ...');
            this.opacity = 200;
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.opacity = 200;
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.opacity = 255;
            this.y += 3;
        }, this.node);
	},
    update(dt) {
        

    },
    onDestroy() {
      

    }
});