let shape = document.getElementById('shape');
// var shapeRec = document.getElementById('shapeRec');
// let button = document.querySelector('button');

//game dimulai
// function game() {
//     this.style.display = 'none';
//     random();
//     muncul();
// }

var start = new Date().getTime();

function gameover() {
    alert('d');
}

var gameover = setTimeout(gameover, 2000);







//random position
function random(event) {
    let top = Math.floor(Math.random() * 620);
    let left = Math.floor(Math.random() * 620);
    event.style.left = left + 'px';
    event.style.top = top + 'px';

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    // let shape = document.getElementById('shape');
    // hilangOtomatis(shape);
    if (timeTaken > 1) {
        document.getElementById("ket").innerHTML = "lama bener anjg";
        muncul(shape);
    } else {
        document.getElementById("ket").innerHTML = "fast juga kamu";
        muncul(shape);
    }

}

// function randomRec(event) {
//     let top = Math.floor(Math.random() * 620);
//     let left = Math.floor(Math.random() * 620);
//     shapeRec.style.left = left + 'px';
//     shapeRec.style.top = top + 'px';
// }

//muncul
function muncul(event) {

    // setTimeout(function () {
    event.style.display = 'block';
    // }, 100);

    start = new Date().getTime();

    function gameover2() {
        alert('d');
    }
    gameover = setTimeout(gameover2, 2000);


}

// //muncul delay
// function munculDelay() {
//     setTimeout(muncul, 1000);
// }

//hilang secara otomatis
function hilangOtomatis(event) {
    var timeOutId = setTimeout(function () {
        event.style.display = 'none';
    }, 1000);
}





shape.addEventListener('click', function () {
    let shape = document.getElementById('shape');


    clearTimeout(gameover);
    random(shape);

    // hilangOtomatis(shape);
    // muncul(shape);
});


// shapeRec.addEventListener('click', function () {
//     let shapeRec = document.getElementById('shapeRec');
//     random(shapeRec);
//     hilangOtomatis();
// });

button.addEventListener('click', muncul);