(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

 // inicio paginação Nagano

document.addEventListener('DOMContentLoaded', function() {

    var page1 = document.getElementById('pageNagano-1');
    var page2 = document.getElementById('pageNagano-2');
    var isTransitioning = false; // Variável de controle para evitar cliques repetidos durante a transição

    function showPage(page) {
        if (isTransitioning) return; // Se já estiver em transição, não executar novamente
        isTransitioning = true; // Definir a variável como true para indicar que uma transição está ocorrendo

        page1.style.display = page === 'pageNagano-1' ? 'block' : 'none';
        page2.style.display = page === 'pageNagano-2' ? 'block' : 'none';

        // Rolagem suave para a página exibida após um atraso de 500ms
        var targetPage = page === 'pageNagano-1' ? page1 : page2;
        setTimeout(function() {
            targetPage.scrollIntoView({ behavior: 'smooth' });
            isTransitioning = false; // Definir a variável como false após a conclusão da transição
        }, 500);
    }

    function setActiveLink(link) {
        var pageLinks = document.querySelectorAll('.pagination .page-link');

        pageLinks.forEach(function(pageLink) {
            pageLink.classList.remove('active');
            pageLink.style.backgroundColor = "#b3b3b3"; // gray page link
        });

        link.classList.add('active');
        link.style.backgroundColor = "#0073b4"; // blue page link
    }

    function handlePageClick(e) {
        e.preventDefault();
        var target = this.getAttribute('href');


        if (target === '#pageNagano-1') {
            showPage('pageNagano-1');
            setActiveLink(this);
        } else if (target === '#pageNagano-2') {
            showPage('pageNagano-2');
            setActiveLink(this);
        }
    }

    var pageLinks = document.querySelectorAll('.pagination .page-link');
    pageLinks.forEach(function(link) {
        link.addEventListener('click', handlePageClick);
    });

    // Verificar a página atual ao carregar a página
    var currentHash = window.location.hash;
    if (currentHash === '#pageNagano-1' || currentHash === '') {
        showPage('pageNagano-1');
        setActiveLink(pageLinks[0]);
    } else if (currentHash === '#pageNagano-2') {
        showPage('pageNagano-2');
        setActiveLink(pageLinks[1]);
    }

});


// fim paginação Nagano



// inicio paginação Gifu

document.addEventListener('DOMContentLoaded', function() {
    var page1 = document.getElementById('pageGifu-1');
    var page2 = document.getElementById('pageGifu-2');
    var isTransitioning = false; // Variável de controle para evitar cliques repetidos durante a transição

    function showPage(page) {
        if (isTransitioning) return; // Se já estiver em transição, não executar novamente
        isTransitioning = true; // Definir a variável como true para indicar que uma transição está ocorrendo

        page1.style.display = page === 'pageGifu-1' ? 'block' : 'none';
        page2.style.display = page === 'pageGifu-2' ? 'block' : 'none';

        // Rolagem suave para a página exibida após um atraso de 500ms
        var targetPage = page === 'pageGifu-1' ? page1 : page2;
        setTimeout(function() {
            targetPage.scrollIntoView({ behavior: 'smooth' });
            isTransitioning = false; // Definir a variável como false após a conclusão da transição
        }, 500);
    }

    function setActiveLink(link) {
        var pageLinks = document.querySelectorAll('.pagination .page-link');

        pageLinks.forEach(function(pageLink) {
            pageLink.classList.remove('active');
            pageLink.style.backgroundColor = "#b3b3b3"; // Set all page links to gray
        });

        link.classList.add('active');
        link.style.backgroundColor = "#0073b4"; // Set the active page link to blue
    }

    function handlePageClick(e) {
        e.preventDefault();
        var target = this.getAttribute('href');

        if (target === '#pageGifu-1') {
            showPage('pageGifu-1');
            setActiveLink(this);
        } else if (target === '#pageGifu-2') {
            showPage('pageGifu-2');
            setActiveLink(this);
        }
    }

    var pageLinks = document.querySelectorAll('.pagination .page-link');
    pageLinks.forEach(function(link) {
        link.addEventListener('click', handlePageClick);
    });

    // Verificar a página atual ao carregar a página
    var currentHash = window.location.hash;
    if (currentHash === '#pageGifu-1' || currentHash === '') {
        showPage('pageGifu-1');
        setActiveLink(pageLinks[0]);
    } else if (currentHash === '#pageGifu-2') {
        showPage('pageGifu-2');
        setActiveLink(pageLinks[1]);
    }
});

// fim paginação Gifu

