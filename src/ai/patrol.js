define(['ai/hop'], function(Hop) {
    var PATROL_LENGTH = 2;
    var Patrol = function(ai) {
        this.patrolCount = Math.random() * PATROL_LENGTH;
        this.patrolDirection = Math.random() > 0.5 ? 1 : -1;
        this.ai = ai;
    };
    Patrol.prototype.update = function(entity, state) {
        entity.body.velocity.x = 0;
        entity.body.velocity.x = entity.speed * this.patrolDirection;
        if ((this.patrolCount += state.time.physicsElapsed) > PATROL_LENGTH) {
            this.patrolCount = 0;
            this.patrolDirection *= -1;
            this.ai.setState(new Hop(this.ai));
        }
    };
    return Patrol;
});