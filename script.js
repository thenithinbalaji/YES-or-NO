var cachelist = []
var previndex = -1
var data 
var ans 

function next(clicked){
    //put random qn in question h1 element and set stats
    randomqn(clicked)

    //play press audio
    const audio = new Audio('assets/press.mp3');
    audio.play();

    //restart animations
    question = document.getElementById("question")
    question.style.animation = 'none';
    question.offsetHeight;
    question.style.animation = null; 

}

async function randomqn(clicked){

  //change this in production
  if(previndex == -1){

    const response = await fetch("https://raw.githubusercontent.com/thenithinbalaji/YES-or-NO/main/assets/questions.json")
    const response2 = await fetch("https://raw.githubusercontent.com/thenithinbalaji/YES-or-NO/main/assets/answers.json")
    // const response = await fetch("http://192.168.0.111:5500//assets/questions.json")
    // const response2 = await fetch("http://192.168.0.111:5500//assets/answers.json")

    data = await response.json()
    ans = await response2.json()
  }

  qnno = Math.floor(Math.random() * (Object.keys(data).length))
  while(cachelist.includes(qnno)){
    qnno = Math.floor(Math.random() * (Object.keys(data).length))
  }

  document.getElementById("question").innerHTML = data[qnno];
  cachelist.push(qnno);

  //changing STATS
  if(previndex != -1){

    document.getElementById("stats-text").innerHTML = 
    "answered " + clicked.id.slice(6).toUpperCase() + " to<br>" + data[previndex]

    if(clicked.id == "buttonyes")
    percent = ans[previndex]

    else
    percent = 100 - ans[previndex]
    
    document.getElementById("stats-percentage").innerHTML = percent.toString() + "%"
    document.getElementById("stats").style.visibility = "visible";
  }
    
  previndex = qnno;

  // repeat qns endlessly
  if(cachelist.length == Object.keys(data).length){
    cachelist = []
  }
}

