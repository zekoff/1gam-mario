define(['phaser'], function(Phaser) {
    var collision = {};
    var state;
    collision.init = function(s) {
        state = s;
    };
    collision.playerEnemy = function(player, enemy) {
        if (player.body.touching.down) {
            player.bounce();
            state.add.audio('stomp_sound').play();
        }
        else {
            player.hit();
            state.add.audio('stomp_sound').play();
        }
        enemy.kill();
    };
    collision.playerCoin = function(player, coin) {
        coin.kill();
        player.coins++;
        state.add.audio('coin_sound').play();
    };
    return collision;
});