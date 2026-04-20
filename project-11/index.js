let jokes = [
  "Why don’t programmers like nature? It has too many bugs 🐛",
  "Why did the computer go to the doctor? Because it caught a virus 💻",
  "I told my code a joke… but it didn’t get the function 😭",
  "Why do Java developers wear glasses? Because they don’t C# 🤓",
  "Debugging: Being the detective in a crime movie where YOU are the murderer 🕵️"
]


function tellJoke(){
    let random_number=Math.floor(Math.random()*jokes.length)
    let x=document.getElementById("joke")
    x.innerHTML=jokes[random_number]
}

document.querySelector(".btn").addEventListener("click",()=>tellJoke())