// sprite du joueur 1
export const PLAYER_ONE={
    src:'../../assets/characters.png',
    tileWidth:51,
    tileHeight:71,

    idleSequence:[
        {x:1,y:0},
    ],

    walkSequenceRight:[
        {x:0,y:2},
        {x:1,y:2},
        {x:2,y:2}
    ],

    walkSequenceLeft:[
        {x:0,y:1},
        {x:1,y:1},
        {x:2,y:1}
    ],

    walkSequenceUp:[
        {x:0,y:3},
        {x:1,y:3},
        {x:2,y:3}
    ],

    walkSequenceDown:[
        {x:0,y:0},
        {x:1,y:0},
        {x:2,y:0}
    ],

    commands:{
        left: 'ArrowLeft',
        right:'ArrowRight',
        up:'ArrowUp',
        down:'ArrowDown',
       
    },

    speed:5,
    isTag:false,
    name:'',

    initialPosition:{
        x:10,
        y:10
    }
}
// sprite du joueur 1
export const PLAYER_TWO={
    src:'../../assets/characters.png',
    tileWidth:96,
    tileHeight:96,

    idleSequence:[
        {x:10,y:2}
    ],

    walkSequenceRight:[
        {x:9,y:2},
        {x:10,y:2},
        {x:11,y:2}
    ],

    walkSequenceLeft:[
        {x:9,y:1},
        {x:10,y:1},
        {x:11,y:1}
    ],

    walkSequenceUp:[
        {x:9,y:3},
        {x:10,y:3},
        {x:11,y:3}
    ],

    walkSequenceDown:[
        {x:9,y:0},
        {x:10,y:0},
        {x:11,y:0}
    ],

    commands:{
        left: 'A',
        right:'D',
        up:'W',
        down:'S',
       
    },
    name:'',
    speed:5,
    isTag:false,

    initialPosition:{
        x:350,
        y:350
    }
}