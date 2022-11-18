function lucky(){
  
}

function gundu(){
  const botGive = Math.floor(Math.random() * 11)
  const botGuess = Math.floor(Math.random() * 11) + botGive
  const playerGive = document.getElementById("give").value
  const playerGuess = document.getElementById("guess").value
  const count = botGive + parseFloat(playerGive)
  const hasil = `<h4><span class="big">HASIL<br></span></h4>
  Kelereng yang <b>Kamu</b> pertaruhkan: ${playerGive}<br>
  Kelereng yang <b>Robot</b> pertaruhkan: ${botGive}<br>
  &emsp;&emsp;&emsp;--------------------------------------------------- + <br>
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
    <h4><span class="big">Tebakanmu lebih sedikit dari Robot,<br>
    HOREEEE Selamat, kamu menang!</span></h4>`)
  } else if (Math.abs(count-playerGuess) > Math.abs(count-botGuess) && count != botGuess) {
    return (`${hasil} -> Kamu jawab <b>${playerGuess}</b> :((<br><br>
    <h4><span class="big">Selisih tebakan Robot lebih sedikit,<br>
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

function clearInput(){
  var getValue1 = document.getElementById("give");
  var getValue2 = document.getElementById("guess");
  if (getValue1.value !="") {
    getValue1.value = "";
  }
  if (getValue2.value !="") {
    getValue2.value = "";
  }
 }
