// tentukan pilihan komputer
// jika komputer = 1 = jempol,komputer = 2 = telunjuk, komputer = 3 =kelingking

// tentukan pilihan player
const playerImage = document.querySelectorAll(".player-image");
const komputerImage = document.querySelector(".computer-image");
let play = true;
let countImage = 1;
let time = 300;

// score
let komputerScore = 0;
let playerScore = 0;

let komputerScoreText = document.querySelector(".komputer-score");
let playerScoreText = document.querySelector(".player-score");

playerImage.forEach((pImg) => {
  pImg.addEventListener("click", function () {
    if (play == false) return;
    play = false;
    const myFunc = setInterval(() => {
      countImage > 3 ? (countImage = 1) : (countImage = countImage);
      console.log(countImage);
      changeImageKomputer(countImage);
      countImage++;

      if (time == 900) {
        clearInterval(myFunc);
        time = 0;
      }
      time += 300;
    }, 300);

    let pilihanPlayer = this.classList[1];
    pilihanPlayer == 1 ? (pilihanPlayer = "jempol") : pilihanPlayer == 2 ? (pilihanPlayer = "telunjuk") : (pilihanPlayer = "kelingking");

    // result
    setTimeout(() => {
      let pilKomputer = getRandomKomputer();
      setTimeout(() => {
        gameResult(pilihanPlayer, pilKomputer);
      }, 300);
    }, 1200);
  });
});

function changeImageKomputer(count) {
  komputerImage.src = `./image/${count}.png`;
}

function getRandomKomputer() {
  let pilihanKomputer = Math.ceil(Math.random() * 3);
  komputerImage.src = `./image/${pilihanKomputer}.png`;
  return pilihanKomputer == 1 ? (pilihanKomputer = "jempol") : pilihanKomputer == 2 ? (pilihanKomputer = "telunjuk") : (pilihanKomputer = "kelingking");
}

function gameResult(pilihanPlayer, pilihanKomputer) {
  play = true;
  if (pilihanPlayer == pilihanKomputer) {
    return alert(`anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer} maka hasil imbang`);
  } else if (pilihanPlayer == "jempol") {
    if (pilihanKomputer == "telunjuk") {
      alert(`anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer} maka hasil anda menang`);
      playerScore++;
      playerScoreText.innerHTML = `player score :${playerScore}`;
      return;
    } else {
      alert(`anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer} maka hasil anda kalah`);
      komputerScore++;
      komputerScoreText.innerHTML = `komputer score :${komputerScore}`;
      return;
    }
  } else if (pilihanPlayer == "telunjuk") {
    if (pilihanKomputer == "kelingking") {
      alert(`anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer} maka hasil anda menang`);
      playerScore++;
      playerScoreText.innerHTML = `player score :${playerScore}`;
      return;
    } else {
      alert(`anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer} maka hasil anda kalah`);
      komputerScore++;
      komputerScoreText.innerHTML = `komputer score : ${komputerScore}`;
      return;
    }
  } else if (pilihanPlayer == "kelingking") {
    if (pilihanKomputer == "jempol") {
      alert(`anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer} maka hasil anda menang`);
      playerScore++;
      playerScoreText.innerHTML = `player score :${playerScore}`;
      return;
    } else {
      alert(`anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer} maka hasil anda kalah`);
      komputerScore++;
      komputerScoreText.innerHTML = `komputer score : ${komputerScore}`;
      return;
    }
  }
}
// yeaaa its my first 100 line code aa yeeeee
