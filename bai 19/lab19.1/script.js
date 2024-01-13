'use strict';

const messageEle = document.querySelector('.message');
const numberEle = document.querySelector('.number');
const scoreEle = document.querySelector('.score');
const highscoreEle = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');
const btncheck = document.querySelector('.check');
const guessEle = document.querySelector('.guess');

//đổi từ const --> let vì sau khi chuyển sang again thì biến sẽ bị thay đổi k dùng const đc nữa
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);
// điểm số bắt đầu là 20
let score = 20;
//thiết lập điểm số cao nhất đầu tiên là 0
let highscore = 0;

btncheck.addEventListener('click', function () {
  const guess = Number(guessEle.value);
  console.log(guess, typeof guess);

  //Khi không có đầu vào
  if (!guess) {
    messageEle.textContent = '⛔No number!';
    //Khi người chơi thắng
  } else if (guess === secretNumber) {
    messageEle.textContent = '🐱‍💻Correct Number!';
    numberEle.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    numberEle.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreEle.textContent = highscore;
    }

    //khi điểm số cao hơn
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageEle.textContent = '↗ Too hight!';
      score--;
      scoreEle.textContent = score;
    } else {
      messageEle.textContent = '💥You lost the game!';
      scoreEle.textContent = 0;
    }

    //khi điểm số thấp hơn
  } else if (guess < secretNumber) {
    //bê nguyên trên phần thắng xuống là được
    if (score > 1) {
      messageEle.textContent = '↘ Too low!';
      score--;
      scoreEle.textContent = score;
    } else {
      messageEle.textContent = '💥You lost the game!';
      scoreEle.textContent = 0;
    }
  }
});

// Chơi lại từ đầu khi ấn vào Again
btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //console.log(secretNumber);
  messageEle.textContent = 'Start gesing...';
  // in lại điểm số về 20
  scoreEle.textContent = score;
  // giá trị bí ẩn hiển thị về ?
  numberEle.textContent = '?';
  // ô nhập giá trị phải cho về rỗng
  guessEle.value = '';

  //trả lại phông nền và kích thước ô số bí ẩn
  document.querySelector('body').style.backgroundColor = '#222';
  numberEle.style.width = '15rem';
});
