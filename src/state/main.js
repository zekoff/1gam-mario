define(function(require) {
    var Collision = require('callback/collision');
    var Input = require('callback/input');
    var createLevel = require('state/create_level');

    var state = {};
    var level;
    state.create = function() {
        level = createLevel(state, 1);
        Collision.init(state);
    };
    state.update = function() {
        state.physics.arcade.collide(level.player, level.collisionLayer);
        state.physics.arcade.collide(level.enemyGroup, level.collisionLayer);
        state.physics.arcade.overlap(level.player, level.coinGroup, Collision.playerCoin);
        state.physics.arcade.overlap(level.player, level.enemyGroup, Collision.playerEnemy);
        level.enemyGroup.callAll('updateAi', null, state);
        Input.handle(level.player);
    };
    state.render = function() {
        state.time.advancedTiming = true;
        state.game.debug.text("FPS: " + state.time.fps, 20, 20, "#FFF");
    };
    return state;
});