class GameController {

  constructor(ThreeScene, ThreeCamera) {
    this.ThreeScene = ThreeScene; // The scene object from Three.js
    this.ThreeCamera = ThreeCamera; // The camara object from Three.js
    this.player = new Player(this, new Vector3D(0, 2, -23), new Vector3D(0.5, 2, 0.5), "0x00ff00", "", {
        "speed": 20, // Original was 10
        "jumpSpeed": 520,
        "lookSpeed": 15
    });
    this.scenes = [
      {
        "title": "Introduction",
        "objects": [
          //new Block(this, new Vector3D(0, 0, 0), new Vector3D(10000, 0.1, 0.1), 0.9, "0xff0000"), // x axis
          //new Block(this, new Vector3D(0, 0, 0), new Vector3D(0.1, 10000, 0.1), 0.9, "0x00ff00"), // y axis
          //new Block(this, new Vector3D(0, 0, 0), new Vector3D(0.1, 0.1, 10000), 0.9, "0x0000ff"), // z axis
          new Block(this, new Vector3D(0, 0, 0), new Vector3D(8000, 0.5, 8000), 0.9, "0xaaaaaa", "textures/iron_texture.jpg"), //ground
          //walls
          new Block(this, new Vector3D(5, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(-5, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/wood_texture.jpg"),
          //doorway
          new Block(this, new Vector3D(0, 4, 10), new Vector3D(10, 2.5, 0.5), 0, "0x7ec0ee", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(3, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(-3, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 2.6, -10), new Vector3D(10, 5, 0.5), 0, "0x7ec0ee", "textures/wood_texture.jpg"),//wall
          new Block(this, new Vector3D(0, 0.3, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //floor
          new Block(this, new Vector3D(0, 5, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //floor
          new Block(this, new Vector3D(0, 0.4, 6.75), new Vector3D(10, 0.2, 5), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step1
          new Block(this, new Vector3D(0, 0.6, 5.75), new Vector3D(10, 0.2, 3), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step2
          new Block(this, new Vector3D(0, 0.2, 4.25), new Vector3D(6, 2.5, 1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          //bench1
          new Block(this, new Vector3D(0, 0.2, 0-1.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-1.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench2
          new Block(this, new Vector3D(0, 0.2, 0), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench3
          new Block(this, new Vector3D(0, 0.2, 0-3), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-3), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench4
          new Block(this, new Vector3D(0, 0.2, 0-4.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-4.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench5
          new Block(this, new Vector3D(0, 0.2, 0-6), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-6), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench6
          new Block(this, new Vector3D(0, 0.2, 0-7.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-7.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench7
          new Block(this, new Vector3D(0, 0.2, 0-9), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0, 0.6, 0.25-9), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //set outside
          new Block(this, new Vector3D(10, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(-10, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(0, 5, 20), new Vector3D(20, 10, 0.5), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(0, 6.8, -20), new Vector3D(20, 7, 0.5), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(6, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(-6, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(0, 10, 0), new Vector3D(20, 0.2, 40), 0.9, "0x7ec0ee", ""), //sky
          //next set
          new Block(this, new Vector3D(5+40, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(-5+40, 2.6, 0), new Vector3D(0.2, 5, 20), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          //doorway
          new Block(this, new Vector3D(0+40, 4, 10), new Vector3D(10, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(3+40, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(-3+40, 1.5, 10), new Vector3D(4, 2.5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),
          new Block(this, new Vector3D(0+40, 2.6, -10), new Vector3D(10, 5, 0.5), 0, "0x7ec0ee", "textures/iron_texture.jpg"),//wall
          new Block(this, new Vector3D(0+40, 0.3, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //floor
          new Block(this, new Vector3D(0+40, 5, 0), new Vector3D(10, 0.2, 20), 0.9, "0xaaaaaa", "textures/iron_texture.jpg"), //floor
          new Block(this, new Vector3D(0+40, 0.4, 6.75), new Vector3D(10, 0.2, 5), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step1
          new Block(this, new Vector3D(0+40, 0.6, 5.75), new Vector3D(10, 0.2, 3), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //step2
          new Block(this, new Vector3D(0+40, 0.2, 4.25), new Vector3D(6, 2.5, 1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"), //desk
          //bench1
          new Block(this, new Vector3D(0+40, 0.2, 0-1.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-1.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench2
          new Block(this, new Vector3D(0+40, 0.2, 0), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench3
          new Block(this, new Vector3D(0+40, 0.2, 0-3), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-3), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench4
          new Block(this, new Vector3D(0+40, 0.2, 0-4.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-4.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench5
          new Block(this, new Vector3D(0+40, 0.2, 0-6), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-6), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench6
          new Block(this, new Vector3D(0+40, 0.2, 0-7.5), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-7.5), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //bench7
          new Block(this, new Vector3D(0+40, 0.2, 0-9), new Vector3D(6, 2, 0.1), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),
          new Block(this, new Vector3D(0+40, 0.6, 0.25-9), new Vector3D(6, 0.1, 0.4), 0.9, "0xaaaaaa", "textures/wood_texture.jpg"),

          //set outside
          new Block(this, new Vector3D(10+40, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(-10+40, 5, 0), new Vector3D(0.2, 10, 40), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(0+40, 5, 20), new Vector3D(20, 10, 0.5), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(0+40, 6.8, -20), new Vector3D(20, 7, 0.5), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(6+40, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(-6+40, 1.8, -20), new Vector3D(8, 3, 0.5), 0, "0x7ec0ee", ""),
          new Block(this, new Vector3D(0+40, 10, 0), new Vector3D(20, 0.2, 40), 0.9, "0x7ec0ee", ""), //sky
          //new Block(this, new Vector3D(0, 0, 0), new Vector3D(10, 0.1, 5), 0.8, "0xaaaaaa", "textures/wood_texture.jpg", (obj) => { obj.vel.z = 20/2 * Math.cos(performance.now() / 2000 + 3); obj.vel.x = 20/2 * Math.sin(performance.now()/2000 +3); } ),
        ],
        "npcs": [
          this.player,
        ]
      },
      {
        "title": "Nihilism",
        "objects": [
          ],
        "npcs": [
          this.player,
        ]
      }
    ];
    this.sceneNum = 0;

    // Store a clock for physics calculations.
    this.clock = new THREE.Clock();
    this.delta;
  }

  get scene() {
    return this.scenes[this.sceneNum];
  }

  checkCollision(object) {
    var collides = false;
    var npc;
    for (var i in this.scene.npcs) {
      npc = this.scene.npcs[i];
      if (npc !== object) { // Ensure we don't collide the object with itself.
        if (object.collisionBox.collideWith(npc)) {
            collides = true;
        }
      }
    }
    var obj;
    for (var i in this.scene.objects) {
      obj = this.scene.objects[i];
      if (obj !== object) { // Ensure we don't collide the object with itself.
        if (object.collisionBox.collideWith(obj)) {
            collides = true;
        }
      }
    }
    return collides;
  }

  init() {
    var npc;
    for (var i in this.scene.npcs) {
      npc = this.scene.npcs[i];
      if (npc !== this.player) {
          npc.collisionBox.initRender();
      }
    }
    var obj;
    for (var i in this.scene.objects) {
      obj = this.scene.objects[i];
      obj.collisionBox.initRender();
    }
  }

  update() {
    this.delta = this.clock.getDelta();

    var npc;
    for (var i in this.scene.npcs) {
      npc = this.scene.npcs[i];
      npc.update();
    }
    var obj;
    for (var i in this.scene.objects) {
      obj = this.scene.objects[i];
      obj.update();
    }
  }

}
