const cachelist = []
var previndex = -1

function next(){
    //put random qn in question h1 element
    randomqn()

    //play press audio
    const audio = new Audio('assets/press.mp3');
    audio.play();

    //restart animations
    question = document.getElementById("question")
    question.style.animation = 'none';
    question.offsetHeight;
    question.style.animation = null; 

}

async function randomqn(){
  //change this in production
  // const response = await fetch("https://raw.githubusercontent.com/thenithinbalaji/YES-or-NO/main/assets/questions.json")
  const response = await fetch("http://192.168.0.111:5500//assets/questions.json")

  const data = await response.json()

  qnno = Math.floor(Math.random() * (Object.keys(data).length))
  while(cachelist.includes(qnno)){
    qnno = Math.floor(Math.random() * (Object.keys(data).length))
  }

  document.getElementById("question").innerHTML = data[qnno];
  
  cachelist.push(qnno);
  previndex = qnno;


}

