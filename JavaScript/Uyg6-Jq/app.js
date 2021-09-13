// Div içindeki değerleri tıklayarak toplama

$(function () {
  $(".kutu h3").on("click", function () {
    // aktif olan nesneyi ifade eder
    let sayi1 = Number($(this).html());

    // tıkladığımız nesneyi seçer
    let sayi2 = Number($("#yaz").html());

    $("#yaz").html(sayi1 + sayi2);
  });
});
