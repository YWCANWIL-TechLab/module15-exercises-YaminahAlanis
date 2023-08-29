
function myAnimation() {
    const element = document.getElementById("animate");
    let pos = 0;
    const id = setInterval(frame, 1000);
    function frame() {
        if(pos === 350) {
            clearInterval(id);
        }
        else {
            pos++;
            element.style.top = `${pos}px`;
            element.style.left = `${pos}px`
        }
    }
}