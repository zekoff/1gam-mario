define(function(require) {
    var FSM = require('ai/fsm');
    var Entity = require('entity/base_entity');
    var Patrol = require('ai/patrol');
    var Wander = require('ai/wander');
    var Fly = require('ai/fly');
    var NoOp = require('ai/noop');

    var PATROL_LENGTH = 2;
    var SCALE = 0.4;
    var Enemy = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.ai = new FSM();
        this.scale.set(SCALE);
        this.speed = 64;
        switch (key) {
            case 'slime':
                this.ai.setState(new Wander(this.ai));
                break;
            case 'bee':
                this.ai.setState(new Fly(this.ai));
                break;
            case 'frog':
                this.speed /= 2;
                this.ai.setState(new Patrol(this.ai));
                break;
            case 'barnacle':
                this.animations.add('barnacle');
                this.animations.play('barnacle', 3, true);
                this.ai.setState(new NoOp(this.ai));
                break;
        }
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