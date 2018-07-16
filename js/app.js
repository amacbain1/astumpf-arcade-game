//Parent object for sprites
class Populate {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.sprite = '';
    this.sideways = 101;
    this.upDown = 83;

  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

//Player class
class Player extends Populate {
  constructor(){
    super();
    this.x = 205;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
  }
//key input for Player
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
//Array to hold Enemy objects
const allEnemies = [];
//Enemy class
class Enemy extends Populate{
  constructor(x, y, speed){
    super();
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  }
  //Smooth movement of Enemy objects across gameboard
  update(dt) {
    if(this.x < this.sideways * 5){
        this.x += this.speed * dt;
    }
    else{
      this.x = -100;
    }
  }
}
const enemy1 = new Enemy(101, 83, 150);
const enemy2 = new Enemy(404, 166, 100);
const enemy3 = new Enemy(0, 249, 300);

allEnemies.push(enemy1, enemy2, enemy3);







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
