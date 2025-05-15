function _cp_choice(){
          const $choice = Math.random(); //azeaze
          let $result;
          let $pc_chose = '';
          if ($choice <= 1 / 3){ 
             $pc_chose = "rock";       
          }
          else if($choice > 1 / 3 && $choice <= 2 / 3){
             $pc_chose = "paper";
          } 
          else{
            $pc_chose = "scissors";
          }
          
          return($pc_chose);
      }

      function _game(player_choice){
          
          let $pc_choice = _cp_choice();
          if(player_choice === 'rock' && $pc_choice === 'scissors'){
            $result = "you win !";
          }else if(player_choice === 'rock' && $pc_choice === 'paper'){
             $result = "you lose !";
          } else if(player_choice === 'paper' && $pc_choice === 'scissors'){
            $result = "you lose !";
          }else if(player_choice === 'paper' && $pc_choice === 'rock'){
             $result = ("you win !");
          } else if(player_choice === 'scissors' && $pc_choice === 'rock'){
            $result = "you lose !";
          }else if(player_choice === 'scissors' && $pc_choice === 'paper'){
             $result = "you win !";
          } 
          else{
            $result = "Tie !";

          }
          
          console.log("Computer chose : " + $pc_choice + " and you chose " + player_choice);
          console.log("Result : " + $result);
          document.getElementById("pc_choice").textContent = $pc_choice;
          document.getElementById("player_choice").textContent = player_choice;
          document.getElementById("result").textContent = $result;
      }