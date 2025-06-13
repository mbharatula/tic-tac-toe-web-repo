const btn1 = document.getElementById('two-player');
const btn2 = document.getElementById('one-player');
console.log(btn1,btn2);

btn1.addEventListener
("click",()=>{
    location.href = 'twoPlayer.html';
})

btn2.addEventListener
("click",()=>{
    alert("Under Progress");
})