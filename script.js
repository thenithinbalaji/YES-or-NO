function next(){
    randomqn()
    var audio = new Audio('assets/press.mp3');
    audio.play();

    question = document.getElementById("question")

    question.style.animation = 'none';
    question.offsetHeight;
    question.style.animation = null; 

}

async function randomqn(){

  question = document.getElementById("question")
  
  const response = await fetch("http://192.168.0.111:5500/questions.json")
  const data = await response.json()

  question.innerHTML = data[Math.floor(Math.random() * (Object.keys(data).length) - 1)];
}

