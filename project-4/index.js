function firstName(){
let x = Math.floor(Math.random() * 3) + 1
  if(x==1)return "Crazy"
  else if(x==2)return "Amazing"   
  else return "Fire"
}
  
function midName(){
let x = Math.floor(Math.random() * 3) + 1
  if(x==1)return "Engine"
  else if(x==2)return "Foods"
  else return "Garment"
}

function lastName(){
let x = Math.floor(Math.random() * 3) + 1
  if(x==1)return "Bros"
  else if(x==2)return "Limited"
  else return "Hub"
}


document.querySelector(".box").innerHTML="Shop name is :"+firstName()+midName()+lastName()
  