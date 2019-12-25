// Game Score handling
let score = 0,
scoreElement = document.querySelector('.score > span');
function resetScore(){
  score =0;
}
function updateScore(){
   score+=100;
}
function checkWinningScore(){
  return score === 1000;
}
// winning model handling
let modal = document.getElementById("winPopup");
let starList = document.querySelectorAll(".stars li");
let exitIcon = document.querySelector(".exit");
function congrats(){
  if(checkWinningScore()){
    modal.classList.add("show");
    resetScore();
    scoreElement.innerText = score;
    exitModal();
  };
}
function exitModal(){
  exitIcon.addEventListener("click",function(e){
    modal.classList.remove("show");
  });
}
function playAgain(){
  modal.classList.remove("show");
}

// the classes are written in E6 syntax
// First the enemy class and all related methods
class Enemy {
  constructor(x,y) {
      this.sprite = 'images/enemy-bug.png';
      this.x=x;
      this.y=y;
      this.speed=Math.floor((Math.random() * 100) + 150);
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    this.x=this.x+(this.speed*dt);
    // reset
    if(this.x >= 500){
      this.reset();
    }
    // collision
  if (this.x > player.x - 75 && this.x < player.x + 75) {
    if  (this.y > player.y - 75 && this.y < player.y + 75) {
        player.reset();
        resetScore();
        scoreElement.innerText = score;
      }
  }
}
  // Reset Enemy Position Function randomly
  reset(){
  this.x=-150 + Math.floor((Math.random() * 50) + 1);
  }
  // Draw the enemy on the screen, required method for game
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Second : the Player class
class Player {
  constructor (x,y) {
      this.sprite = 'images/char-boy.png';
      this.x=x;
      this.y=y;
  }
// This class requires an update(),
  update(){
    if(this.y > 380) {
			this.y = 380;
		}
		if (this.x > 400) {
			this.x = 400;
		}
		if (this.x < 0) {
			this.x = 0;
		}
// when player reaches water ; back to start position
    if(this.y<0){
      updateScore();
      scoreElement.innerText = score;
      this.reset();
    }
  }
// reset
reset(){
  this.x=200;
  this.y=400;
}
// render() and
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  // this method should return true if the player is not in the boundry
  checkPositionBoundry(){
    return this.x>0 || this.x<400 || this.y<400 || this.y>-50;
  }
// a handleInput() method.
handleInput(input){
  if(this.checkPositionBoundry()){
  if(input==='left'){
    this.x=this.x-50;
  }
  else if (input==='right'){
    this.x= this.x +50;
  }
  else if(input==='down'){
    this.y = this.y +30;
  }
  else if(input==='up'){
    this.y = this.y -30;
  }

}
}
}

// Now instantiating  objects.
var player = new Player(200,400);
var enemy1 = new Enemy(-90,50);
var enemy2 = new Enemy(-600,150);
var enemy3 = new Enemy(-300,60);
var enemy4 = new Enemy(-500,230);
var enemy5 = new Enemy(-200,140);
var enemy6 = new Enemy(-100,240);

// Placing all enemy objects in an array called allEnemies
var allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6];

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
    congrats();
});
