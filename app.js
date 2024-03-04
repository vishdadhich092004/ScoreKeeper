const p1 ={
  score:0,
  button :  document.querySelector(".p1Button"),
  display : document.querySelector(".p1Display")
}
const p2 ={
  score : 0,
  button :  document.querySelector(".p2Button"),
  display : document.querySelector(".p2Display")
}
const resetButton = document.querySelector('.reset');

let winningScore =3 ;    
const maxGames = document.querySelector('#maxGames');

maxGames.addEventListener('change',function(){
    winningScore   = parseInt(this.value) ;
    reset();
})

let isGameOver = false;

function updateScore(player, opponent){
  if (!isGameOver) {
    player.score += 1;
    if (winningScore === player.score){
        isGameOver = true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1,p2);
})
p2.button.addEventListener("click", function () {
  updateScore(p2,p1);
})

resetButton.addEventListener('click',reset)
   

function reset(){
    
    isGameOver = false;
    for (let p of [p1,p2]){
    p.score =0;
    p.display.textContent = p.score;
    p.button.disabled = false;
    p.display.classList.remove('winner','loser');
    }
    
}

function duesCase(p1,p2){
  if (p1.score === p2.score && p1.score >=10)
  winningScore +=1;
}