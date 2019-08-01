cc.game.on(cc.game.EVENT_ENGINE_INITED, () => {
    let physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;
    cc.director.enabledDrawBoundingBox = false;
    physicsManager.debugDrawFlags = 0;
    var manager = cc.director.getCollisionManager();
	manager.enabled = true;
manager.enabledDebugDraw = true;
manager.enabledDrawBoundingBox = true;

        // cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit
        // ;
});

