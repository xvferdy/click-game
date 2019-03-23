alert('Waktu kamu hanya 2 detik untuk masing-masing lingkaran dan kotak.\nJika sudah siap klik OK.');

var circle = document.getElementById('circle');
var rect = document.getElementById('rect');

//variabel awal
var start = new Date().getTime();

function gameover() {
    alert('Apa yang kamu tunggu!?');
    location.reload();
}
var gameover = setTimeout(gameover, 2000);

//ketika linkaran di klik
function random(event) {
    let top = Math.floor(Math.random() * 583);
    let left = Math.floor(Math.random() * 620);
    event.style.left = left + 'px';
    event.style.top = top + 'px';

    ketWaktu();
}

//membuat keterangan waktu
function ketWaktu() {
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = "Waktu: " + timeTaken + " s";
    if (timeTaken > 1) {
        document.getElementById("ket").innerHTML = "Keterangan: Lambat!";
        muncul();
    } else {
        document.getElementById("ket").innerHTML = "Keterangan: Bagus!";
        muncul();
    }
}

//membuat waktu terbaru
function muncul() {
    start = new Date().getTime();

    function gameover2() {
        alert('WAKTU HABIS.\nKlik OK untuk memulai ulang game');
        location.reload();
    }
    gameover = setTimeout(gameover2, 2000);
}

//event
circle.addEventListener('click', function () {
    let circle = document.getElementById('circle');
    clearTimeout(gameover);
    random(circle);
});