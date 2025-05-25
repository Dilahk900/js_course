

let score = JSON.parse(localStorage.getItem("score")) || {
  wins : 0,
  losses : 0,
  ties : 0
};

update_score();
    
function reset (){ 
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      update_score();
    }
function update_score(){
      document.querySelector('.game_result')
        .innerHTML = `(WINS  ${score.wins}) (LOSSES ${score.losses}) (TIES 
        ${score.ties})`;
    }    
function cp_choice(){
    const choice = Math.random();
    let result;
    let pc_chose = '';

    if (choice <= 1 / 3){ 
        pc_chose = 'rock';       
    }
    else if(choice > 1 / 3 && choice <= 2 / 3){
        pc_chose = 'paper';
    } 
    else{
      pc_chose = 'scissors';
    }
    
    return(pc_chose);
    }

function game(player_choice){

    let pc_choice = cp_choice();

    if(player_choice === 'rock'){
      if(pc_choice === 'scissors' ){
        result = 'you win !';
      } else if(pc_choice === 'paper'){
        result = 'you lose !';
      } else  result = 'Tie !';
    }

    if(player_choice === 'paper'){
      if(pc_choice === 'scissors' ){
        result = 'you lose !';
      } else if(pc_choice === 'rock'){
        result = 'you win !';
      } else  result = 'Tie !';
    }

    if(player_choice === 'scissors'){
      if(pc_choice === 'rock' ){
        result = 'you lose !';
      } else if(pc_choice === 'paper'){
        result = 'you win !';
      } else  result = 'Tie !';
    }

    if(result === 'you lose !'){
        score.losses += 1;
    } else if(result === 'you win !'){
        score.wins += 1;
    } else score.ties += 1;

    localStorage.setItem("score",JSON.stringify(score));
    
    update_score();


  }