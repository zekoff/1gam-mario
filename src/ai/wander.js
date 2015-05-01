define([], function() {
    var Wander = function(ai) {
        this.ai = ai;
        this.patrolDirection = Math.random() > 0.5 ? 1 : -1;
    };
    Wander.prototype.update = function(entity) {
        entity.body.velocity.x = entity.speed * this.patrolDirection;
        if (entity.body.blocked.left && this.patrolDirection === -1)
            this.patrolDirection *= -1;
        if (entity.body.blocked.right && this.patrolDirection === 1)
            this.patrolDirection *= -1;
    };
    return Wander;
});