define(['phaser'], function(Phaser) {
    var collision = {};
    var state;
    collision.init = function(s) {
        state = s;
    };
    collision.playerEnemy = function(player, enemy) {
        if (player.body.touching.down) {
            console.log("killed enemy");
            player.bounce();
            state.add.audio('stomp_sound').play();
        }
        else console.log("player died");
        enemy.kill();
    };
    collision.playerCoin = function(player, coin) {
        coin.kill();
        state.add.audio('coin_sound').play();
    };
    return collision;
});