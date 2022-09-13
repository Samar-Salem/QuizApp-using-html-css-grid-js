const startBtn = document.getElementById("startBtn");
const welcomeForm = document.querySelectorAll(".welcome");
let nextBtn = document.querySelector(".nextBtn");
const completeForm = document.querySelectorAll(".complete");
const quitBtn = document.getElementById("quitBtn");
const pText = document.getElementsByClassName("text");
let scoreText =  document.getElementById('score');
var clicked = false;
let score = 0 ;
let = currentQuizIndex = 0;
let box = ``;
let index = 0 ;




 
// Array for letters
let letter = ['A' , 'B' , 'C' , 'D' , 'E' , 'F'];

// Array for Questions
let quizQuestions = [
    {
        question:  "What does CSS stand for ?",
        answer : ["Computer Style Sheets", "Cascading Style Sheets","Creative Style Sheets","Colorful Style Sheets"],
        correct: "B"
    },
    {
        question: "What does HTML stand for ?",
        answer:[ "Hypertext Machine language","Hypertext and links markup language","Hypertext Markup Language","Hightext machine language"],
        correct: "C"
    },
    {
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      answer: ["In the &lt;head&gt; section","In the &lt;body&gt; section", "At the end of the document",
      " You can't refer to an external style sheet"] ,
      correct: "A"
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      answer: ['&lt;script&gt;','&lt;css&gt; ', '&lt;style&gt;'],
      correct: "C"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      answer:[ "class","style","font"],
      correct: "B"
  },
  {
    question: " Which of the following tag is used for inserting the largest heading in HTML?",
    answer: ['&lt;h3&gt;','&lt;h1&gt;','&lt;h5&gt;' , '&lt;h6&gt;'],
    correct: 'B'
  }
];

 
  function displayAnswer(){
      box +=
        ` <div >
        <ul>
            <li class="answer answeLetter">
                <span class="answeLetter">${letter[index]}</span>
                <p class="text">${quizQuestions[currentQuizIndex].answer[index]}</p>
            </li>
            </ul>
          </div>`
          document.getElementById('answers-container').innerHTML = box;
     
  }
      
     
      

// When Click On Next Btn
nextBtn.addEventListener("click",nextBtnClick )
 function nextBtnClick() 
 {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length )
    {
      document.getElementById('question').innerHTML = quizQuestions[currentQuizIndex].question;
      changeStyle();
     

      for( index = 0; index < quizQuestions[currentQuizIndex].answer.length; index++)
      {
       
        displayAnswer();
      }
      box = ""
      index = 0;
      LiClick();
    }
    else {
    completeForm[0].style.display = "block";
   scoreText.innerHTML= `You got: ${score} out of ${currentQuizIndex} questions right.`
    }
}


// Welcome Form
startBtn.addEventListener("click", startB);
function startB() {
    welcomeForm[0].style.display = "none";
    document.getElementById('question').innerHTML = quizQuestions[currentQuizIndex].question;
       
    for( index = 0; index < quizQuestions[currentQuizIndex].answer.length; index++)
    {
      displayAnswer();
    }
    box = ""
    index = 0;
    LiClick();
}



// When Click On Li(Answer) OR  P text

function LiClick()
{
  let liSpan = document.getElementsByClassName('answeLetter')
    for(let i = 0 ; i < liSpan.length ; i++){
      liSpan[i].addEventListener('click',()=>{
      if (!clicked) {
        liSpan[i].style.border = "3px solid rgb(113, 153, 34)";
        liSpan[i].firstElementChild.style.backgroundColor = 'rgb(113, 153, 34)'; 
        nextBtn.style.display = "block";
        clicked = true;
      
      }
      if(liSpan[i].firstElementChild.textContent === quizQuestions[currentQuizIndex].correct){
       score++
      }
      
    })
  }
}




// To Change Style for Li & Span When Click On Next Btn 
function changeStyle() {
  let liAnswers = document.querySelectorAll(".answer");
  for (var i = 0; i < liAnswers.length; i++) {
    let e = liAnswers[i];
    e.style.border = "1px solid #1e4658";
    e.childNodes[1].style.backgroundColor = "#1e4658";
  }
  nextBtn.style.display = "none";
  clicked = false;
}






