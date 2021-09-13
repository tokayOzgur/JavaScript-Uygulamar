/*  
Class isimleri ile seçilen nesnelere tıkladığında 
nesnenin içindeki değeri ekrana yazdırma
 */

$(function () {
  $(".kutu h1").on("click", function () {
    // div içindeki değerleri okumak için html() metodu kullanılır.
    //$(this) aktif olan nesneyi ifade eder.
    //$(this) ile tıkladığımız nesneyi seçeriz
    let deger = $(this).html();

    $("#yaz").html(deger);
  });
});
