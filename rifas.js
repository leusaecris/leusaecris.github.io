function adcElemento() {
    const numbers = Object.keys(new Array(301).fill(null)).map(Number);
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
        68, 
        69,
        70, 
        71, 
        72, 
        73, 
        74, 
        75,
        76, 
        77, 
        78, 
        79,
        80,
        81,
        82, 
        83,
        84, 
        85,
        87, 
        86,
        88,
        89,
        90,
        91,
        92, 
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100, 
        101,
        102, 
        103, 
        104,
        105, 
        106,
        107, 
        108,
        109, 
        110,
        111,
        112,
        113, 
        114,
        115,
        116, 
        117, 
        118,
        119, 
        121,
        122,
        123, 
        124,
        125,   
        126, 
        127, 
        128,   
        129, 
        130,
        131,
        132,
        133, 
        135,
        136, 
        140, 
        141, 
        143, 
        149, 
        150, 
        154, 
        155, 
        159, 
        160, 
        161, 
        163, 
        165, 
        166, 
        169, 
        170, 
        171, 
        175, 
        176, 
        177, 
        178, 
        179, 
        180,
        181,
        183, 
        187, 
        188, 
        189,
        190,
        191,
        195, 
        196, 
        197,
        198,
        199,
        200,
        213,
        223,
        252
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
