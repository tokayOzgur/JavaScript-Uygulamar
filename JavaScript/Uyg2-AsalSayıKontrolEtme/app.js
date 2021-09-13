// buton onclick işlemine bakıcaz. ondan sonrada işlemlerimiz gerçekleşicek
buton = document.getElementById("kontrolEt");

// buton onclick olduğunda çalışacak fonksiyonumuz
buton.onclick = (e) => {
  e.preventDefault();
  //   alert("asdf");
  // öncelikle kullanıcı tarafından gelen değeri okumalıyız
  let sayi = Number(document.getElementById("sayi").value);
  let output = document.getElementById("sonucDeger");

  if (sayi == 0) {
    text = `${sayi} Asal Değildir.`;
    output.innerHTML = text;
  } else if (sayi === 1) {
    text = `${sayi} Asal Değildir.`;
    output.innerHTML = text;
  } else if (sayi === 2) {
    text = `${sayi} Asaldır.`;
    output.innerHTML = text;
    output.innerHTML = text;
  } else if (sayi >= 2) {
    for (let i = 2; i < sayi; i++) {
      if (sayi % i === 0) {
        text = `${sayi} Asal Değildir.`;
        output.innerHTML = text;
        break;
      } else {
        text = `${sayi} Asaldır.`;
        output.innerHTML = text;
      }
    }
  }
};
