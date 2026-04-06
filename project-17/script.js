let count = JSON.parse(localStorage.getItem("count")) || 0;

function displaycount() {
  document.querySelector(".count").innerText = count;
}

document.querySelector(".add").addEventListener("click", function () {
  count += 1;
  updateStorage();
  displaycount()
});

document.querySelector(".sub").addEventListener("click", function () {
    if(count>0){
        count-=1
  updateStorage()
  displaycount()
    }
});

document.querySelector(".Reset").addEventListener("click", function () {
  count = 0;
  updateStorage()
  displaycount()
});

function updateStorage() {
  localStorage.setItem("count", JSON.stringify(count));
}

displaycount();
