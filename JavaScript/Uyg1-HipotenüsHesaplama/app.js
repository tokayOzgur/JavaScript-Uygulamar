hesapla = document.getElementById("hesapla");

hesapla.onclick = function Hipotenus() {
  sonuc = document.getElementById("sonuc");

  sayi1 = Number(document.getElementById("sayi1").value);
  sayi2 = Number(document.getElementById("sayi2").value);

  islem = Math.sqrt(Math.pow(sayi1, 2) + Math.pow(sayi2, 2));

  sonuc.innerHTML = islem;
};
