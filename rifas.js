function adcElemento() {
    const numbers = Object.keys(new Array(101).fill(null)).map(Number);
    numbers.splice(0, 1);
    var rifasCompradas = [
        01, 03, 05, 07, 09,
        10, 11, 12, 13, 15, 17, 19,
        21, 23, 25, 28,
        31, 34,
        40, 43, 45, 48,
        50, 54, 57,
        63, 67,
        70, 73, 76, 79,
        81, 88, 96, 99,
        100

    ];

    let rifasDisponiveis = numbers.filter(x => !rifasCompradas.includes(x));

    rifasDisponiveis.forEach(function(item, indice, array) {
        var divNova = createElementFromHTML(item);
        // document.body.appendChild(divNova);
        document.getElementById("cover-container").appendChild(divNova);
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
    return div.firstChild;
}