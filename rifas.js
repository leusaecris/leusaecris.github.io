

function adcElemento() {
    const numbers = Object.keys(new Array(201).fill(null)).map(Number);
    numbers.splice(0,1);
    var rifasCompradas = [
        1,
        2,
        3,
        6,
        15,
        18,
        19,
        25,
        27,
        56,
        65,
        200
    ];

    let rifasDisponiveis = numbers.filter(x => !rifasCompradas.includes(x));
    
    rifasDisponiveis.forEach(function (item, indice, array) {
        var divNova = createElementFromHTML(item);
        document.body.appendChild(divNova);
    });

}
function createElementFromHTML(htmlString) {
    var div = document.createElement('div');

    var htmltexto = "<a href='https://wa.me/5561998413252?text=Olá! Gostaria de adquirir o número " + htmlString + "!' class='wrapper'> <span class='icon-btn facebook'> " + htmlString +
        "<i class='icon-facebook'></i>"
    "<span></span>"
    "</span>"
    "<div class='shadow'></div>"
    "</div>";
    div.innerHTML = htmltexto.trim();

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
}
