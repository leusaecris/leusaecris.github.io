function adcElemento() {
    const numbers = Object.keys(new Array(101).fill(null)).map(Number);
    //numbers.splice(0,201);
    var rifasCompradas = [
        
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
    return div.firstChild;
}
