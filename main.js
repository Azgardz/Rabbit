alert("hi");
alert("aku pingin nggawe suatu aturan");
alert("klik iya lek siap, dan klik tidak lek ga siap");
alert("tapi ketika klik iya, kudu siap mbek setiap sing diperintahkan");
alert("password : Inul_Miskan");

const password = "Inul_Miskan";

let guess = prompt("masukkan password");
while (guess !== password) {
  guess = prompt("Password Anda Salah");
}
alert("okee selamat menimati hehehe");

function clickYes() {
  alert("Ahem, ini aku ono something");
  alert("Siap kah gawe mbuka?");
  alert("ojo klik 'oke' sebelum perintah selesai");
  alert("monggo dibuka (lek wes klik oke)");
  alert("yokpo? siap pora");
  let jawaban = prompt("Siap kah? (balas ya / tidak)");
  if (jawaban !== "ya") {
    pesanWa();
  }
  alert("oke silahkan dirakit hehehe (ojo klik oke sebelum selesai)");
  alert(
    "sebelum e maaf, berhubung waktu sing singkat aku cuma iso ngekeki sedikit"
  );
  alert("aku juga gaiso nggawe seeffort amu dan sepuitis amu wwkk");
  alert("ehmmm, semoga bermaaf la ya");
  alert("opo o ko aku ngekeki iki?");
  alert("aku njenengi kelinci iki 'emul'");
  alert(
    "opo o ko emul? iki terinspirasi teko anime sing seneng ta delok akhir akhir iki"
  );
  alert("judul e Shangri La Frontier");
  alert(
    "ndek cerita e, emul selalu menemani main charackter e ndek keasaan sesusah apapun"
  );
  alert("dan aku pingin amu ojo mendefinisikan lek emul iki aku");
  alert("aku ngerti amu ga pingin berharap nang orang lain karena wedi kecewa");
  alert("tapi berbeda mbe emul, mungkin emul gaakan meninggalkan dirimu");
  alert(
    "aku sadar akan dirimu sing wedi kecewa mbe manusia lain lek terlalu berharap"
  );
  alert("jadiiiii,,,,, amu gak sendiri ko nul, mulai sekarang ono emul");
  alert("juga, dalam merakit emul pasti e sulti kan");
  alert(
    "begitupun kehidupan, dalam mendapat sesuatu pasti angel. tapi ketika berhasil, pasti akan berimbas baik"
  );
  alert(
    "juga lagu iki, makna e mungkin iso ko pahami dewe ya, judul e first rabbit"
  );
  alert("wkwk, lagi lagi rabbit");
  alert("mungkin cukup sekian ya, semoga selalu bahagia ea");
  alert("bonus: lek pingin tako cara nggawe e gaopo. mek 203 baris wkwk");
  pesanAkhir();
}

function clickNo() {
  pesanWa();
}

function pesanWa() {
  let nomor = "6289682369567";
  let pesan = "aku gak siap bim wkwk";
  window.open(`https://wa.me/+${nomor}?text=${pesan}`);
}

function pesanAkhir() {
  let nomor = "6289682369567";
  let chat = "kesan pesanku adalah :";
  window.open(`https://wa.me/+${nomor}?text=${chat}`);
}

var audioPlaying = false;
function music() {
  var audio = document.getElementById("BgMusic");
  if (audioPlaying) audio.pause();
  else audio.play();
  audioPlaying = !audioPlaying;
}
