/*Attributions:
    Rodrick Bloomfield's Zoom video and walkthrough
    Matthew Cranford's Blogs
*/


//Parent object for sprites
class Populate {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.sprite = '';
    this.sideways = 101;
    this.upDown = 83;
    this.winAStar = false;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset(){
    this.x = 0;
    this.y = 415;
  }
}


//Player class
class Player extends Populate {
  constructor(){
    super();
    this.x = 0;
    this.y = 415;
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
        if (this.x <= this.sideways * 3){
          this.x += this.sideways;
        }
      break;
      case 'up':
        if (this.y >=  83){
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
  //updates player and sets condition for collision & win
  update(){
    for(let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x + enemy.sideways/2 > this.x && enemy.x < this.x + this.sideways/2)){
        this.reset();
      }
    }
    if (winner.y === player.y && winner.x === player.x){
      this.winAStar = true;
    }
    if(this.winAStar === true){
      winner.x = -101;
      winner.y = 0;
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
    this.enemySprite = this.sprite;
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
const enemy2 = new Enemy(404, 166, 350);
const enemy3 = new Enemy(0, 249, 375);
const enemy4 = new Enemy(0, 83, 100)

allEnemies.push(enemy1, enemy2, enemy3, enemy4);

//Trophy for game win
class Winner extends Populate{
  constructor(x, y){
    super();
    this.sprite = 'images/Star.png';
    this.x = x;
    this.y = y;
  }

  reset(){
    this.x = 202;
    this.y = 0;
  }
}
const winner = new Winner(202, 0);

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
