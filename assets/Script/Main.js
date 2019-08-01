cc.Class({
    extends: cc.Component,

    properties: {
        size: cc.size(0, 0),
        faceArr: {
            default: [],
            type: [cc.Sprite]
        },
        width: 0,
        height: 0,
        faceSize: 50
    },

    // use this for initialization
    onLoad: function () {
        var size = cc.view.getFrameSize();
        this.width = size.width || this.node.width;
        this.height = size.height || this.node.height;
        console.log("width:" + this.width + " height:" + this.height);
        cc.director.getPhysicsManager().gravity = cc.v2(0, -640);

        this._init();


        // var self = this;

        //   cc.loader.loadRes("shui", cc.ParticleAsset, (err, resParticleAsset) => {
        //     if (err) {
        //         console.err(err);
        //         return;
        //     }
        //     let particleNode = new cc.Node();
        //     let particleCom = particleNode.addComponent(cc.ParticleSystem);
        //     particleCom.file = resParticleAsset;
        //     // particleCom.custom = true;
        //     //TODO:开启Custom才能自定义粒子效果
        //     particleCom.spriteFrame = this.cocosSpriteFrame;
        //     //添加到场景中
        //     particleNode.parent = self.node;

        //     var rigidBody = particleNode.addComponent(cc.RigidBody);
        //     rigidBody.type = cc.RigidBodyType.Static;

        //     let particleCom = particleNode.addComponent(cc.ParticleSystem);

        // });


    },
    update: function (dt) {
        // this._noDisappear();
        // this._changeFace();
    },


    _init: function () {
        // this._loadStaticFace();
        // this._loadStaticFace();
        // this._loadStaticFace();
        // this._loadStaticFace();
        // this._loadStaticFace();
        // this._loadStaticFace();
        // this._loadStaticFace();
        // this._addShape("face/511","face/511", 0, 0, 150, 50);
        var wupinlan = new cc.Node("wupinlan");
        
        
        this._addShapePrefab(this);
        this._addShapePrefab(this);
        this._addShapePrefab(this);
        this._addShapePrefab(this);

        this._addShuiPrefab(this);

    },

    _addShapePrefab:function(self){
        cc.loader.loadRes("prefab/smShape", function (err, prefab) {
            var newNode = cc.instantiate(prefab);
            newNode.parent = self.node;
        });
    },
    _addShuiPrefab:function(self){
        cc.loader.loadRes("prefab/shui", function (err, prefab) {
            var newNode = cc.instantiate(prefab);
            newNode.parent = self.node;
        });
    },

    // _loadStaticFace:function () {
    //     this._addShape("face/5","face/14", 0, 0, 50, 50);
    // },
    // _changeFace:function () {
    //     for (var i = 0; i < this.faceArr.length; i++) {
    //         var face = this.faceArr[i];
    //         // var rotationX = face.rotation;
    //         // var rotation = Math.abs(rotationX);
    //         // console.log("awake:" + awake);
    //         // if (rotation > 20) {
    //         //     if (face.safe) {
    //         //         this._loadFace(face, "face/14", this.faceSize) 
    //         //     }
    //         //     face.safe = false; 
    //         // } else {
    //         //     if (!face.safe) {
    //         //         this._loadFace(face, "face/5", this.faceSize) 
    //         //     }
    //         //     face.safe = true;
    //         // }
    //         var awake = face.getComponent(cc.RigidBody).awake;
    //         if (awake && face.safe) {
    //             face.safe = false;
    //             this._loadFace(face, face.url2, face.width,face.height)
    //         }
    //         if (!awake && !face.safe) {
    //             face.safe = true;
    //             this._loadFace(face, face.url1, face.width,face.height)
    //         }
    //     }
    // },
    // _loadFace: function (face, url, width,height) {
    //     cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
    //         var sprite = face.getComponent(cc.Sprite);
    //         sprite.spriteFrame = spriteFrame;
    //         face.width = width;
    //         face.height = height;
    //     });
    // },
    // _noDisappear: function () {
    //     for (var i = 0; i < this.faceArr.length; i++) {
    //         var face = this.faceArr[i];
    //         var v2 = face.position;
    //         var left = -(this.width - face.width) / 2;
    //         var right = -left;

    //         if (v2.x < left) {
    //             face.position = cc.v2(left, v2.y);
    //         }
    //         if (v2.x > right) {
    //             face.position = cc.v2(right, v2.y);
    //         }

    //     }
    // },
    // _addShape: function (url1,url2, x, y, width, height) {
    //     var node = new cc.Node("node");
    //     var self = this;
    //     cc.loader.loadRes(url1, cc.SpriteFrame, function (err, spriteFrame) {
    //         var sprite = node.addComponent(cc.Sprite);
    //         sprite.spriteFrame = spriteFrame;
    //         node.width = width;
    //         node.height = height;
    //         node.position = cc.v2(x, y);
    //         node.color = new cc.Color(100, 255, 255);
    //         node.url1 = url1;
    //         node.url2 = url2;


    //         node.parent = self.node;

    //     });

    //     node.safe = true;

    //     var rigidBody = node.addComponent(cc.RigidBody);
    //     rigidBody.type = cc.RigidBodyType.Dynamic;
    //     rigidBody.enabledContactListener = true;

    //     rigidBody.linearVelocity = cc.v2(0, 0);
    //     rigidBody.angularDamping = 0.5;


    //     var collider = node.addComponent(cc.PhysicsBoxCollider);
    //     collider.restitution = 0.7;
    //     collider.size = cc.size(width, height);
    //     collider.density = 20;
    //     collider.friction = 0.5;


    //     // node.opacity = 255;
    //     node.on(cc.Node.EventType.TOUCH_START, function (event) {
    //         cc.log('Drag stated ...');
    //         // this.opacity = 200;
    //         rigidBody.linearVelocity = cc.v2(0, 0);
    //     }, node);
    //     node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
    //         // this.opacity = 200;
    //         rigidBody.linearVelocity = cc.v2(0, 0);
    //         rigidBody.angularVelocity = 0;
    //         var delta = event.touch.getDelta();
    //         this.x += delta.x;
    //         this.y += delta.y;
    //     }, node);
    //     node.on(cc.Node.EventType.TOUCH_END, function () {
    //         // this.opacity = 255;
    //         // this.y -= 1;
    //         rigidBody.linearVelocity = cc.v2(0, 1);
    //     }, node);
    //     this.faceArr.push(node);
    // }

});
