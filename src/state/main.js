define(function(require) {
    var Collision = require('callback/collision');
    var Input = require('callback/input');
    var Data = require('data');
    var createLevel = require('state/create_level');
    var createHud = require('state/create_hud');
    var Config = require('config');
    var WinState = require('state/win');

    var state = {};
    var level;
    var hud;
    state.create = function() {
        level = createLevel(state, Data.currentLevel);
        hud = createHud(state);
        Collision.init(state);
    };
    state.update = function() {
        state.physics.arcade.collide(level.player, level.collisionLayer);
        state.physics.arcade.collide(level.enemyGroup, level.collisionLayer);
        state.physics.arcade.overlap(level.player, level.coinGroup,
            Collision.playerCoin);
        state.physics.arcade.overlap(level.player, level.enemyGroup,
            Collision.playerEnemy);
        state.physics.arcade.overlap(level.player, level.lavaGroup,
            Collision.playerLava);
        state.physics.arcade.overlap(level.player, level.exitGroup, function() {
            level.music.stop();
            state.game.state.remove('main');
            if (++Data.currentLevel > Config.numLevels)
                state.game.state.add('final', WinState, true);
            else
                state.game.state.start('level_intro');
        });
        level.enemyGroup.callAll('updateAi', null, state);
        Input.handle(level.player);
        hud.update(level.player);

        if (level.player.hp < 1 && level.player.alive) {
            level.music.stop();
            level.player.kill();
            Data.died++;
            var loseSound = state.add.audio('lose_sound');
            loseSound.play();
            loseSound.onStop.add(function() {
                state.camera.reset();
                state.game.state.restart();
            });
        }
    };
    state.render = function() {
        state.time.advancedTiming = true;
        state.game.debug.text("FPS: " + state.time.fps, 20, 20, "#FFF");
    };
    return state;
});