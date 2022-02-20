function adcElemento() {
    const numbers = Object.keys(new Array(301).fill(null)).map(Number);
    numbers.splice(0,101);
    var rifasCompradas = [
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
        120, 
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
        134, 
        135,
        136, 
        137, 
        138, 
        140, 
        141, 
        142,
        143,
        144, 
        145, 
        147, 
        149, 
        150, 
        152, 
        154, 
        155, 
        157,
        158, 
        159, 
        160, 
        161, 
        163, 
        165, 
        166, 
        168, 
        169, 
        170, 
        171, 
        174, 
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
        202,
        205,
        206,
        211,
        213,
        222,
        223,
        224,
        243,
        250,
        252,
        257,
        267,
        268,
        269,
        284,
        288,
        291, 
        297,
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
