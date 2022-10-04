export const PLAYER_ONE={
    src:'../assets/character.png',
    tileWidth:96,
    tileHeight:96,

    idleSequence:[
        {x:2,y:2}
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
        shoot:' '
    },

    speed:5,

    initialPosition:{
        x:250,
        y:250
    }
}

export const PLAYER_TWO={
    src:'../assets/character.png',
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
        left: 'ArrowLeft',
        right:'ArrowRight',
        up:'ArrowUp',
        down:'ArrowDown',
        shoot:' '
    },

    speed:5,

    initialPosition:{
        x:350,
        y:350
    }
}