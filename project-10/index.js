
let won=0
let me_won=0

// Functions...

function play(my_choice){

let choose=Math.floor(Math.random()*3)+1
let comp_choice
if(choose===1){
   comp_choice="Snake"
}
else if(choose===2){
   comp_choice="Water"
}
else{
   comp_choice="Gun"
}


if(comp_choice===my_choice){
 document.getElementById("result").innerHTML="It's a Tie  🤝"
}

else if((comp_choice==="Snake" && my_choice==="Water") || (comp_choice==="Water" && my_choice==="Gun") ||(comp_choice==="Gun" && my_choice==="Snake")){
 won+=1
 document.getElementById("result").innerHTML="Computer Won  💻"
 document.getElementById("compScore").innerHTML=won
}

else{
 me_won+=1
 document.getElementById("result").innerHTML="You Won  🎉"
 document.getElementById("youScore").innerHTML=me_won
}

}

// Buttons...

document.querySelector(".btn1").addEventListener("click",()=>{play("Snake")})

document.querySelector(".btn2").addEventListener("click",()=>{play("Water")})

document.querySelector(".btn3").addEventListener("click",()=>{play("Gun")})