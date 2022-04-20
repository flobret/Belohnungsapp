'use strict'
/*
 Blaupause für Türchen:
 <div class="tuerchen">
    <img src="img/2.jpg">
 </div>
*/

// ToDo: 24 Türchen dynamisch generieren, d.h.
// an #kalender anfügen

// for-Schleife -> Kontrollstruktur
// Führe etwas so lange aus, wie etwas der Fall ist
/*
    for (Initialisierung; Bedingung; Inkrementierung) {
        Schleifenrumpf -> Was soll gemacht werden?
    }
*/
for (var i = 1; i <= 6; i++) {

    // i++ (Inkrement), ist dasselbe wie i = i + 1
    console.log(i);

    /* Vorlage:
     <div class="tuerchen">
        <img src="img/*.jpg">
     </div>
     */
    $('#kacheln').append(
        '<div class="tuerchen">' +
        '<div class="number">' + i + '</div>' +
        '<img src="img/' + i + '.jpg">' +
        '</div>'
    );
}

// Jedes Türchen mit dem Klick-Ereignis ausstatten
$('.tuerchen').bind('click', function() {

    // this -> das angeklickte Seitenelement
    // children() -> gehe eine Ebene tiefer
    $(this).children().show();
    $(this).children('.number').hide();
});