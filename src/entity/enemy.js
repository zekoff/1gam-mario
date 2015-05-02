define(['ai/fsm', 'entity/base_entity', 'ai/patrol', 'ai/wander', 'ai/fly'], function(FSM, Entity, Patrol, Wander, Fly) {
    var PATROL_LENGTH = 2;
    var SCALE = 0.4;
    var Enemy = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.ai = new FSM();
        this.ai.setState(new Fly(this.ai));
        this.scale.set(SCALE);
        this.speed = 64;
    };
    Enemy.prototype = Object.create(Entity.prototype);
    Enemy.prototype.constructor = Enemy;
    Enemy.prototype.update = function() {
        if (this.body.velocity.x < 0) this.scale.x = SCALE;
        if (this.body.velocity.x > 0) this.scale.x = -SCALE;

    };
    Enemy.prototype.updateAi = function(state) {
        this.ai.activeState().update(this, state);
    };
    return Enemy;
});