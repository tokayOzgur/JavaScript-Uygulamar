let dizi = [
  "#D24D57",
  "#e74c3c",
  "#f1c40f",
  "#2c3e50",
  "#8e44ad",
  "#bdc3c7",
  "#1abc9c",
  "#3498db",
  "#95a5a6",
];

// rastgele renk için
renk = document.getElementById("renk");
renk.onclick = function (e) {
  e.preventDefault();

  let rastgele = Math.round(Math.random() * dizi.length);

  document.body.style.backgroundColor = dizi[rastgele];
};

let indis = 2;

// önceki renk için
onceki = document.getElementById("onceki");
onceki.onclick = function (e) {
  e.preventDefault();
  indis--;
  document.body.style.backgroundColor = dizi[indis];
};

// sonrkai renk için
sonraki = document.getElementById("sonraki");
sonraki.onclick = function (e) {
  e.preventDefault();

  indis++;
  document.body.style.backgroundColor = dizi[indis];
};
