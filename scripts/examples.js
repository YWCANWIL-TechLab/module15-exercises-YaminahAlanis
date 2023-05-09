// * DOM METHODS

function changePTag(newContent) {
    const dom = document;
    dom.getElementById("change-me").innerHTML = newContent;
}

changePTag("WOW I'M USING JS TO CHANGE HTML!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");


function makeTextRed() {
    document.getElementById("intro").style.color = "red";
}

document.getElementById('intro').onclick = makeTextRed;

const header = document.getElementById("header");

header.getElementsByTagName("p");

const body = document.getElementById('body');
body.getElementsByClassName('page');

document.getElementById("header").style.color = "blue";