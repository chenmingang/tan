cc.Class({
    extends: cc.Component,

    properties: {
        speed: cc.v2(0,0)   
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var size = cc.view.getFrameSize();
        this.width = size.width || this.node.width;
        this.height = size.height || this.node.height;
        console.log("width:" + this.width + " height:" + this.height);

        this.node.url1 = "face/5";
        this.node.url2 = "face/14";

        console.log("shape 加载");
        var rigidBody = this.node.getComponent(cc.RigidBody);

        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log('Drag stated ...');
            // this.opacity = 200;
            rigidBody.linearVelocity = cc.v2(0, 0);
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            // this.opacity = 200;
            rigidBody.linearVelocity = cc.v2(0, 0);
            rigidBody.angularVelocity = 0;
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            // this.opacity = 255;
            // this.y -= 1;
            rigidBody.linearVelocity = cc.v2(0, 1);
        }, this.node);
	},
    update(dt) {
        

        var v2 = this.node.position;
        var left = -(this.width - this.node.width) / 2;
        var right = -left;

        if (v2.x < left) {
            this.node.position = cc.v2(left, v2.y);
        }
        if (v2.x > right) {
            this.node.position = cc.v2(right, v2.y);
        }


        var awake = this.node.getComponent(cc.RigidBody).awake;

        if (awake && this.node.safe) {
            this.node.safe = false;
            this._loadFace(this.node, this.node.url2, this.node.width,this.node.height)
        }
        if (!awake && !this.node.safe) {
            this.node.safe = true;
            this._loadFace(this.node, this.node.url1, this.node.width,this.node.height)
        }

    },
    _loadFace: function (face, url, width,height) {
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
            var sprite = face.getComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame;
            face.width = width;
            face.height = height;
        });
    },
    onDestroy() {
      

    },
    // other是道具的碰撞器组件
    // self 是自己节点的碰撞器组件 
    // 碰撞器是一个组件，所以我们可以通过组件 -->节点
    // 碰撞开始
    onCollisionEnter: function (other, self) {
        console.log("形状碰撞");

        console.log("other.name = ", other.node.name, other.node.group, other.node.groupIndex);
        // if (other.node.groupIndex === 2) { // 与道具相撞
            // var prop = other.node.getComponent("prop");
            // console.log("我们捡到了道具:", prop.prop_type);
        // }
    },
    // 碰撞持续
    onCollisionStay: function (other, self) {
        // console.log("水流碰撞");

    },
    // end 

    // 碰撞结束
    onCollisionExit: function (other, self) {

    },
});