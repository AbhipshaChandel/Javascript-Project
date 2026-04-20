let x1 = Math.floor(Math.random() * 100) + 1;

let attempt = 0;
let y = document.querySelector(".Check");
y.addEventListener("click", () => {
  let l = document.querySelector(".message");
  let x = Number(document.querySelector(".input").value);
  attempt++;

  if (isNaN(x) || x > 100 || x < 1) {
    alert("Enter number within Range");
    document.querySelector(".input").value = "";
    return;
  } else if (x === x1) {
    l.innerHTML = "Wow!You guessed it correct";
    let result = 100 - attempt;
    document.body.innerHTML = "";
    let div=document.createElement("div");
    div.className="result"
    div.innerHTML = "Your score is " + result + "%🎉"
    document.body.append(div);
  } else if (x > x1) {
    l.innerHTML = "High";
  } else {
    l.innerHTML = "Low";
  }
  document.querySelector(".input").value = "";
});
