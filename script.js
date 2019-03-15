let shape = document.getElementById('shape');
let button = document.querySelector('button');

//game dimulai
function game() {
    this.style.display = 'none';
    random();
    muncul();
}

//hilang
function hilang() {
    shape.style.display = 'none';
}

//muncul
function muncul() {
    shape.style.display = 'block';
}

//random position
function random() {
    let top = Math.floor(Math.random() * 620);
    let left = Math.floor(Math.random() * 620);
    shape.style.left = left + 'px';
    shape.style.top = top + 'px';
}

// //muncul delay
// function munculDelay() {
//     setTimeout(muncul, 1000);
// }

// //hilang secara otomatis
// function hilangOtomatis() {
//     setTimeout(hilang, 1000);
// }



shape.addEventListener('click', game);
button.addEventListener('click', muncul);