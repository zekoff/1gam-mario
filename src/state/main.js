define(function(require) {
    var Collision = require('callback/collision');
    var Input = require('callback/input');
    var createLevel = require('state/create_level');
    var createHud = require('state/create_hud');

    var state = {};
    var level;
    var hud;
    state.create = function() {
        level = createLevel(state, 1);
        hud = createHud(state);
        Collision.init(state);
    };
    state.update = function() {
        state.physics.arcade.collide(level.player, level.collisionLayer);
        state.physics.arcade.collide(level.enemyGroup, level.collisionLayer);
        state.physics.arcade.overlap(level.player, level.coinGroup, Collision.playerCoin);
        state.physics.arcade.overlap(level.player, level.enemyGroup, Collision.playerEnemy);
        level.enemyGroup.callAll('updateAi', null, state);
        Input.handle(level.player);
        hud.update(level.player);

        if (level.player.hp < 1) {
            state.camera.reset();
            state.game.state.restart();
        }
    };
    state.render = function() {
        state.time.advancedTiming = true;
        state.game.debug.text("FPS: " + state.time.fps, 20, 20, "#FFF");
    };
    return state;
});