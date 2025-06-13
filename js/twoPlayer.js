let symbol = ['X','O'];
let text = ['X is Playing Now','O is Playing Now'];
let position=[]
let win = ['X WON THE GAME',
        'O WON THE GAME',
        'IT IS A DRAW'
]
let result = false;

//Elements From Document
const grid = document.getElementById("container-grid");
const tagLine = document.getElementById('playing-details');
//Initialisation
let choiceRand= Math.floor(Math.random()*2);
tagLine.textContent = text[choiceRand];
tagLine.style.visibility = 'visible';

for(let i=0; i<9;i++){
    position.push('_');
}

//Functions
function symbolCheck(element){
    return (element.textContent=='X' || element.textContent=='O');
}
function isCompleted(){
    for(let i=0;i<position.length;i++){
        if(position[i]==='_'){
            return false;
        }  
    }
    return true;
}
function positionCheck(){
    //row check
    if(position[0]===position[1] && position[1]===position[2] && position[0]!=='_') return [position[0],true];
    else if(position[3]===position[4] && position[4]===position[5] && position[3]!=='_') return [position[3],true];
    else if(position[6]===position[7] && position[7]===position[8] && position[6]!=='_') return [position[6],true];
    //col check
    else if(position[0]===position[3] && position[3]===position[6] && position[3]!=='_') return [position[0],true];
    else if(position[1]===position[4] && position[4]===position[7] && position[4]!=='_') return [position[1],true];
    else if(position[2]===position[5] && position[5]===position[8] && position[5]!=='_') return [position[2],true];
    //diag check
    else if(position[0]===position[4] && position[4]===position[8] && position[4]!=='_') return [position[0],true];
    else if(position[2]===position[4] && position[4]===position[6] && position[4]!=='_') return [position[2],true];
    //If all are false
    else return [false];
}
function winCheck(){
    let data = positionCheck()
    if(data[0]===false) return false;
    else if(data[0]==='X'){
        tagLine.textContent = win[0];
        return true;
    }
    else{
        tagLine.textContent = win [1];
        return true;
    }
}
//EventListeners
grid.addEventListener
("click",(e)=>{
    const target = e.target;
    if(target.matches('button')){
        if(!symbolCheck(target) && !result){
            target.textContent = position[target.id-1]=symbol[choiceRand]; 
            choiceRand = (choiceRand +1)%2;
            tagLine.textContent = text[choiceRand];
        }
        if(isCompleted() && !winCheck()){
            tagLine.textContent = win[2];
        }
        result = winCheck();
    }
})
document.getElementById('reset').addEventListener
("click",()=>{
    location.href = 'twoPlayer.html';
})
document.getElementById('go-back').addEventListener
("click",()=>{
    location.href = 'index.html';
})

//Verifying

