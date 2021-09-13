MinMaxNorm = document.getElementById("MinMaxNorm");
MinMaxNorm.onclick = function (e) {
  e.preventDefault();
  //   Değişkenlerin değerleri alındı
  min = document.getElementById("x-min").value;
  max = document.getElementById("x-max").value;
  x = document.getElementById("x-deger").value;
  //
  cozum = document.getElementById("cozum-yaz");

  islem = (x - min) / (max - min);

  cozum.innerHTML = islem;
};

// Z-Score
Zscore = document.getElementById("Zscore");
Zscore.onclick = function (e) {
  e.preventDefault();
  //   Değişkenlerin değerleri alındı
  ss = document.getElementById("Standart-Sapma").value;
  ao = document.getElementById("Aritmetik-Ortalama").value;
  x = document.getElementById("x-Zscore").value;
  //
  cozum = document.getElementById("cozum-yaz2");

  islem = (x - ao) / ss;

  cozum.innerHTML = islem;
};

// Entropi
entropi = document.getElementById("entropiBtn");
entropi.onclick = function (e) {
  e.preventDefault();
  //   Değişkenlerin değerleri alındı
  pi = document.getElementById("entropiDeger").value;
  //
  cozum = document.getElementById("cozum-yaz3");

  islem = pi * Math.log2(pi);

  cozum.innerHTML = islem;
};
