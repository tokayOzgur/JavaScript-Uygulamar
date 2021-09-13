// Entropi
let getirBtn = document.getElementById("piAdetGetir");

getirBtn.onclick = function () {
  let panelDiv = document.getElementById("panel");
  let piAdet = Number(document.getElementById("piAdet").value);

  //   Pi Adedi kadar input oluşturuldu
  for (let i = 0; i < piAdet; i++) {
    let etiket = document.createElement("input");
    etiket.type = "number";
    etiket.id = `pi${i}`;
    etiket.placeholder = `${etiket.id} değeri.`;
    panelDiv.appendChild(etiket);
  }

  //   Hesapla butonu oluşturuldu
  let hesaplaBtn = document.createElement("button");
  hesaplaBtn.textContent = "Hesapla";
  hesaplaBtn.classList = "btn btn-primary";
  hesaplaBtn.id = "hesapla";
  panelDiv.appendChild(hesaplaBtn);

  //   Toplam Entropi hesaplama kısmı
  let hesap = document.getElementById("hesapla");

  hesap.onclick = function () {
    let toplam = 0;
    for (let i = 0; i < piAdet; i++) {
      let deger = Number(document.getElementById(`pi${i}`).value);
      toplam = deger * getBaseLog(deger) + toplam;
    }
    toplam = -toplam; // kural

    //    hesaplanan Entropiyi ekrana yazdırma
    let sonuc = document.createElement("h3");
    sonuc.classList = "text-center text-danger alert alert-danger";
    sonuc.textContent = toplam;
    panelDiv.appendChild(sonuc);
  };
};

// Kazanç Ölçütü hesapla

let kazancBtn = document.getElementById("kazancHesapla");
kazancBtn.onclick = function () {
  let Ht = Number(document.getElementById("ht").value);
  let Hxt = document.getElementById("hxt").value;

  let panelDiv2 = document.getElementById("panel2");
  islem = Ht - Hxt;
  //    hesaplanan Kazanç Ölçütünü ekrana yazdırma
  let sonuc = document.createElement("h4");
  sonuc.classList = "text-center text-danger alert alert-danger";
  sonuc.textContent = islem;
  panelDiv2.appendChild(sonuc);
};

// Kazanç Ölçütü hesapla

let kazancOrnBtn = document.getElementById("kazancOranHesapla");
kazancOrnBtn.onclick = function () {
  let kazancOlcut = Number(document.getElementById("kOlcut").value);
  let HPXT = document.getElementById("HPxt").value;

  let panelDiv2 = document.getElementById("panel3");
  islem = kazancOlcut / HPXT;
  //    hesaplanan Kazanç Ölçütünü ekrana yazdırma
  let sonuc = document.createElement("h4");
  sonuc.classList = "text-center text-danger alert alert-danger";
  sonuc.textContent = islem;
  panelDiv2.appendChild(sonuc);
};

// tabana göre logarithma hesaplayıcısı
function getBaseLog(y) {
  return Math.log(y) / Math.log(2);
}
