let x=Number(prompt("Enter a number:"))
let result=1
for(let i=1;i<=x;i++){
   result=result*i
}

document.querySelector(".box").innerHTML="Factorial is:"+result

let result2=x.reduce((acc,curr)=>{
    
},1)