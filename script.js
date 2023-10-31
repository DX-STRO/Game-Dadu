/*
    1. Tuliskan seluruh kode Java Script Anda di sini
    2. Semua file di project ini TIDAK PERLU diubah, selain file ini
    3. Pastikan program anda rapi, terstruktur dengan baik, dan mudah dibaca
*/

var section0 = document.getElementById('section-0');
var section1 = document.getElementById('section-1');
var rollDice = document.getElementById('btn-putar');
var holdDice = document.getElementById('btn-tahan');
var newGame = document.getElementById('btn-baru');

var rollDiceEventListener = function () {
    var turn = document.querySelector('.giliran-main');
    var current0 = document.getElementById('current-0');
    var current1 = document.getElementById('current-1');
    var imageDice = document.getElementsByClassName('dice')[0];
    var randomDice = Math.floor(Math.random() * 6) + 1;
    console.log(randomDice);
    if (section0.classList.contains('player-active')) {
        if (randomDice === 1) {
            current0.innerHTML = 0;
            imageDice.src = './images/dadu-1.png';
            section0.classList.remove('player-active');
            section1.classList.add('player-active');
            turn.value = 'Giliran: Pemain 2';
        } else if (randomDice === 2) {
            current0.innerHTML = parseInt(current0.innerHTML) + randomDice;
            imageDice.src = './images/dadu-2.png';
            
        } else if (randomDice === 3) {
            current0.innerHTML = parseInt(current0.innerHTML) + randomDice;
            imageDice.src = './images/dadu-3.png';
            
        } else if (randomDice === 4) {
            current0.innerHTML = parseInt(current0.innerHTML) + randomDice;
            imageDice.src = './images/dadu-4.png';
            
        } else if (randomDice === 5) {
            current0.innerHTML = parseInt(current0.innerHTML) + randomDice;
            imageDice.src = './images/dadu-5.png';
            
        } else if (randomDice === 6) {
            current0.innerHTML = parseInt(current0.innerHTML) + randomDice;
            imageDice.src = './images/dadu-6.png';
            
        } else {
            console.log('error!');
        }
    } else if (section1.classList.contains('player-active')) {
        if (randomDice === 1) {
            current1.innerHTML = 0;
            imageDice.src = './images/dadu-1.png';
            section1.classList.remove('player-active');
            section0.classList.add('player-active');
            turn.value = 'Giliran: Pemain 1';
        } else if (randomDice === 2) {
            current1.innerHTML = parseInt(current1.innerHTML) + randomDice;
            imageDice.src = './images/dadu-2.png';
        } else if (randomDice === 3) {
            current1.innerHTML = parseInt(current1.innerHTML) + randomDice;
            imageDice.src = './images/dadu-3.png';
        } else if (randomDice === 4) {
            current1.innerHTML = parseInt(current1.innerHTML) + randomDice;
            imageDice.src = './images/dadu-4.png';
        } else if (randomDice === 5) {
            current1.innerHTML = parseInt(current1.innerHTML) + randomDice;
            imageDice.src = './images/dadu-5.png';
        } else if (randomDice === 6) {
            current1.innerHTML = parseInt(current1.innerHTML) + randomDice;
            imageDice.src = './images/dadu-6.png';
        } else {
            console.log('error!');
        }
    }
}
rollDice.addEventListener('click', rollDiceEventListener);

var holdDiceEventListener = function () {
    var turn = document.querySelector('.giliran-main');
    var current0 = document.getElementById('current-0');
    var current1 = document.getElementById('current-1');
    var score0 = document.getElementById('score-0');
    var score1 = document.getElementById('score-1');
    var section0 = document.getElementById('section-0');
    var section1 = document.getElementById('section-1');
    var rollDice = document.getElementById('btn-putar');
    var holdDice = document.getElementById('btn-tahan');
    var imageDice = document.getElementsByClassName('dice')[0];
    var name0 = document.getElementById('name-0');
    var name1 = document.getElementById('name-1');

    if (section0.classList.contains('player-active')) {
        turn.value = 'Giliran: Pemain 2';
        score0.innerHTML = parseInt(score0.innerHTML) + parseInt(current0.innerHTML);
        current0.innerHTML = 0;
        section0.classList.remove('player-active');
        section1.classList.add('player-active');
        if (parseInt(score0.innerHTML) >= 10) {
            turn.value = 'Giliran: Pemain 1';
            name0.innerHTML = 'Pemenang!'
            // imageDice.style.display = 'none';
            section0.classList.add('player-winner');
            section1.classList.remove('player-active');
            rollDice.removeEventListener('click', rollDiceEventListener);
            holdDice.removeEventListener('click', holdDiceEventListener);
        }
    } else if (section1.classList.contains('player-active')) {
        turn.value = 'Giliran: Pemain 1';
        score1.innerHTML = parseInt(score1.innerHTML) + parseInt(current1.innerHTML);
        current1.innerHTML = 0;
        section1.classList.remove('player-active');
        section0.classList.add('player-active');
        if (parseInt(score1.innerHTML) >= 10) {
            turn.value = 'Giliran: Pemain 2';
            name1.innerHTML = 'Pemenang!'
            // imageDice.style.display = 'none';
            section1.classList.add('player-winner');
            section0.classList.remove('player-active');
            rollDice.removeEventListener('click', rollDiceEventListener);
            holdDice.removeEventListener('click', holdDiceEventListener);
        }
    }

}
holdDice.addEventListener('click', holdDiceEventListener);

newGame.addEventListener('click', function () {
    location.reload();
});