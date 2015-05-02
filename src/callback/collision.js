define(['phaser'], function(Phaser) {
    var collision = {};
    var state;
    var lastTimeHit = 0; // ms
    collision.init = function(s) {
        state = s;
    };
    collision.playerEnemy = function(player, enemy) {
        if (player.body.touching.down && enemy.key != 'barnacle') {
            player.bounce();
            state.add.audio('stomp_sound').play();
            enemy.kill();
        }
        else if (state.time.now - lastTimeHit > 400) {
            lastTimeHit = state.time.now;
            player.hit();
            state.add.audio('hit_sound').play();
        }
    };
    collision.playerCoin = function(player, coin) {
        coin.kill();
        player.coins++;
        state.add.audio('coin_sound').play();
    };
    return collision;
});