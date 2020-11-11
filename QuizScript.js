var currentQuestion=0;
var score=0;
var totQuestions=questions.length;
var container= document.getElementById('quizContainer');
var questionEl= document.getElementById('question');
var opt1= document.getElementById('opt1');
var opt2= document.getElementById('opt2');
var opt3= document.getElementById('opt3');
var opt4= document.getElementById('opt4');
var nextButton=document.getElementById('nextButton')
var resultCont=document.getElementById('result')
function loadQuestion(questionIndex)
{
var Q=questions(questionindex);
questionEl.textContent=(questionIndex + 1) + ','+ Q.question;
opt1.textContent = Q.option1;
opt2.textContent = Q.option2;
opt3.textContent = Q.option3;
opt4.textContent = Q.option4;

};

function loadNextQuestion() {
var selectedOption=document.querySelector('input[type=radio]:checked');
if (!selectedOption){
alert('Please select your answer!');
return;
}
var answer=selectedOption.value;
if(questions[currentQuestion].answer==answer){
score +=10;
}
selectedOption.checked=false;
currentQuestion++;
if(currentQuestion==totQuestins-1)
{
nextbutton.textcontent='Finish';
}
if(currentQuestion==totqQuestions){
container.style.display='none';
resultCont.style.display='';
resultCont.textContent='Your Score' + score;
return;
}
loadquestion(currentquestion);
}
loadquestion(currentquestion);