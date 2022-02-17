function adcElemento() {
    const numbers = Object.keys(new Array(201).fill(null)).map(Number);
    numbers.splice(0,1);
    var rifasCompradas = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        17,
        18,
        19,
        20,
        21,
        24,
        25,
        27,
        32,
        35,
        37,
        43,
        44,
        48,
        49,
        55,
        56,
        61, 
        65,
        70, 
        71, 
        72, 
        75, 
        77, 
        79, 
        94, 
        117, 
        130,
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
    return div.firstChild;
}
