var players = [{name: 'Player 1',position: 0, turn: 0},
               {name: 'Player 2',position: 0, turn: 1}];

var ranButton1 = document.getElementById('rand1button');
var ranButton2 = document.getElementById('rand2button');

ranButton1.addEventListener('click', function(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var num1 = randomNumber1 ;
  document.getElementById('pos1').innerHTML = CurrentPos1(num1);

});

ranButton2.addEventListener('click', function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var num2 = randomNumber ;
  document.getElementById('pos2').innerHTML = CurrentPos(num2);
});


function CurrentPos1(num1){

  var newPos1 = players[0].position + num1;
  players[0].position =  newPos1;
  console.log(newPos1);

  if(players.turn === 0)
  console.log(players.name);

  if (players[0].position === 15){
     players[0].position = 5;
     return "Oh no, you have encountered a snake at box 15. You was so scared that you run away and back to box 5. This is too sad to be watched :(";
     }

  if (players[0].position === 23){
     players[0].position = 16;
     return "Oh no, you have encountered a snake at box 23. You was so scared that you run away and back to box 16. This is too sad to be watched :(";
     }

  if (players[0].positions === 8){
      player[0].position = 15;
      return "You have reach box 8 and found that there is a ladder! Climb and go to box 15! XD";
  }

  if (players[0].position === 19){
      players[0].position = 24;
      return "You have reach box 19 and found that there is a ladder! Climb and go to box 24! XD";
    }

  else  if (players[0].position > 25)
      return "We got our champion here, congratulation! <3";

 return "You rolled " + num1 + ". Proceed to box " + players[0].position;
}

function CurrentPos(num2){

  var newPos = players[1].position + num2;
  players[1].position =  newPos;
  console.log(newPos);

  if(players.turn === 1)
  console.log(players.name);

  if (players[1].position === 15){
     players[1].position = 5;
     return "Oh no, you have encountered a snake at box 15. You was so scared that you run away and back to box 5. This is too sad to be watched :(";
     }

  if (players[1].position === 23){
     players[1].position = 16;
     return "Oh no, you have encountered a snake at box 23. You was so scared that you run away and back to box 16. This is too sad to be watched :(";
     }

  if (players[1].positions === 8){
      player[1].position = 15;
      return "You have reach box 8 and found that there is a ladder! Climb and go to box 15! XD";
  }

  if (players[1].position === 19){
      players[1].position = 24;
      return "You have reach box 19 and found that there is a ladder! Climb and go to box 24! XD";
    }

  else  if (players[1].position > 25)
      return "We got our champion here, congratulation! <3";

 return "You rolled " + num2 + ". Proceed to box " + players[1].position;
}
