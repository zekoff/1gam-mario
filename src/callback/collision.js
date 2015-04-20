define(['phaser'], function(Phaser) {
    var collision = {};
    collision.playerEnemy = function(player, enemy) {
        if (player.body.touching.down) console.log("killed enemy");
        else console.log("player died");
        enemy.kill();
    };
    return collision;
});