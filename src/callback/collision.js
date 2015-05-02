define(['phaser', 'data'], function(Phaser, Data) {
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
        Data.coins++;
        state.add.audio('coin_sound').play();
    };
    collision.playerLava = function(player, lava) {
        player.hp = 0;
    };
    return collision;
});