// Ağırlıklı oylama

let hesaplaBtn = document.getElementById("hesapla");

hesaplaBtn.onclick = function () {
  let value = document.getElementById("deger").value;
  //    kural;
  let islem = 1 / (value * value);

  //   panel'e ulaşmak
  let panel = document.getElementById("panel");

  //   h4 etiketi oluşturuldu
  let etiket = document.createElement("h4");
  etiket.classList = "text-center text-danger";
  etiket.textContent = islem;

  panel.appendChild(etiket);
};
