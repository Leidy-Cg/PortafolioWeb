$(document).ready(function(){
    $('.enlaces').click(function(){
        var valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.filtro').show('1000');
        }else{
            $('.filtro').not('.' + valor).hide('1000');
            $('.filtro').filter('.'+ valor).show('1000');
        }

        $('ul .enlaces').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    });
});
jQuery('document').ready(function($){
    var menuBtn = $('.menu-icono'),
    menu = $('.menu ul');

menuBtn.click(function() {

    if( menu.hasClass('show') ) {
        menu.removeClass('show');
    } else{
        menu.addClass('show');
    }
});
});
setTimeout(function () {
    document.getElementById('fondo').style.transform="scale(0)";
}, 4000);
setTimeout(function () {
    document.getElementById('pre-loader').style.transform="scale(0)";
}, 4000);

var imagenes = ['certificados/fotografia1.jpg', 'certificados/fotografia2.jpg', 'certificados/fotografia3.jpg', 'certificados/fotografia4.jpg'],
    cont = 0;

function carrousel(certificado1){
    certificado1.addEventListener('click', e => {
        let atras = certificado1.querySelector('.atras'),
            adelante = certificado1.querySelector('.adelante'),
            img = certificado1.querySelector('.certificadof'),
            tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                certificadof.src = imagenes[cont -1];
                cont--;
            }else{
                certificadof.src= imagenes[imagenes.length - 1 ];
                cont = imagenes.length - 1;
            }
        } else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                certificadof.src = imagenes[cont + 1];
                cont++;
            }else{
                certificadof.src= imagenes[0];
                cont = 0;
            }
        }

    });
}

document.addEventListener("DOMContentLoaded", () => {
    let certificado1 = document.querySelector('.certificado1');

    carrousel(certificado1);
});

var imagenes1 = ['certificados/diseño1.jpg', 'certificados/diseño2.jpg', 'certificados/diseño3.jpg', 'certificados/diseño4.jpg', 'certificados/diseño5.jpg', 'certificados/diseño6.jpg', 'certificados/diseño7.jpg', 'certificados/diseño8.jpg', 'certificados/diseño9.jpg', 'certificados/diseño10.jpg', 'certificados/diseño11.jpg', 'certificados/diseño12.jpg', 'certificados/diseño13.jpg', 'certificados/diseño14.jpg', 'certificados/diseño15.jpg', 'certificados/diseño16.jpg', 'certificados/diseño17.jpg'],
    cont = 0;

function carrousel2(certificado2){
    certificado2.addEventListener('click', e => {
        let atras = certificado2.querySelector('.atras'),
            adelante = certificado2.querySelector('.adelante'),
            img = certificado2.querySelector('.certificadod'),
            tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                certificadod.src = imagenes1[cont -1];
                cont--;
            }else{
                certificadod.src= imagenes1[imagenes1.length - 1 ];
                cont = imagenes.length - 1;
            }
        } else if(tgt == adelante){
            if(cont < imagenes1.length - 1){
                certificadod.src = imagenes1[cont + 1];
                cont++;
            }else{
                certificadod.src= imagenes1[0];
                cont = 0;
            }
        }

    });
}

document.addEventListener("DOMContentLoaded", () => {
    let certificado2 = document.querySelector('.certificado2');

    carrousel2(certificado2);
});

var imagenes2 = ['certificados/marketing1.jpg', 'certificados/marketing2.jpg', 'certificados/marketing3.jpg', 'certificados/marketing4.jpg', 'certificados/marketing5.jpg', 'certificados/marketing6.jpg', 'certificados/marketing7.jpg'],
    cont = 0;

function carrousel3(certificado3){
    certificado3.addEventListener('click', e => {
        let atras = certificado3.querySelector('.atras'),
            adelante = certificado3.querySelector('.adelante'),
            img = certificado3.querySelector('.certificadom'),
            tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                certificadom.src = imagenes2[cont -1];
                cont--;
            }else{
                certificadom.src= imagenes2[imagenes2.length - 1 ];
                cont = imagenes2.length - 1;
            }
        } else if(tgt == adelante){
            if(cont < imagenes2.length - 1){
                certificadom.src = imagenes2[cont + 1];
                cont++;
            }else{
                certificadom.src= imagenes2[0];
                cont = 0;
            }
        }

    });
}

document.addEventListener("DOMContentLoaded", () => {
    let certificado3 = document.querySelector('.certificado3');

    carrousel3(certificado3);
});