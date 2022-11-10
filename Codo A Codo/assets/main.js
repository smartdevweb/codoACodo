// Moving Title (single page)
let docTitle = "WE ❤️ CATS      ";
let waiting = 100;

function brandTitle() {
    document.title = docTitle;
    docTitle = docTitle.substring(1, docTitle.length) + docTitle.charAt(0);
    waiting = setTimeout("brandTitle()", waiting);
}
brandTitle();
// Off

// onclick for all of my purchase buttons On
let purchase = document.getElementsByClassName("itemButton");

for (let i = 0; i < purchase.length; i++) {
    purchase[i].onclick = function () {
        alert("¡Agregado Al Carrito!");
    }
};
// Off






