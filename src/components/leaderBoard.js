
let leaderBoard=[
    {name:'john',score:555},
    {name:'john',score:555}, 
    {name:'john',score:555},
    {name:'john',score:555},
    {name:'john',score:555}, 
    {name:'john',score:555},
    {name:'john',score:555},
    {name:'john',score:555},
    {name:'john',score:555}
]

export function createLeaderBoard(){
   const board=  $('<div></div>').addClass('leaderBoard').attr('id','leaderBoard');
   board.append($('<h2>Top 10 Players</h2>').addClass('leaderTitle'));
   let position =1
   leaderBoard.forEach(entry => {
  
   board.append($('<p></p>').addClass('leaderEntry').text(position+':'+entry.name +'    '+entry.score));
   position+=1; 
   });

   return board;
}

export function addToLeaderBoard(){
    //TODO Ajouter un nouveau record dans le leaderboard
}


