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
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64, 
        65,
        66,
        67,
        69,
        70, 
        71, 
        72, 
        74, 
        75,
        76, 
        77, 
        78, 
        79,
        80,
        81,
        83,
        85,
        86,
        88,
        90,
        91,
        92, 
        93,
        94,
        95,
        97,
        99,
        100, 
        101,
        104,
        106,
        108,
        110,
        112,
        114,
        115,
        117, 
        118,
        121,
        122,
        123, 
        125,   
        128,   
        130,
        131,
        132,
        135,
        141, 
        143, 
        150, 
        154, 
        163, 
        166, 
        170, 
        171, 
        175, 
        177, 
        180,
        189,
        197,
        199,
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
