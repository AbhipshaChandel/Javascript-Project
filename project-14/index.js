let alpha="abcdefghijklmnopqrstuvwxyz"
let bigalpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let specialchar="!@#$%^&*"
let all=alpha+bigalpha+specialchar

function main(x){
    let password=[]
   let random1=Math.floor(Math.random()*alpha.length)
   password.push(alpha[random1])
   let random2=Math.floor(Math.random()*bigalpha.length)
   password.push(bigalpha[random2])
   let random3=Math.floor(Math.random()*specialchar.length)
   password.push(specialchar[random3])

   if(password.length<x){
    for(let i=password.length;i<x;i++){
        let random4=Math.floor(Math.random()*all.length)
        password.push(random4)
    }
   }
   let y=document.createElement("span")
   y.innerHTML=password.join("")
   document.querySelector(".write").appendChild(y)
}



document.querySelector(".button").addEventListener("click",()=>{

    let x=prompt("How many digit of password u want")
    if(x>12 || x===NAN){
        alert("Enter a smaller digit between 1-12")
    }
    else{
        main(x)
    }
})



