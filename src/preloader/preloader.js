$(document).ready(function () {
    var a = 0;
    var b = 0;
    var d = setInterval(function () {
        $(".loading-page .counter h1").html(b + "%");
        $(".loading-page .counter hr").css("width", b + "%");
        a++;
        b++;
        if (101 === a) {
            clearInterval(d);

            // Disparar o evento personalizado "preloaderComplete"
            var event = new Event('preloaderComplete');
            window.dispatchEvent(event);
            
            // Após o carregamento completo, ocultar o preloader e mostrar a div com ID "content".
            $(".loading-page").fadeOut(500, function () {
                $("#content").fadeIn(500);
            });
        }
    }, 20);

    var frasi = [
        "Criando algo especial!<br>Carregando"
    ];

    var casuale = Math.floor(Math.random() * frasi.length);

    $(".frasi-loading").html(frasi[casuale]);
});
