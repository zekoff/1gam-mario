define(['entity/fsm', 'entity/base_entity'], function(FSM, Entity) {
    var PATROL_LENGTH = 2;
    var Enemy = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.tint = 0xFF0000;
        this.ai = new FSM();
        this.scale.y = 2;
        this.patrolCount = Math.random() * PATROL_LENGTH;
        this.patrolDirection = Math.random() > 0.5 ? 1 : -1;
        this.speed = 64;
    };
    Enemy.prototype = Object.create(Entity.prototype);
    Enemy.prototype.constructor = Enemy;
    Enemy.prototype.updateAi = function(state) {
        this.body.velocity.x = 0;
        this.body.velocity.x = this.speed * this.patrolDirection;
        if ((this.patrolCount += state.time.physicsElapsed) > PATROL_LENGTH) {
            this.patrolCount = 0;
            this.patrolDirection *= -1;
        }
    };
    return Enemy;
});