$('body').css({ 'overflow': 'hidden ' });
window.onload = function() {
    $('.preload').fadeOut();
    $('.preload').delay(350).fadeOut('slow');
    $('body').delay(1000).css({ 'overflow': 'visible ' });
}
$(document).ready(function() {
    AOS.init();
    $('.modulo-2-slick').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: '50px',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.modulo-3 .botao .produto-1').on('click', function() {
        if (!$(this).hasClass('ativo')) {
            $('.modulo-3 .botao button').removeClass('ativo');
            $('.modulo-3 .produto .item').removeClass('ativo');
            $('.modulo-3 .produto .produto-1').addClass('transicao');
            $(this).addClass('ativo');
            $('.modulo-3 .produto .produto-1').addClass('ativo');
        }
    })
    $('.modulo-3 .botao .produto-2').on('click', function() {
        if (!$(this).hasClass('ativo')) {
            $('.modulo-3 .botao button').removeClass('ativo');
            $('.modulo-3 .produto .item').removeClass('ativo');
            $('.modulo-3 .produto .produto-2').addClass('transicao');
            $(this).addClass('ativo');
            $('.modulo-3 .produto .produto-2').addClass('ativo');

        }
    })
    $('.modulo-3 .botao .produto-3').on('click', function() {
        if (!$(this).hasClass('ativo')) {
            $('.modulo-3 .botao button').removeClass('ativo');
            $('.modulo-3 .produto .item').removeClass('ativo');
            $(this).addClass('ativo');
            $('.modulo-3 .produto .produto-3').addClass('ativo');
        }
    })
    $('.modulo-3 .botao .produto-4').on('click', function() {
        if (!$(this).hasClass('ativo')) {
            $('.modulo-3 .botao button').removeClass('ativo');
            $('.modulo-3 .produto .item').removeClass('ativo');
            $(this).addClass('ativo');
            $('.modulo-3 .produto .produto-4').addClass('ativo');
        }
    })
    $('.modulo-3 .botao .produto-5').on('click', function() {
        if (!$(this).hasClass('ativo')) {
            $('.modulo-3 .botao button').removeClass('ativo');
            $('.modulo-3 .produto .item').removeClass('ativo');
            $(this).addClass('ativo');
            $('.modulo-3 .produto .produto-5').addClass('ativo');
        }
    })
    $('.modulo-3 .botao .produto-6').on('click', function() {
        if (!$(this).hasClass('ativo')) {
            $('.modulo-3 .botao button').removeClass('ativo');
            $('.modulo-3 .produto .item').removeClass('ativo');
            $(this).addClass('ativo');
            $('.modulo-3 .produto .produto-6').addClass('ativo');
        }
    })
    $('.modulo-3 .botao .produto-7').on('click', function() {
        if (!$(this).hasClass('ativo')) {
            $('.modulo-3 .botao button').removeClass('ativo');
            $('.modulo-3 .produto .item').removeClass('ativo');
            $(this).addClass('ativo');
            $('.modulo-3 .produto .produto-7').addClass('ativo');
        }
    })


    $(function() {
        $('#maca').on('click', function() {
            if (!$('#maca').hasClass('ativo')) {
                $('.modulo-4 .sabores .sub-1').removeClass('ativo');
                $('#maca').addClass('ativo');
                $('#benature').attr('src', 'assets/img/produtos/benature/maca.webp');
            }
        })
    })

    $(function() {
        $('#beterraba').on('click', function() {
            if (!$('#beterraba').hasClass('ativo')) {
                $('.modulo-4 .sabores .sub-1').removeClass('ativo');
                $('#beterraba').addClass('ativo');
                $('#benature').attr('src', 'assets/img/produtos/benature/beterraba.webp');
            }
        })
    })

    $(function() {
        $('#banana').on('click', function() {
            if (!$('#banana').hasClass('ativo')) {
                $('.modulo-4 .sabores .sub-1').removeClass('ativo');
                $('#banana').addClass('ativo');
                $('#benature').attr('src', 'assets/img/produtos/benature/banana.webp');
            }
        })
    })

    $(function() {
        $('#morango').on('click', function() {
            if (!$('#morango').hasClass('ativo')) {
                $('.modulo-4 .sabores .sub-1').removeClass('ativo');
                $('#morango').addClass('ativo');
                $('#benature').attr('src', 'assets/img/produtos/benature/morango.webp');
            }
        })
    })

    $(function() {
        $('#beterraba').on('click', function() {
            if (!$('#beterraba').hasClass('ativo')) {
                $('.modulo-4 .sabores .sub-1').removeClass('ativo');
                $('#beterraba').addClass('ativo');
                $('#benature').attr('src', 'assets/img/produtos/benature/beterraba.webp');
            }
        })
    })

    $(function() {
        $('#maracuja').on('click', function() {
            if (!$('#maracuja').hasClass('ativo')) {
                $('.modulo-4 .sabores .sub-1').removeClass('ativo');
                $('#maracuja').addClass('ativo');
                $('#benature').attr('src', 'assets/img/produtos/benature/maracuja.webp');
            }
        })
    })

    $(function() {
        $('#coco').on('click', function() {
            if (!$('#coco').hasClass('ativo')) {
                $('.modulo-4 .sabores .sub-1').removeClass('ativo');
                $('#coco').addClass('ativo');
                $('#benature').attr('src', 'assets/img/produtos/benature/coco.webp');
            }
        })
    })

    $(function() {
        $('#ameixa').on('click', function() {
            if (!$('#ameixa').hasClass('ativo')) {
                $('.modulo-4 .sabores .sub-1').removeClass('ativo');
                $('#ameixa').addClass('ativo');
                $('#benature').attr('src', 'assets/img/produtos/benature/ameixa.webp');
            }
        })
    })

    $('#select-benature').on('change', function() {
        if ($('#select-benature option:selected').val() == 1) {
            $('#benature').attr('src', 'assets/img/produtos/benature/maca.webp');
        } else if ($('#select-benature option:selected').val() == 2) {
            $('#benature').attr('src', 'assets/img/produtos/benature/beterraba.webp');
        } else if ($('#select-benature option:selected').val() == 3) {
            $('#benature').attr('src', 'assets/img/produtos/benature/banana.webp');
        } else if ($('#select-benature option:selected').val() == 4) {
            $('#benature').attr('src', 'assets/img/produtos/benature/morango.webp');
        } else if ($('#select-benature option:selected').val() == 5) {
            $('#benature').attr('src', 'assets/img/produtos/benature/maracuja.webp');
        } else if ($('#select-benature option:selected').val() == 6) {
            $('#benature').attr('src', 'assets/img/produtos/benature/coco.webp');
        } else if ($('#select-benature option:selected').val() == 7) {
            $('#benature').attr('src', 'assets/img/produtos/benature/ameixa.webp');
        }
    })




    if ($(window).width() < 992) {
        $('.menu-1 .open').on('click', function() {
            if ($('.menu-1 .menu').hasClass('ativo')) {
                $('.menu-1 .menu').removeClass('ativo');
            } else {
                $(".menu-1 .menu").addClass('ativo');
            }
        })
        $('.menu-1 .close').on('click', function() {
            if ($('.menu-1 .menu').hasClass('ativo')) {
                $('.menu-1 .menu').removeClass('ativo');
            } else {
                $(".menu-1 .menu").addClass('ativo');
            }
        })
        $('.menu-1 .sub-1').on('click', function() {
            $('.menu-1 .menu').removeClass('ativo');
        })

    }
    $(window).scroll(function() {
        st = $(this).scrollTop();
        atual = st;
        st = (st / 2);
        add1 = 40 + st;
        add2 = 500 + st;
        add3 = 700 + st;
        add4 = -500 + st;
        add5 = -800 + st;
        add6 = -1200 + st;
        add7 = -1500 + st;
        add8 = -1700 + st;
        add9 = -2100 + st;
        add1 = parseInt(add1);
        add2 = parseInt(add2);
        add3 = parseInt(add3);
        add4 = parseInt(add4);
        add5 = parseInt(add5);
        add6 = parseInt(add6);
        add7 = parseInt(add7);
        add8 = parseInt(add8);
        add9 = parseInt(add9);
        st = st + 'px';
        $('.modulo-7 .add-1').css('top', add1);
        $('.modulo-7 .add-2').css('top', add2);
        $('.modulo-7 .add-3').css('top', add3);
        $('.modulo-7 .add-4').css('top', add4);
        $('.modulo-7 .add-5').css('top', add5);
        $('.modulo-7 .add-6').css('top', add6);
        $('.modulo-7 .add-7').css('top', add7);
        $('.modulo-7 .add-8').css('top', add8);
        $('.modulo-7 .add-9').css('top', add9);
    });
});