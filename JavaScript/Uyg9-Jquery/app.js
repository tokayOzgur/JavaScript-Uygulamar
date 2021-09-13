// Jquery Textbox Kullanarak Dikdörtgen Alan ve Çevre Hesaplama

$(function () {
  $("#hesapla").on("click", function () {
    let uzunluk = Number($("#uzunluk").val());
    let genislik = Number($("#genislik").val());

    $("#alan").html("Dikdörtgen Alanı:  " + genislik * uzunluk);
    $("#cevre").html("Dikdörtgen Çevresi:  " + 2 * (genislik + uzunluk)); });
});

