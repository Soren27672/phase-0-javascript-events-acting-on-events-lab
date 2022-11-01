
const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#a9a9a9';

document.addEventListener('keydown',function(e) {
    if(e.key === 'ArrowLeft') moveDodgerLeft();
    else if(e.key === 'ArrowRight') moveDodgerRight();
});

function moveDodgerLeft() {
    const x = parseInt(dodger.style.left);
    if(x > 0 ) dodger.style.left = `${parseInt(x,10)-1}px`;
}

function moveDodgerRight() {
    const x = parseInt(dodger.style.left);
    if(x < 360 ) dodger.style.left = `${parseInt(x,10)+1}px`;
}