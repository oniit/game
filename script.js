function random() {
  return Math.floor(Math.random() * 11)
}

function lucky() {
  const randomGive = document.getElementById('give').value = random();
  document.getElementById('guess').value = random() + randomGive;
}

function gundu(){
  const botGive = random()
  const botGuess = random() + botGive
  const pGive = document.getElementById("give").value
  playerGive = pGive > 10 || pGive < 0 ? random() : pGive
  const pGuess = document.getElementById("guess").value
  playerGuess = pGuess > 20 || pGuess < 0 || pGuess < playerGive ? random() + parseInt(playerGive) : pGuess
  const count = botGive + parseFloat(playerGive)
  const hasil = `<h4><span class="big2">HASIL</span></h4>
  <!--div class="vl"></div-->Kelereng yang <b>Kamu</b> pertaruhkan: ${playerGive}<br>
  Kelereng yang <b>Robot</b> pertaruhkan: ${botGive}<br>
  &nbsp;---------------------------------------------------------- + <br>
  <b><span class="big">Total akumulasi: ${count}</span></b><br><br>
  Yang ditebak Robot: <b>${botGuess}</b>
  `
  
  function getWinner () {
    if (playerGuess == count) {
    return (`${hasil} (Kamu jawab <b>${playerGuess}</b> WOWWW)<br><br>
    <h4><span class="big">JAWABAN SEMPURNA Tebakan sangat akurat!<br>
    Cenayang kah?</span></h4>`)
  } else if (Math.abs(count-playerGuess) < Math.abs(count-botGuess)) {
    return (`${hasil} (Kamu jawab <b>${playerGuess}</b>!!!)<br><br>
    <h4><span class="big">Tebakanmu lebih mendekati dari Robot,<br>
    HOREEEE Selamat, kamu menang!</span></h4>`)
  } else if (Math.abs(count-playerGuess) > Math.abs(count-botGuess) && count != botGuess) {
    return (`${hasil} -> Kamu jawab <b>${playerGuess}</b> :((<br><br>
    <h4><span class="big">Selisih tebakan Robot lebih mendekati,<br>
    OH TIDAK!!! Kamu kalah...</span></h4>`)
  } else if (Math.abs(count-playerGuess) > Math.abs(count-botGuess) && count == botGess) {
    return (`${hasil} -> Kamu jawab <b>${playerGuess}</b> :((<br><br>
    <h4><span class="big">Tebakan Robot sangat sempurna,<br>
    Mohon maaf Kamu kalah telak!</span></h4>`)
  } else if (botGuess == playerGess) {
    return (`${hasil} (aw, sama seperti jawabanmu)<br><br>
    <h4><span class="big">Hasilnya SERI deh!</span></h4>`)
  } else {
    return (`${hasil} (aw, selisihnya sama)<br><br>
    <h4><span class="big">Hasilnya SERI deh!</span></h4>`)
  }
}
  const winner = getWinner()
  const info = document.querySelector('.info')
  info.innerHTML = winner
}

function hapus(){
  var getValue1 = document.getElementById("give");
  var getValue2 = document.getElementById("guess");
  if (getValue1.value !="") {
    getValue1.value = "";
  }
  if (getValue2.value !="") {
    getValue2.value = "";
  }
  document.getElementById("info").innerHTML = ""
 }