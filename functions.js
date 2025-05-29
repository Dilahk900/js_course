

let score = JSON.parse(localStorage.getItem("score")) || {
  wins : 0,
  losses : 0,
  ties : 0
};

let result = '';
let pc_chose = '';
let player_move = '';

update_score();
  
function reset (){ 
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      update_score();
    }

function update_score(){
  document.querySelector('.js-score')
    .innerHTML = `(WINS  ${score.wins}) (LOSSES ${score.losses}) (TIES 
    ${score.ties})`;
  document.querySelector('.js-result')
    .innerHTML  = `${result}`;      

  
 /* document.querySelector('.js-moves')
    .innerHTML = `You |${player_move}| - |${pc_chose}| Computer`;*/
  choice_icon();
  }    

 
 function choice_icon(){
    res_pc = document.querySelector('.pc-move-icon');
    res_ply = document.querySelector('.ply-move-icon');
    if(pc_chose === 'rock'){
      res_pc.src = `img/rock.png`;
    }else if(pc_chose === 'paper'){
      res_pc.src = `img/paper.png`;
    }else res_pc.src = `img/scissors.png`;

    if(player_move === 'rock'){
      res_ply.src = `img/rock.png`;
    }else if(player_move === 'paper'){
      res_ply.src = `img/paper.png`;
    }else res_ply.src = `img/scissors.png`;
 }

function cp_choice(){
    const choice = Math.random();


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

    player_move = player_choice;

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
        document.querySelector('.result-text').classList.add('result-lose');
        document.querySelector('.result-text').classList.remove('result-win');
        document.querySelector('.result-text').classList.remove('result-tie');
    } else if(result === 'you win !'){
        score.wins += 1;
        document.querySelector('.result-text').classList.add('result-win');
        document.querySelector('.result-text').classList.remove('result-lose');
        document.querySelector('.result-text').classList.remove('result-tie');
    } else {
        score.ties += 1;
        document.querySelector('.result-text').classList.add('result-tie');
        document.querySelector('.result-text').classList.remove('result-win');
        document.querySelector('.result-text').classList.remove('result-lose');
    }

    localStorage.setItem("score",JSON.stringify(score));
    
    update_score();
  }

