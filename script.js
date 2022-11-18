function gundu(give, guess){
  const pgive = parseFloat(give.value)
  const pguess = parseFloat(guess.value)
  const cgive = Math.floor(Math.random() * 11)
  const cguess = cgive + Math.floor(Math.random() * 11)
  const count = pgive + cgive
  if (pguess == count) {
    alert(`\n-------HASIL-------\nKelereng yang Kamu pertaruhkan: ${pgive}\nKelereng yang Robot pertaruhkan: ${cgive}\n\nTotal akumulasi: ${count}\nYang ditebak Robot: ${cguess} (Kamu jawab ${pguess} WOWWW)\n\nJAWABAN SEMPURNA Tebakanmu sangat akurat! \nCenayang kah?`)
  } else if (Math.abs(count-pguess) < Math.abs(count-cguess)) {
    alert(`\n-------HASIL-------\nKelereng yang Kamu pertaruhkan: ${pgive}\nKelereng yang Robot pertaruhkan: ${cgive}\n\nTotal akumulasi: ${count}\nYang ditebak Robot: ${cguess} (Kamu jawab ${pguess}!!!)\n\nTebakan selisihmu lebih sedikit dari Robot\nHOREEEE Selamat, kamu menang!`)
  } else if (Math.abs(count-pguess) > Math.abs(count-cguess) && count != cguess) {
    alert(`\n-------HASIL-------\nKelereng yang Kamu pertaruhkan: ${pgive}\nKelereng yang Robot pertaruhkan: ${cgive}\n\nTotal akumulasi: ${count}\nYang ditebak Robot: ${cguess} -> Kamu jawab ${pguess} :((\n\nSelisih tebakan Robot lebih sedikit, \nOH TIDAK!!! Kamu kalah...`)
  } else if (Math.abs(count-pguess) > Math.abs(count-cguess) && count == cguess) {
    alert(`\n-------HASIL-------\nKelereng yang Kamu pertaruhkan: ${pgive}\nKelereng yang Robot pertaruhkan: ${cgive}\n\nTotal akumulasi: ${count}\nYang ditebak Robot: ${cguess} -> Kamu jawab ${pguess} :((\n\nTebakan Robot sangat sempurna, \nMohon maaf Kamu kalah telak!`)
  } else if (cguess == pguess) {
    alert(`\n-------HASIL-------\nKelereng yang Kamu pertaruhkan: ${pgive}\nKelereng yang Robot pertaruhkan: ${cgive}\n\nTotal akumulasi: ${count}\nYang ditebak Robot: ${cguess} (aw, sama seperti jawabanmu)\n\nHasilnya SERI deh!`)
  } else {
    alert(`\n-------HASIL-------\nKelereng yang Kamu pertaruhkan: ${pgive}\nKelereng yang Robot pertaruhkan: ${cgive}\n\nTotal akumulasi: ${count}\nYang ditebak Robot: ${cguess} (aw, selisihnya sama)\n\nHasilnya SERI deh!`)
  }
}
