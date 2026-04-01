
alert("Enter:\n 1 for + \n 2 for - \n 3 for * \n 4 for / ")


document.querySelector(".button").addEventListener("click",()=>{
  let num1=Number(document.querySelector(".input1").value)
let num2=Number(document.querySelector(".input2").value)
let cond=Number(document.querySelector(".cond").value)
  if(isNaN(num1)|| isNaN(num2)||isNaN(cond)){
    alert("Enter both values")
  }

 let z= calculator(num1,num2,cond)
 document.querySelector(".res").innerHTML=""
 let m= document.createElement('div').innerHTML="Result is : "
 document.querySelector(".res").append(m)

 let n= document.createElement('div').innerHTML=z
 document.querySelector(".res").append(n)

})


function calculator(num1,num2,cond){
let x=Math.random()
let result

if(x<0.1){
  if(cond===1)result= num1-num2
  else if(cond===2)result= num1*num2
  else if(cond===3)result= num1/num2
  else result= num1**num2
}
else{
  if(cond===1)result= num1+num2
  else if(cond===2)result= num1-num2
  else if(cond===3)result= num1*num2
  else result= num1/num2
}
return result
}