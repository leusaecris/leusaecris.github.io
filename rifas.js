function adcElemento() {
    const numbers = Object.keys(new Array(301).fill(null)).map(Number);
    numbers.splice(0,201);
    var rifasCompradas = [
        201, 
        202,
        203, 
        204,
        205,
        206,
        207, 
        208,
        209,
        210,
        211,
        212, 
        213,
        214, 
        215, 
        216,
        217,
        218,
        219,
        220,
        221, 
        222,
        223,
        224,
        225, 
        226, 
        227,
        228,
        229,
        230, 
        231,
        232,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        240, 
        241,
        242, 
        243,
        244,
        245,
        246, 
        247,
        248,
        249,
        251,
        250,
        252,
        253,
        254,
        255,
        256, 
        257,
        258, 
        260, 
        261,
        262,
        264,
        267,
        268,
        269,
        270, 
        271,
        272,
        274,
        276,
        277,
        278,
        280,
        282,
        284,
        285,
        287,
        288,
        290,
        291, 
        294,
        296,
        297,
        298,
        299,
        300
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
