let current = 0;

const questions = [
  {
    q: "Vidya is your?",
    options: ["Daughter", "Frnd", "Mother", "Sister"],
    correct: "Daughter",
    img: "images/1.jpg",
    msg: "Always your daughter… always your little girl 💛"
  },
  {
    q: "What do I call you most of the time?",
    options: ["Amma", "Mummy", "Mom", "Ma"],
    correct: "Amma",
    img: "images/3.jpg",
    msg: "That word itself feels like home ❤️"
  },
  {
    q: "What is my favorite food made by you?",
    options: ["Sambar", "Biryani", "Dosa", "Everything"],
    correct: "Everything",
    img: "images/4.jpg",
    msg: "Anything you cook becomes my favorite 😌"
  },
  {
    q: "Who understands me without me saying anything?",
    options: ["Friends", "Relatives", "Amma", "No one"],
    correct: "Amma",
    img: "images/5.jpg",
    msg: "You always know what I feel before I say it 💛"
  }
];

function startQuiz(){
  document.getElementById("start").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  let music = document.getElementById("bgMusic");
  music.play();

  loadQuestion();
}

function loadQuestion(){
  let q = questions[current];
  let quiz = document.getElementById("quiz");

  quiz.innerHTML = `<h2>${q.q}</h2>`;

  q.options.forEach(opt=>{
    quiz.innerHTML += `<button onclick="checkAnswer('${opt}')">${opt}</button>`;
  });

  quiz.innerHTML += `<p id="error"></p>`;
}

function checkAnswer(ans){
  let q = questions[current];

  if(ans === q.correct){
    showResult(q);
  }else{
    document.getElementById("error").innerText = "Try again Amma 😄";
  }
}

function showResult(q){
  document.getElementById("quiz").classList.add("hidden");

  let result = document.getElementById("result");
  result.classList.remove("hidden");

  document.getElementById("memoryImg").src = q.img;
  document.getElementById("message").innerText = q.msg;
}

function nextQuestion(){
  current++;
  document.getElementById("result").classList.add("hidden");

  if(current < questions.length){
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }else{
    showFinal();
  }
}

function showFinal(){
  document.getElementById("final").classList.remove("hidden");

  document.getElementById("finalMsg").innerText =
`From my first step to today…  

You’ve always been there for me.  

You are my home, my strength,  
and the reason behind my smile.  

Happy Birthday Amma ❤️  

I may not say this often,  
but I love you more than anything 💛`;
}