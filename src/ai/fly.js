define(['phaser'], function(Phaser) {
    var Fly = function(ai) {
        this.ai = ai;
        if (!this.flyHeight) this.flyHeight = 32 * 3;
        if (!this.period) this.period = 2000;
        this.periodCount = 0;
    };
    Fly.prototype.update = function(entity, state) {
        if (!this.tween) {
            this.tween = state.tweens.create(entity);
            this.tween.to({
                y: entity.y - this.flyHeight
            }, this.period, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        }
        this.periodCount += state.time.physicsElapsed;
        entity.body.reset(entity.body.x, entity.body.y);
    };
    return Fly;
});