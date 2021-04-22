var App = function () {

    function scrollBPage(){
        $(window).scroll(function(){
            if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
               $('.buttons-fixed').addClass('bottomFix');
            }else{
                $('.buttons-fixed').removeClass('bottomFix');
            }
        });
    }
    function openSubmenu(){
        $('.submenu').on('click',function(){
            $(this).toggleClass('open-sub');
        });
    }

    function menuMobile(){
        $('.menu-mobile').on('click',function(){
            $('.menu-line').stop().slideToggle();
        });
    }

    function slideTopo() {
        $('.slide-topo.owl-carousel').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            items:1
        })
    }
    function slideGaleria() {
        $('.slide-galeria.owl-carousel').owlCarousel({
            loop:false,
            margin:15,
            nav:true,
            responsive:{
                0:{
                    items:1.5
                },
                600:{
                    items:2.5
                },
                1000:{
                    items:3.5
                }
            }
        })
    }


    return {
        init: function () {
            slideTopo();
            slideGaleria();
            // openSubmenu();
            menuMobile();
            // slideUnidades();
            // scrollButtons();
            // scrollBPage();
            // headerColors();
        }
    }


}()
