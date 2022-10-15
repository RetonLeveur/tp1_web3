
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
    $('<div></div>').addClass('leaderBoard').attr('id','leaderBoard');
}

export function loadLeaderBoard(){
 //TODO Charger les entrée actuel dans le leaderboard
}
export function addToLeaderBoard(){
    //TODO Ajouter un nouveau record dans le leaderboard
}


