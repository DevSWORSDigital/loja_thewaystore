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

    $(document).ready(function(){
        $('.slider').slick({
            infinite: true,
            slidesToShow: 1, // Alterado para 1 para exibir apenas um slide por vez
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1 // Você pode ajustar esse valor para telas médias, se desejar
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1 // Você pode ajustar esse valor para telas menores, se desejar
                    }
                }
            ]
        });
    });

// end: Configurações de banner página principal