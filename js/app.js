//Parent object for sprites
class Populate {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.sprite = '';
    this.sideways = 101;
    this.upDown = 83;
    this.win = false;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset(){
    this.x = 202;
    this.y = 415;
  }

//check for collision-code provided by R. Bloomfield
/*  checkCollisions(){
    if(player.y === allEnemies.y){
      if(player.x >= allEnemies.x - 0.5 && player.x <= allEnemies.x + 0.5){
        return true;
      }
    }
    else{
      return false;
    }
    console.log('collide');
  }*/
}

//Player class
class Player extends Populate {
  constructor(){
    super();
    this.x = 202;
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
        if (this.x <= this.sideways * 4){
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
  update(){

    for(let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x + enemy.sideways/2 > this.x && enemy.x < this.x + this.sideways/2)){
        //console.log('collide');
        this.reset();
      }
    }
    if (winner.y === player.y && winner.x === player.x){
      this.win = true;
      console.log(winner.x, player.x);
    }
  }

  }
  //check for collision-code provided by R. Bloomfield
    /*checkCollisions(){

        if(player.y === enemySprite.y && player.x >= enemySprite.x - 0.5 && player.x <= enemySprite.x + 0.5){
              player.x = 205;
              player.y = 400;

        }

      console.log('collide');
    }*/

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
  //check for collision-code provided by R. Bloomfield
/*    checkCollisions(enemy){
        if(player.y === enemy.y && player.x >= enemy.x - 0.5 && player.x <= enemy.x + 0.5){
            player.x = 205;
            player.y = 400;

        }

      //console.log('collide');
    } */
}
const enemy1 = new Enemy(101, 83, 150);
const enemy2 = new Enemy(404, 166, 350);
const enemy3 = new Enemy(0, 249, 300);
const enemy4 = new Enemy(0, 83, 100)

allEnemies.push(enemy1, enemy2, enemy3, enemy4);


class Winner extends Populate{
  constructor(x, y){
    super();
    this.sprite = 'images/Star.png';
    this.x = x;
    this.y = y;
  }
  star(win){
    if(player.win === true){
      this.sprite.remove();
      this.reset();
    }
  }

}
const winner = new Winner(202, 0);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.

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
