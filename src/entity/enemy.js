define(['phaser', 'entity/fsm'], function(Phaser, FSM) {
    var PATROL_LENGTH = 2;
    var Enemy = function(game, x, y, key, frame) {
        Phaser.Sprite.apply(this, arguments);
        game.physics.arcade.enable(this);
        this.tint = 0xFF0000;
        this.body.collideWorldBounds = true;
        this.ai = new FSM();
        this.scale.y = 2;
        this.patrolCount = Math.random() * PATROL_LENGTH;
        this.patrolDirection = Math.random() > 0.5 ? 1 : -1;
        this.speed = 64;
    };
    Enemy.prototype = Object.create(Phaser.Sprite.prototype);
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