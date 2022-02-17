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
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        55,
        56,
        57,
        60,
        61,
        62,
        64, 
        65,
        66,
        70, 
        71, 
        72, 
        75,
        76, 
        77, 
        79,
        80,
        83,
        85,
        88,
        91,
        92, 
        94,
        95,
        97,
        99,
        100, 
        104,
        108,
        110,
        114,
        115,
        117, 
        118,
        121,
        123, 
        125,   
        130,
        132,
        135,
        141, 
        150, 
        166, 
        170, 
        175, 
        177, 
        189,
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
