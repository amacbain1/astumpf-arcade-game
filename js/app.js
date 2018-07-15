class Populate {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.sprite = '';

  }
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

//Player
class Player extends Populate {
  constructor(){
    super();
    this.x = 205;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
    this.sideways = 101;
    this.upDown = 83;
  }

  handleInput(input) {
    switch(input){
      case 'left':
        if (this.x >= this.sideways){
          this.x -= this.sideways;
        }
      break;
      case 'right':
        if (this.x <= this.sideways * 4){
          this.x += this.sideways;
        }
      break;
      case 'up':
        if (this.y >=  0){
          this.y -= this.upDown;
        }
      break;
      case 'down':
        if (this.y <=  this.upDown * 4){
          this.y += this.upDown;
        }
      break;
    }
  }
}
const player = new Player();
const allEnemies = [];

class Enemy extends Populate{
  constructor(x, y){
    super();
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
  }

}
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();

allEnemies.push('enemy1', 'enemy2', 'enemy3');

/*var Enemy = function() {
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
};*/



Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};



/*Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};*/



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
