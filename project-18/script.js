let questions = [
  { question: "what is 2+2?", options: ["1", "2", "5", "4"], answer: "4" },
  {
    question: "what is capital of india?",
    options: ["Mumbai", "Delhi", "Kolkata", "Goa"],
    answer: "Delhi",
  },
  {
    question: "INdia is in which continent?",
    options: ["Africa", "Europe", "Asia", "Antartica"],
    answer: "Asia",
  },
  {
    question: "who invented Zero?",
    options: [
      "Subhash Chandra Bose",
      "Pt.Jawahar Lal Nehru",
      "Rabindra Nath Tagore",
      "Arya Bhatt",
    ],
    answer: "Arya Bhatt",
  },
  {
    question: "Last state to be formed in india?",
    options: ["Telangana", "Odisha", "Jammu and Kashmir", "Ladakh"],
    answer: "Telangana",
  },
];

let currentquest = 0;
let score = 0;

let timer;

function startTimer() {
  let timeleft = 10;
  document.querySelector(".timer").innerHTML = "Timer:" + timeleft;

  timer = setInterval(() => {
    timeleft--;
    document.querySelector(".timer").innerHTML = "Timer:" + timeleft;
    if (timeleft === 0) {
      clearInterval(timer);
      currentquest++;
      nextquestion();
    }
  }, 1000);
}

function showQuestion() {
  let q = questions[currentquest];
  let ques = document.querySelector(".question");
  ques.innerHTML = q.question;

  let opt = document.querySelector(".option");
  opt.innerHTML = "";

  q.options.forEach((option) => {
    let btn = document.createElement("button");
    btn.innerHTML = option;

    btn.addEventListener("click", () => {
      clearInterval(timer);
      if (option === questions[currentquest].answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
      }
      setTimeout(() => {
        currentquest++;
        nextquestion();
      }, 800);
    });
    opt.appendChild(btn);
  });
  startTimer();
}

function nextquestion() {
  if (currentquest < questions.length) {
    showQuestion();
  } else {
    result();
  }
}

function result() {
  document.body.innerHTML = `<h1 class="size">Your Score ${score}/${questions.length}</h1>`;
}

showQuestion();
