let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', moveCursor)

function moveCursor(e){
    let x = e.clientX
    let y = e.clientY


cursor.style.left = `${x}px`;
cursor.style.top = `${y}px`;
}

