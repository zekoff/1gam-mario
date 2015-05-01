define(['ai/fsm', 'entity/base_entity', 'ai/patrol','ai/wander'], function(FSM, Entity, Patrol, Wander) {
    var PATROL_LENGTH = 2;
    var Enemy = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.tint = 0xFF0000;
        this.ai = new FSM();
        this.ai.setState(new Wander(this.ai));
        this.scale.y = 2;
        this.speed = 64;
    };
    Enemy.prototype = Object.create(Entity.prototype);
    Enemy.prototype.constructor = Enemy;
    Enemy.prototype.updateAi = function(state) {
        this.ai.activeState().update(this);
    };
    return Enemy;
});