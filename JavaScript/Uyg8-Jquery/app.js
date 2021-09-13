$(function () {
  // verilen değer doğrultusunda zamansal olarak çalışır
  setInterval(renkDegistir, 2000);
});

function renkDegistir() {
  let renk =
    "rgb(" + sayiUret(255) + "," + sayiUret(255) + "," + sayiUret(255) + ")";
  $("body").css({ "background-color": renk, "color": "white" });
}

function sayiUret(sayi) {
  return Math.floor(Math.random() * sayi);
}
