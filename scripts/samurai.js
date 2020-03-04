var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 800,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/orangesky.png');
    this.load.spritesheet('sun', 'assets/samurai/sun_sprite.png', { frameWidth: 183, frameHeight: 180 });
    this.load.image('path', 'assets/path2.png');
    this.load.spritesheet('walk', 'assets/samurai/walk_sprite.png', { frameWidth: 124, frameHeight: 249 });
    this.load.image('stand', 'assets/samurai/stand_0.png');
    this.load.spritesheet('look_down', 'assets/samurai/lookdown_sprite.png', { frameWidth: 124, frameHeight: 249 });
    this.load.spritesheet('look_up', 'assets/samurai/stop_lookup_sprite.png', { frameWidth: 124, frameHeight: 249 });
}

function create ()
{

    var samurai_animation = {
        key: 'start_walking',
        frames: this.anims.generateFrameNumbers('walk', { start: 0, end: 11, first: 11 }),
        frameRate: 7,
        repeat: -1
    };

    var samurai_lookdown = {
        key: 'looking_down',
        frames: this.anims.generateFrameNumbers('walk', { start: 0, end: 4, first: 4 }),
        frameRate: 2,
        repeat: 1
    };

    var samurai_lookup = {
        key: 'stop_n_look_up',
        frames: this.anims.generateFrameNumbers('walk', { start: 0, end: 6, first: 6 }),
        frameRate: 2,
        repeat: 1
    };

    var sun_animation = {
        key: 'sun',
        frames: this.anims.generateFrameNumbers('sun', { start: 0, end: 3, first: 3 }),
        frameRate: 2,
        repeat: -1
    };

    this.cameras.main.fadeIn(10000);
    this.anims.create(samurai_animation);
    this.anims.create(sun_animation);

    this.add.image(config.width/2, config.height/2, 'sky');
    this.﻿background_path = this.add.tileSprite(800, 700, 1600, 250, 'path');

    var sun = this.add.sprite(400, 400, 'sun');
    var walk = this.add.sprite(config.width/2, config.height/1.5, 'walk');

    sun.anims.play('sun');

    walk.anims.play('start_walking');

}

function update ()
{
    this.background_path.tilePositionX -= 0.3;
}
