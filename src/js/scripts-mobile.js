// ini: Esse código JS personaliza o click in e click out da barra de pesquisa

    function addFocus() {
        const searchBar = document.querySelector(".search-bar");
        searchBar.classList.add("focused");
    }

    function removeFocus() {
        const searchBar = document.querySelector(".search-bar");
        searchBar.classList.remove("focused");
    }

    document.addEventListener("click", function(event) {
        const searchBar = document.querySelector(".search-bar");
        const isClickedInside = searchBar.contains(event.target);

        if (!isClickedInside) {
        searchBar.classList.remove("focused");
        }
    });

    const input = document.querySelector("input[type='text']");

        input.addEventListener("blur", function() {
        this.value = ""; // Limpar o valor do input quando escrever e clicar fora
    });


// end: Esse código JS personaliza o click in e click out da barra de pesquisa

// ini: Configurações de banner página principal

// Função para iniciar o slider
function startSlider() {
    var currentIndex = 0;
    var images = [
        "src/image/banner/2.jpg",
        "src/image/banner/3.jpg",
        "src/image/banner/1.jpg",
        "src/image/banner/4.jpg",
        "src/image/banner/5.jpg",
        "src/image/banner/6.jpg"
    ];
    var slider = $('.slider');
    var image = slider.find('img');

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        image.addClass('fade-transition');
        setTimeout(function () {
            image.attr('src', images[currentIndex]);
            image.removeClass('fade-transition');
        }, 1000);
    }

    var interval = setInterval(nextSlide, 4000);

    slider.mouseenter(function () {
        clearInterval(interval);
    });

    slider.mouseleave(function () {
        interval = setInterval(nextSlide, 4000);
    });
}

// Aguardar até que o documento esteja completamente carregado
$(document).ready(function () {
    // Adicionar um ouvinte de evento para o evento personalizado "preloaderComplete"
    window.addEventListener('preloaderComplete', function () {
        // Iniciar o slider após o término do preloader
        startSlider();
    });
});

// end: Configurações de banner página principal