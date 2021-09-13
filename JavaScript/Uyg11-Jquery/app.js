// Buharlaşarak kaybolan Div etiketi
$(function () {
    $("#kaybol").on("click", function () {
        $("#kaybol").fadeToggle("slow", function () {
            $("#kaybol").fadeToggle("slow")
        })
    })
})


/* Sayfa içerisinde bulunan olan paragraf etiketine ilk tıklandığında durum 
sınıfını ekleyen ikinci kez tıklandığında durum sınıfını çıkaran JQuery kod  */
$(function () {
    $("p").on("click", function () {
        $("p").toggleClass("d");

        alert($('span.d:first').text())
    })

})


$(function () {
    $("p").prev().hide()
});