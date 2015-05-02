define([], function() {
    return function(state) {
        var hudData = {};
        var hudGroup = state.add.group();
        hudGroup.fixedToCamera = true;
        var lives = [];
        var i;
        for (i = 0; i < 3; i++) {
            var lifeIcon = state.make.image(i * 40 + 20, 16, 'heart');
            lifeIcon.scale.set(0.25);
            lives.push(lifeIcon);
            hudGroup.add(lifeIcon);
        }
        var coinIcon = state.make.image(750, 20, 'coin', 0);
        hudGroup.add(coinIcon);
        var coinText;
        coinText = state.make.text(720, 20, "", {
            font: '18pt sans',
            fill: 'white'
        });
        hudGroup.add(coinText);
        hudData.update = function(player) {
            coinText.setText(player.coins);
            lives.forEach(function(e) {
                e.visible = false;
            });
            for (i = 0; i < player.hp; i++)
                lives[i].visible = true;
        };
        return hudData;
    };
});