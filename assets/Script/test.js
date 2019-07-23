// cc.Class({
//     extends: cc.Component,

//     properties: {
//         speed: cc.v2(0,0)   
//     },

//     // LIFE-CYCLE CALLBACKS:

//     onLoad() {
//          // open Accelerometer
//         // cc.systemEvent.setAccelerometerEnabled(true);
//         // cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);

//         this.node.opacity = 160;
//         this.node.on(cc.Node.EventType.TOUCH_START, function () {
//             cc.log('Drag stated ...');
//             this.opacity = 255;
//         }, this.node);
//         this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
//             this.opacity = 255;
//             var delta = event.touch.getDelta();
//             this.x += delta.x;
//             this.y += delta.y;
//             if (this.getComponent(TouchDragger).propagate)
//                 event.stopPropagation();
//         }, this.node);
//         this.node.on(cc.Node.EventType.TOUCH_END, function () {
//             this.opacity = 160;
//         }, this.node);
//     },
//     onDeviceMotionEvent(event) { 
//         //log event
//         //console.log("event,x,y",event.acc.x,event.acc.y)
//         this.speed.x = event.acc.x;
//         this.speed.y = event.acc.y;

//     },
//     update(dt) {
//         let rightBody = this.node.getComponent(cc.RigidBody)
//         rightBody.linearVelocity = cc.v2(rightBody.linearVelocity.x + dt * this.speed.x*100, rightBody.linearVelocity.y + dt * this.speed.y*1000)
//         //获取刚体速度
//         console.log("after",rightBody.linearVelocity)
        
//     },
//     onDestroy() {
//         //remove listener
//         cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
//         cc.systemEvent.setAccelerometerEnabled(false);

//     }
// });