let cursor = document.querySelector('.cursor');
let btn02 = document.querySelector('.btn02')

document.addEventListener('mousemove', moveCursor)

function moveCursor(e){
    let x = e.clientX
    let y = e.clientY


cursor.style.left = `${x}px`;
cursor.style.top = `${y}px`;
}

document.addEventListener('click', clicked)

function clicked {
    
}