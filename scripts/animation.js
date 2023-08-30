
function myAnimation() {
    const element = document.getElementById("animate");
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if(pos === 500) {
            clearInterval(id);
        }
        else {
            pos++;
            element.style.top = `${pos}px`;
            element.style.left = `${pos}px`
        }
    }
}

function animation2() {
    const element = document.getElementById("animate");
    let x = 0;
    let y = 0;
    const id = setInterval(frame, 100);
    function frame() {
        // Random x position (1300px wide)
        x = Math.floor(Math.random() * 1170);    
        y = Math.floor(Math.random() * 450);    // Random y position
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    }

    const timeoutId = setTimeout(() => {
        clearInterval(id);
    }, 5000);
}