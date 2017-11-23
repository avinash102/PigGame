
var score,roundScore,activePlayer,dice,gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
        dice=Math.floor(Math.random()*6+1);
        var diceDom;
        diceDom=document.querySelector('.dice');
        diceDom.style.display=('block');
        diceDom.src='dice-'+ dice+'.png';

        if(dice !== 1){
             roundScore += dice;
             document.getElementById('current-'+activePlayer).textContent=roundScore;
        }
        else{
           nextPlayer();
        }   
    }
    
     
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        score[activePlayer] += roundScore;
    roundScore=0;
    document.getElementById('current-'+activePlayer).textContent=roundScore;
    document.getElementById('score-'+activePlayer).textContent=score[activePlayer];
   
    var input = document.querySelector('.final-score').value;
    var winningScore;
        if(input){
            winningScore=input;
        }
        else{
            winningScore=100;
        }
    if(score[activePlayer]>=winningScore){
        document.querySelector('#name-'+ activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display=('none');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
         nextPlayer();
    }
        
    }
    
    
})

document.querySelector('.btn-new').addEventListener('click', function(){
    
    init();
    
})



function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore=0;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

function init(){
    
score=[0,0];
roundScore=0;
activePlayer=0; 
gamePlaying=true;
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('.dice').style.display=('none');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('score-0' ).textContent=0;
document.getElementById('score-1').textContent=0;
    
    
}


