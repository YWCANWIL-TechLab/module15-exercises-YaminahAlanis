
const questions=document.getElementsByClassName('question');
let questionIndex=0;

function nextQuestion(){
    if(questionIndex===questions.length){
        console.log("Last question reached.");
        return;
    }
    //Removes.visible from current question
    questions[questionIndex].classList.remove('visible');

    //adds visible to the next question
    questions[questionIndex+1].classList.add('visible');

    console.log("Next Question");
}

function lastQuestion(){

}