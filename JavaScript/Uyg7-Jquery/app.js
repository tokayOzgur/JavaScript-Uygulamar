//  Seçilen işarete göre tıklanan değerleri toplama/çıkarma

$(function () {
  $(".kutu h1").on("click", function () {
    let sayi1 = Number($(this).html());
    let sayi2 = Number($("#yaz").html());

    if ($("#arti").prop("checked") == true) {
      $("#yaz").html(sayi1 + sayi2);
    } else {
      $("#yaz").html(sayi2 - sayi1);
    }
  });
});

// Tıklanan nesnenin zemin rengini değiştirme
$(function () {
  $(".kutu h1").on("click", function () {
    $(this).css({ "background-color": "grey", color: "#fff" });
  });
});
