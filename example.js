
//GetElemntById()

function selectH1(){
document.getElementById('h1').innerText="Welcome to the HTML DOM";
}


//getElementsByTagName()

function selectAllOfElement(tagName){
    console.log(document.getElementsByTagName(tagName));
}
selectAllOfElement("p");


function changeFirstElement(tagName){
    document.getElementsByTagName(tagName)[0]
    .innerText="ncjkgdvwoiefhbqklecnianc nladhiviakcn lkadvhpiwvnamcchiwlhrgprghgjowgjpkgr4pfohvjhgciqgfgh";
}
changeFirstElement('p');


function loopOverElement(tagName){
    const elements=document.getElementsByTagName(tagName);
    for(let element of elements){
        element.innerText="I changed this line using a loop in Javascript";
    }
}

function selectClass(className){
    const classElements=document.getElementsByClassName(className);
    for(let i=0;i<classElements.length;i++){
        classElements[i].innerText="";
    }
}


function changeInnerHTML(){
    document.getElementById('container').innerHTML="<h1>I just created an HTML element</h1>";
}

function hideElement(){
    document.getElementById('container').style.display="none";
}

function addClasses(){
    const container=document.getElementById('problems');
    const paragraphs=problems.getElementsByTagName('p');

    for(let paragraph of paragraphs){
     paragraph.setAttribute('class','red');    
    }  
}

function addAttribute(){
    // document.getElementById('intro').classList+='red';
    document.getElementById('intro').id='red';
}

function addElement(){
    const h2=document.createElement('h2');//Created a new element
    h2.innerText="I'm adding a new Element";//Added text to new element
    const parent=document.getElementById('btn-div');//saved the parent in a variable
    parent.appendChild(h2);//Made the new element a child of our parent element
}
function removeElement(){
    const parent=document.getElementById('problems');
    const removeMe=document.getElementById('remove-me');
    parent.removeChild(removeMe);
}

function clickHandler(){
    document.getElementById('style-me').onclick=function(){
        document.getElementById('style-me').style.color="red";
    }
}





function clickHandler2(){
    //  Set explicit font size
    document.getElementById('style-me').style.fontSize="1em"; 
    
    document.getElementById('style-me').onclick=function(){   

    //Set explicit font size
    // document.getElementById('style-me').style.fontSize="1em"; 
  

    //Saved font size in variable
    let fontSize=document.getElementById('style-me').style.fontSize;

    //Remove unit from fontSize("1em->1")
    fontSize=parseInt(fontSize);

    //doubled fontSize
    fontSize=fontSize*2;

    //Added unit back to fontSize
    fontSize=fontSize + "em";


    //Sets the element's font size to our fontSize variable 
    document.getElementById('style-me').style.fontSize=fontSize;
}

}

function querySelector(){
    const elements=document.querySelectorAll("#problems p:nth-child(even)");
    for(let element of elements){
        element.style.color="rgb(0,0,128)";
    }
}



function useSetInterval(){

    /**
     * Set interval- runs a "callback function
     * number of milliseconds
     */
    const id=setInterval(function(){ //function call back:function in function
        console.log("Hello");
    },5000);


    /**
     * setTimeout- runs a function after a certain number of milliseconds
     */
    setTimeout(function(){ //module 14 and 17
        clearInterval(id);
    },15000);


}

function animateDiv(){

    const div=document.getElementsByClassName('absolute')[0];
    let left=0
    const id=setInterval(()=>{
        if(left>700){
            clearInterval(id);//stops when div moves over 700px
        }
        div.style.left=`${left}px`;//Change value of left which moves the div
        left+=1;//Increasing left variable
    },25)



}


function moveSection(){

    const section=document.getElementsByClassName('relative')[0];
    let bottom=0;


    section.onmouseover=function(){
        bottom+=200;
        section.style.bottom=`${bottom}px`;
    }

}

function displayUsername(){

    const h2=document.getElementById('display');
    const input=document.getElementById('email-input');


    /**
     * Display the user's username on our h2.
     * We can assume the user's usernam is the portion of their email before the @
     * 
     */
    input.onchange=function(){
        let userName=input.value.split("@")[0];
        h2.innerText=userName;
    }
}
displayUsername();




function clickAndHold(){

    const h2=document.getElementById('display');
    let text=h2.innerText;

    h2.onmousedown=function(){
        h2.innerText=h2.innerText.toUpperCase();
    }
    h2.onmouseup=function(){
        h2.innerText=text;
    }

}


function useEventListener(){
    const h3=document.getElementById('random');
    h3.addEventListener('click',()=>{

        //rgb(255,255,255)
        const red=Math.floor(Math.random()*256);
        const green=Math.floor(Math.random()*256);
        const blue=Math.floor(Math.random()*256);

        h3.style.color=`rgb(${red},${green},${blue})`;
    });
}

