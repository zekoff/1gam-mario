define(function(require) {
    var FSM = require('ai/fsm');
    var Entity = require('entity/base_entity');
    var Patrol = require('ai/patrol');
    var Wander = require('ai/wander');
    var Fly = require('ai/fly');

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