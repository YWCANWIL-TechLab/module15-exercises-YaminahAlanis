// * DOM METHODS

// ! All methods must be called to take effect on the HTML Page

/**
 * Inside module15.html there is an element with id="add-to-me". Change its 
 * value so that it has whatever value the user enters into changeAddToMe.
 * 
 * @param {String} value The Value to change the element to
 */
function changeAddToMe(value) {
    document.getElementById('add-to-me').innerText=value;

    // TODO Finish the function
}
changeAddToMe("hello");

/**
 * In module15.html, there is an element with id="remove-me". Set the value of 
 * that element to an empty string to clear the text.
 */
function clearRemoveMe() {
    document.getElementById("remove-me").innerText="";
    // TODO Finish the function
}
clearRemoveMe();

/**
 * Using the same element you just cleared the value from in the last exercises,
 * remove the element entirely.
 * 
 * Note: You are not removing the text, you are removing the element all 
 * together
 */
function removeTag() {
    const parent=document.getElementById('problems');
    const removeMe=document.getElementById('remove-me');
    parent.removeChild(removeMe);
    // TODO Finish the function
}
removeTag();

/**
 * Using the <p> element with the id of "change-me", please replace the <p>
 * element with a new <p> element. The new <p> element should have a value of 
 * "I am a new element".
 */
function replaceMe() {
    const ohNo=document.getElementById("problems");
    const changes=document.getElementById("change-me");
    const newP=document.createElement("p");
    newP.innerText="I am a new element";
    ohNo.replaceChild(newP,changes);
    // TODO Finish the function
}
replaceMe();

/**
 * Change the value of the <p> element with the id of "intro". Replace this 
 * with the text of your choice.
 */
function changeHeader() {
        document.getElementById("intro").innerText="I am changing from lorem";
        
    // TODO Finish the function
}
changeHeader();
/**
 * In the html doc, there is an iFrame with an id of "frame". Please set its 
 * src attribute to an empty string. The JavaScript Cheatsheet should no longer 
 * render.
 */
function removeFrameSource() {
    // TODO Finish the function //skip
}

/**
 * One of the methods you saw in the PowerPoint was getElementsByTagName. Use
 * this method to return all the <p> elements in the entire HTML doc. Return 
 * the output of this method
 */
function returnAllPElements() {
    return document.getElementsByTagName("p");
    
    // TODO Finish the function
}
returnAllPElements();


/**
 * In the html doc, there are several divs that have a class of "page". Please
 * return all of those elements. You can do this using the 
 * getElementsByClassName() method.
 */
function returnAllPages() {
    // TODO Finish the function//skip
}

/**
 * Create a button element. Then, append that element to the end of the div 
 * with an id of "problems". You can accomplish this using appendChild method.
 * Be sure to use it on the correct element.
 */
function addButtonToProblems() {
    let button=document.createElement("button");
    button.innerText="jobs";
    const misery=document.getElementById("problems");
    misery.appendChild(button);
    // TODO Finish the function
}
addButtonToProblems();

//Finished exercise 1