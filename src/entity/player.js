define(['entity/base_entity', 'config', 'phaser'], function(Entity, Config, Phaser) {
    var time;
    var Player = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.scale.y = 1.5;
        this.speed = 200;
        this.jumpPower = 600;
        time = game.time;
    };
    Player.prototype = Object.create(Entity.prototype);
    Player.prototype.constructor = Player;
    Player.prototype.getJumpHeightInTiles = function() {
        return Math.pow(this.jumpPower, 2) / (2 * Config.gravity) / 32;
    };
    Player.prototype.update = function() {
        // move input control/callbacks to this module
        if (this.moveInput) {
            this.body.velocity.x = 0;
            this.body.velocity.x = this.moveInput == Phaser.LEFT ? -this.speed : this.speed;
        }
        else {
            // apply damping
            var dampingRate = time.physicsElapsed * 6;
            this.body.velocity.x *= 1 - dampingRate;
            if (Math.abs(this.body.velocity.x) < this.speed * 0.1) this.body.velocity.x = 0;
        }
        if (this.body.velocity.x > 0) this.scale.x = 1;
        if (this.body.velocity.x < 0) this.scale.x = -1;
    };
    return Player;
});