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
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});



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
 