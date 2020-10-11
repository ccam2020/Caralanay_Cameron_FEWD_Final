console.clear();
var url = "#"; // <-- place shop now URL here
var questions = [
  (one = {
    name: "What are your current career goals?",
    answers: [
      "i want a promotion at my current company",
      "i'm looking for something new",
      "i want to find my passion",
      "i want to transition into a new career",
      "i'm not sure"
    ]
  }),
  (two = {
    name: "Why do you work?",
    answers: [
      "to fulfill my calling in life",
      "to pay the bills",
      "to fund my lifestyle",
      "to escape my life at home",
      "i'm not sure"
    ]
  }),
  (three = {
    name: "What is work for?",
    answers: [
      "building relationships and friendships",
      "expressing my talents and strengths",
      "creating financial stability and security",
      "a chance to do something im passionate about",
      "i'm not sure"
    ]
  }),
  (four = {
    name: "What defines good or worthwhile work?",
    answers: [
      "work that allows me to express my creative side",
      "work that allows me to give back to my community",
      "work that pays me lots of money",
      "work that allows me to see my impact immediatley",
      "work that gives me work/life balance"
    ]
  }),
  (five = {
    name: "Where do you see yourself in 10 years?",
    answers: [
      "retired",
      "owning my own business",
      "becoming a C-Suite Executive",
      "freelancing",
      "i'm not sure"
    ]
  })
];

function startQuiz() {
  document.querySelector("#quizBox").innerHTML =
    "<div id='quiz-intro' class='quiz-slide slide-on'>    <div class='quiz-content'>      <h1>Let us help you<br>find a career<br>coach thats right<br>for you.</h1>      <a class='nextbutton'>TAKE OUR QUIZ ></a>    </div>  </div>  <div id='quiz-q1' class='quiz-slide'></div>  <div id='quiz-q2' class='quiz-slide'></div>  <div id='quiz-q3' class='quiz-slide'></div>  <div id='quiz-q4' class='quiz-slide'></div>  <div id='quiz-q5' class='quiz-slide'></div>  <div id='quiz-result' class='quiz-slide'>    <div class='quiz-content'>      <img src='' />      <h1>You're Done!</h1>      <p>Thank you for taking the quiz. A specialist from Reinvent will reach out to you soon!</p>            <a id='retake'>Retake Quiz</a>    </div>  </div>  ";

  for (var prop in questions) {
    var i = questions.indexOf(questions[prop]) + 1;
    var div = document.getElementById("quiz-q" + [i]);
    div.style.backgroundImage = "url(" + questions[prop].img + ")";
    var c = document.createElement("div");
    c.className = "quiz-content";
    var h = document.createElement("h3");
    h.innerHTML = questions[prop].name.toUpperCase();
    div.appendChild(c).append(h);
    var u = document.createElement("ul");
    div.appendChild(c).append(h, u);
    var num = 1;
    questions[prop].answers.forEach(function (a) {
      var l = document.createElement("li");
      l.className = "answer";
      l.innerHTML = a.toUpperCase();
      l.setAttribute("data-cost", num);
      num++;
      div.getElementsByTagName("ul")[0].appendChild(l);
    });
    var l = document.createElement("li");
    l.innerHTML =
      "<div id='q-count'><span>" +
      i +
      "</span> / 5</div><div class='nxtbutton'>></div>";
    if (i == 5) {
      l.innerHTML =
        "<div id='q-count'><span>" +
        i +
        "</span> / 5</div><div class='last-nxtbutton'>></div>";
    }
    div.getElementsByTagName("ul")[0].appendChild(l);
  }

  var nb = document.querySelectorAll(".nextbutton");
  nb.forEach(function (elm) {
    elm.addEventListener("click", function () {
      var s = elm.parentElement.parentElement;
      s.className = "quiz-slide slide-off";
      s.nextElementSibling.classList.add("slide-on");
      setTimeout(function () {
        s.classList.remove("slide-off");
      }, 1000);
    });
  });

  var a = document.querySelectorAll(".answer");
  a.forEach(function (elm) {
    elm.addEventListener("click", function () {
      if (elm.parentElement.querySelector(".a-clicked")) {
        elm.parentElement
          .querySelector(".a-clicked")
          .classList.remove("a-clicked");
      }
      elm.classList.add("a-clicked");
      if (elm.parentElement.querySelector(".nxtbutton")) {
        elm.parentElement.querySelector(".nxtbutton").style.display = "block";
      } else {
        elm.parentElement.querySelector(".last-nxtbutton").style.display =
          "block";
      }
    });
  });

  var nx = document.querySelectorAll(".quiz-slide div ul li .nxtbutton");
  nx.forEach(function (elm) {
    elm.addEventListener("click", function () {
      var s = elm.parentElement.parentElement.parentElement.parentElement;
      s.className = "quiz-slide slide-off";
      s.nextElementSibling.classList.add("slide-on");
      setTimeout(function () {
        s.classList.remove("slide-off");
      }, 1000);
    });
  });

  var score = -1;
  var btn = document.querySelector(".last-nxtbutton");
  btn.addEventListener("click", function () {
    var a = document.querySelectorAll(".a-clicked");
    a.forEach(function (elm) {
      var num = parseInt(elm.getAttribute("data-cost"));
      score = score + num;
      console.log(score);
    });

    var s = btn.parentElement.parentElement.parentElement.parentElement;
    s.className = "quiz-slide slide-off";
    s.nextElementSibling.classList.add("slide-on");
    setTimeout(function () {
      s.classList.remove("slide-off");
    }, 1000);
  });

  document.querySelector("#retake").addEventListener("click", startQuiz);
}

startQuiz();
