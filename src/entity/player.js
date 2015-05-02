define(['entity/base_entity', 'config', 'phaser'], function(Entity, Config, Phaser) {
    var time;
    var SCALE = 0.25;
    var Player = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.scale.set(SCALE);
        this.speed = 220;
        this.jumpPower = 400;
        this.jumping = false;
        this.jumpTimer = 0;
        this.animations.add('player');
        this.animations.play('player', 5, true);
        this.hp = 3;
        this.coins = 0;
        time = game.time;
    };
    Player.prototype = Object.create(Entity.prototype);
    Player.prototype.constructor = Player;
    Player.prototype.getJumpHeightInTiles = function() {
        return Math.pow(this.jumpPower, 2) / (2 * Config.gravity) / 32;
    };
    Player.prototype.update = function() {
        if (this.moveInput === Phaser.LEFT) {
            this.animations.play('player', 5, true);
            this.body.velocity.x -= time.physicsElapsed * 1200;
            if (this.body.velocity.x < -this.speed)
                this.body.velocity.x = -this.speed;
        }
        else if (this.moveInput === Phaser.RIGHT) {
            this.animations.play('player', 5, true);
            this.body.velocity.x += time.physicsElapsed * 1200;
            if (this.body.velocity.x > this.speed)
                this.body.velocity.x = this.speed;
        }
        else {
            var dampingRate = time.physicsElapsed * 6;
            this.body.velocity.x *= 1 - dampingRate;
            if (Math.abs(this.body.velocity.x) < this.speed * 0.1) {
                this.body.velocity.x = 0;
                this.animations.stop('player');
            }
        }
        if (this.moveInput === Phaser.RIGHT) this.scale.x = SCALE;
        if (this.moveInput === Phaser.LEFT) this.scale.x = -SCALE;
        if (this.body.blocked.up) this.jumping = false;
        if (this.jumping && this.jumpTimer < 0.2) {
            this.jumpTimer += time.physicsElapsed;
            this.body.velocity.y = -this.jumpPower;
        }
    };
    Player.prototype.jumpPressed = function() {
        if (this.body.onFloor()) {
            this.body.velocity.y = -this.jumpPower;
            this.jumping = true;
            this.jumpTimer = 0;
        }
    };
    Player.prototype.jumpReleased = function() {
        this.jumping = false;
    };
    Player.prototype.bounce = function() {
        this.body.velocity.y = -this.jumpPower;
    };
    Player.prototype.hit = function() {
        this.hp--;
        this.jumping = false;
        var bumpDirection = Math.random() > 0.5 ? 1 : -1;
        if (this.body.touching.left) bumpDirection = 1;
        if (this.body.touching.right) bumpDirection = -1;
        var verticalDirection = 1;
        if (this.body.touching.up) verticalDirection = -1;
        this.body.velocity.x = 600 * bumpDirection;
        this.body.velocity.y = -300 * verticalDirection;
    };
    return Player;
});