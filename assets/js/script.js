(function ($) {
    "use strict";



  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);



const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});



addEventListener('DOMContentLoaded', () => {
      const contadores = document.querySelectorAll('.numerocontador')
      const velocidad = 1000

     const animarContadores = () => {
          for (const contador of contadores){
              const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad


                if(valor_actual < cantidad_maxima){
                  contador.innerText = Math.ceil(valor_actual + incremento)
                  setTimeout(actualizar_contador, 55)
                }
                else{
                    contador.innerText = cantidad_maxima
                }
              }
              actualizar_contador()
      }


  }

  const mostrarContadores = elementos => {
    elementos.forEach(elemento => {
        if(elemento.isIntersecting){
          elemento.target.classList.add('animar')
          elemento.target.classList.remove('ocultar')
          setTimeout(animarContadores, 300)
        }
    });
  }

    const  observer = new IntersectionObserver(mostrarContadores, {
      threshold: 0.75 
    })

      const elementosHTML = document.querySelectorAll('.divcontador')
      elementosHTML.forEach(elementoHTML => {
          observer.observe(elementoHTML)
      })
})




